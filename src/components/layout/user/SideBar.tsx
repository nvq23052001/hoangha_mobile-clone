import React from "react";
import { Link } from "react-router-dom";
const SideBar = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <ul
        className="flex  flex-col mb-0 list-none flex-wrap pt-3 pb-4 basis-1/4 mr-6"
        role="tablist"
      >
        <li className="mb-4 last:mr-0 text-center  px-72 min-w-140-px">
          <Link to="/admin/product">
            <span
              className={
                "text-xs font-bold uppercase px-6 py-3 shadow-lg rounded block leading-normal " +
                (openTab === 1
                  ? "text-white bg-lightBlue-600"
                  : "text-lightBlue-600 bg-white")
              }
              onClick={(e) => {
                setOpenTab(1);
              }}
              data-toggle="tab"
              role="tablist"
            >
              <i className="fas fa-space-shuttle text-base mr-1"></i> Products
            </span>
          </Link>
        </li>
        <li className="mb-4 last:mr-0 text-center  px-72 min-w-140-px">
          <Link
            to="/admin/category"
            className={
              "text-xs font-bold uppercase px-6 py-3 shadow-lg rounded block leading-normal " +
              (openTab === 2
                ? "text-white bg-lightBlue-600"
                : "text-lightBlue-600 bg-white")
            }
            onClick={(e) => {
              setOpenTab(2);
            }}
            data-toggle="tab"
            role="tablist"
          >
            <i className="fas fa-cog text-base mr-1"></i> Category
          </Link>
        </li>
        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center min-w-140-px">
          <Link
            to="/admin/users"
            className={
              "text-xs font-bold uppercase px-6 py-3 shadow-lg rounded block leading-normal " +
              (openTab === 3
                ? "text-white bg-lightBlue-600"
                : "text-lightBlue-600 bg-white")
            }
            onClick={(e) => {
              setOpenTab(3);
            }}
            data-toggle="tab"
            role="tablist"
          >
            <i className="fas fa-cog text-base mr-1"></i> Users
          </Link>
        </li>
      </ul>
    </>
  );
};

export default SideBar;
