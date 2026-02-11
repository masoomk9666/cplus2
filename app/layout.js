import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/layout/Header";
// import Footer from "./components/layout/Footer";  

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Cplus Soft",
  description: "Your Business AI Solutions Partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* <Header /> */}

        {children}

        {/* <Footer /> */}
      </body>
    </html>
  );
}
