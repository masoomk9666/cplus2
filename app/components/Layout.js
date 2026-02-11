// components/Layout.js
import Footer from "./layout/Footer";
import FooterB from "./layout/FooterB";
import Header from "./layout/Header";
import HeaderB from "./layout/HeaderB";
export default function Layout({ children, footerType = "A", headerType = "A" }) {
  return (
    <div className="flex flex-col min-h-screen">
      {headerType === "B" ? <HeaderB /> : <Header />}
      <main className="flex-1">{children}</main>
      {footerType === "B" ? <FooterB /> : <Footer />}
    </div>
  );
}
