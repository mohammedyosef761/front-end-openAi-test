import React, { ReactNode } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ marginTop: "43px", minHeight: "350px" }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
