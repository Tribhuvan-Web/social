import React from "react";
import SideBar from "../homeComponent/SideBar";
import { Outlet, useMatch } from "react-router-dom";
import HomeRight from "../homeComponent/HomeRight";

const HomePage = () => {
  const isHome = useMatch("/");

  return (
    <div className="px-5 bg-black">
      <div className="flex flex-col lg:flex-row">
        {/* Left Sidebar */}
        <div className="hidden lg:block lg:w-3/12 sticky top-0 h-screen">
          <SideBar />
        </div>

        {/* Dynamic Middle Section */}
        <div
          className={`px-5 w-full ${
            isHome ? "lg:w-6/12" : "lg:w-9/12"
          } flex justify-center`}
        >
          <Outlet />
        </div>

        {/* Right Section */}
        <div className="hidden lg:block lg:w-3/12 relative top-0">
          <HomeRight />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
