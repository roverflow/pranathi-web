import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <IndexNavbar></IndexNavbar>
      <div className="wrapper">
        {children}
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
