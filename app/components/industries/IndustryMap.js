// "use client";

// import { useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import { useRouter } from "next/navigation";
// import portfolioData from "@/data/portfolioData";
// import "leaflet/dist/leaflet.css";

// // Dynamic import for SSR-safe React-Leaflet
// const MapContainer = dynamic(
//   () => import("react-leaflet").then((mod) => mod.MapContainer),
//   { ssr: false }
// );
// const TileLayer = dynamic(
//   () => import("react-leaflet").then((mod) => mod.TileLayer),
//   { ssr: false }
// );
// const Marker = dynamic(
//   () => import("react-leaflet").then((mod) => mod.Marker),
//   { ssr: false }
// );
// const Popup = dynamic(
//   () => import("react-leaflet").then((mod) => mod.Popup),
//   { ssr: false }
// );

// // Region → Representative Country Mapping
// const regionMapping = {
//   LATAM: "Brazil",
//   Europe: "Germany",
//   Asia: "India",
//   NorthAmerica: "USA",
//   Africa: "South Africa",
//   Oceania: "Australia",
// };

// const IndustryMap = () => {
//   const [locations, setLocations] = useState([]);
//   const [icon, setIcon] = useState(null);
//   const router = useRouter();

//   // Leaflet icon
//   useEffect(() => {
//     const L = require("leaflet");

//     const customIcon = new L.Icon({
//       iconUrl: "/images/industries/map-marker.png",
//       iconSize: [25, 30],
//       iconAnchor: [17, 35],
//       popupAnchor: [0, -30],
//     });

//     setIcon(customIcon);
//   }, []);

//   // Fetch coordinates for each location
//   useEffect(() => {
//     const fetchCoordinates = async () => {
//       const results = [];

//       for (const item of portfolioData) {
//         let locationField = item.hero.review.meta.location;

//         // Split multiple regions if "&" present
//         const regions = locationField.split("&").map((r) => r.trim());

//         for (const region of regions) {
//           // Map region to representative country if exists
//           const locationName = regionMapping[region] || region;

//           try {
//             const res = await fetch(
//               `https://nominatim.openstreetmap.org/search?format=json&q=${locationName}`
//             );
//             const data = await res.json();

//             if (data && data.length > 0) {
//               results.push({
//                 ...item,
//                 lat: parseFloat(data[0].lat),
//                 lon: parseFloat(data[0].lon),
//                 _region: region, // optional, can use in popup if needed
//               });
//             }
//           } catch (error) {
//             console.error("Geocoding error:", error);
//           }
//         }
//       }

//       setLocations(results);
//     };

//     fetchCoordinates();
//   }, []);

//   return (
//     <div className="w-full h-[600px] rounded-[24px] overflow-hidden">
//       {icon && (
//         <MapContainer
//           center={[20, 0]}
//           zoom={2}
//           scrollWheelZoom={false}
//           className="w-full h-full"
//         >
//           <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
//             url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
//           />

//           {locations.map((item, index) => (
//             <Marker
//               key={`${item.slug}-${index}`} // ✅ unique key even for multiple regions
//               position={[item.lat, item.lon]}
//               icon={icon}
//             >
//               <Popup>
//                 <div
//                   className="flex flex-col items-center cursor-pointer"
//                   onClick={() => router.push(`/industries/${item.slug}`)}
//                 >
//                   <img
//                     src={item.about.logoImg}
//                     alt={item.hero.name}
//                     className="w-16 mb-2"
//                   />
//                   <p className="font-semibold text-sm">{item.hero.name}</p>
//                 </div>
//               </Popup>
//             </Marker>
//           ))}
//         </MapContainer>
//       )}
//     </div>
//   );
// };

// export default IndustryMap;






"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import "leaflet/dist/leaflet.css";
import portfolioData from "@/data/portfolioData";

// Dynamic imports for React-Leaflet
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

// Region → Representative Country Mapping
const regionMapping = {
  LATAM: "Brazil",
  Europe: "Germany",
  Asia: "India",
  NorthAmerica: "USA",
  Africa: "South Africa",
  Oceania: "Australia",
};

const IndustryMap = ({ projects }) => {
  const [locations, setLocations] = useState([]);
  const [icon, setIcon] = useState(null);
  const router = useRouter();

  // Leaflet custom icon
  useEffect(() => {
    const L = require("leaflet");

    const customIcon = new L.Icon({
      iconUrl: "/images/industries/map-marker.png",
      iconSize: [25, 30],
      iconAnchor: [17, 35],
      popupAnchor: [0, -30],
    });

    setIcon(customIcon);
  }, []);

  // Cache for coordinates to avoid repeated API calls
  const [geoCache, setGeoCache] = useState({});

  useEffect(() => {
    const fetchCoordinates = async () => {
      const results = [];

      for (const item of projects) {
        const locationField = item.hero?.review?.meta?.location || "";
        if (!locationField) continue;

        const regions = locationField.split("&").map((r) => r.trim());

        for (const region of regions) {
          const locationName = regionMapping[region] || region;

          // Use cached coordinates if available
          if (geoCache[locationName]) {
            results.push({
              ...item,
              lat: geoCache[locationName].lat,
              lon: geoCache[locationName].lon,
              _region: region,
            });
            continue;
          }

          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/search?format=json&q=${locationName}`
            );
            const data = await res.json();

            if (data && data.length > 0) {
              results.push({
                ...item,
                lat: parseFloat(data[0].lat),
                lon: parseFloat(data[0].lon),
                _region: region,
              });

              setGeoCache((prev) => ({
                ...prev,
                [locationName]: {
                  lat: parseFloat(data[0].lat),
                  lon: parseFloat(data[0].lon),
                },
              }));
            }
          } catch (error) {
            console.error("Geocoding error:", error);
          }
        }
      }

      setLocations(results);
    };

    fetchCoordinates();
  }, [projects, geoCache]);

  return (
    <div className="w-full h-[600px] rounded-[24px] overflow-hidden">
      {icon && (
        <MapContainer
          center={[30, 30]}
          zoom={1}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />

          {locations.map((item, index) => (
            <Marker
              key={`${item.slug}-${index}`}
              position={[item.lat, item.lon]}
              icon={icon}
            >
              <Popup>
                <div
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => router.push(`/industries/${item.slug}`)}
                >
                  <img
                    src={item.about.logoImg}
                    alt={item.hero.name}
                    className="w-16 mb-2"
                  />
                  <p className="font-semibold text-sm">{item.hero.name}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
};

export default IndustryMap;
