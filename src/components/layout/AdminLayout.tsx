import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./user/Header";
import SideBar from "./user/SideBar";
import Footer from "./user/Footer";
function AdminLayout() {
  return (
    <>
      <Header />

      <div className="flex flex-wrap mx-10 text-2xl">
        <SideBar />
        <div className="flex-1 border-solid ">
          <div className="relative pt-1">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-lightBlue-200"></div>
          </div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminLayout;
