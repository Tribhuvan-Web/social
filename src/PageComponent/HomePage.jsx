import React from "react";
import SideBar from "../homeComponent/SideBar";
import { Route, Routes, useLocation } from "react-router-dom";
import HomeRight from "../homeComponent/HomeRight";
import MiddlePart from "../homeComponent/MiddlePart";

const HomePage = () => {
  const location = useLocation();

  return (
    <div className="px-5 bg-black">
      <div className="flex flex-col lg:flex-row">
        {/* Left Sidebar - Hidden on mobile, sticky on desktop */}
        <div className="hidden lg:block lg:w-3/12 sticky top-0 h-screen">
          <SideBar />
        </div>

        {/* Middle Section - Full width on mobile, responsive width on desktop */}
        <div
          className={`px-5 w-full ${
            location.pathname === "/" ? "lg:w-6/12" : "lg:w-9/12"
          } flex justify-center`}
        >
          <MiddlePart />
        </div>

        {/* Right Section - Hidden on mobile */}
        <div className="hidden lg:block lg:w-3/12 relative top-0">
          <HomeRight />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
