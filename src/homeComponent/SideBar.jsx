import React, { useEffect, useRef, useState } from "react";
import { navigationMenu } from "../Components/SidebarNavigation";
import { PiDotsThreeOutline } from "react-icons/pi";
import { useGetUserName } from "../useQuery";
import { useStoreContext } from "../contextApi/ContextApi";
import { Navigate, useNavigate } from "react-router-dom";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const triggerRef = useRef();

  const handleOpen = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  const { token } = useStoreContext();

  const mainNavigate = useNavigate();

  const profileHandler = () => {
    mainNavigate("/profile");
    handleClose();
  };

  const logoutHandler = () => {
    localStorage.removeItem("JWT_TOKEN");
    window.location.reload();
  };

  const { data: username } = useGetUserName(token);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        !triggerRef.current.contains(e.target) &&
        !menuRef.current.contains(e.target)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="h-screen text-white flex flex-col justify-between sticky top-0 p-6 w-64">
      <div className="mb-12 pl-3">
        <h1 className="text-2xl font-bold text-white">Togetha</h1>
        <p className="text-sm text-gray-400">Connect & Create</p>
      </div>

      <div className="space-y-4 flex-1">
        {navigationMenu.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.title}
              href={item.path}
              className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-800 transition-colors duration-200 group"
            >
              <Icon className="w-6 h-6 text-white group-hover:text-white" />
              <span className="text-gray-300 group-hover:text-white">
                {item.title}
              </span>
            </a>
          );
        })}
      </div>

      <div className="border-t border-gray-700 pt-4">
        <div className="flex items-center space-x-3 px-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-sm">U</span>
          </div>
          <div>
            <p className="text-sm font-medium">{username}</p>
            <p className="text-xs text-gray-400">@{username}</p>
          </div>
          <div className="flex flex-col justify-end " ref={triggerRef}>
            <button
              onClick={handleOpen}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <PiDotsThreeOutline className="text-2xl text-gray-600" />
            </button>

            {isOpen && (
              <div
                ref={menuRef}
                className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100"
              >
                <div className="py-1">
                  <button
                    onClick={profileHandler}
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                  >
                    Profile
                  </button>
                  <button
                    onClick={logoutHandler}
                    className="block w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 text-left"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
