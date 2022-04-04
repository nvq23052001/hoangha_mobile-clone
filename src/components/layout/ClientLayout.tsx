import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./client/Header.jsx";
import Footer from "./client/Footer";
function ClientLayout() {
  return (
    <>
      <Header />
      <div className="main">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default ClientLayout;
