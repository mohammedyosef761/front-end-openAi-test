import React, { ReactNode } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <div style={{ flex: 1, marginTop: "43px" }}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
