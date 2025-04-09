import React from "react";
import Login from "./Login";

const Authentication = () => {
  return (
    <div className="bg-black flex items-center justify-center h-[100vh]">
      <div className="mx-[10%] w-[90%] h-[85%] flex justify-center ">
        <div className="hidden md:grid grid-cols-4 h-full">
          <div className="col-span-2 h-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="/social.png"
              alt="Social connection"
            />
          </div>
          <div className="col-span-2 flex items-center justify-center bg-red-400 p-6">
            <div className="w-full max-w-lg rounded-lg shadow-lg p-10 space-y-6">
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-gray-800">Togetha</h1>
                <p className="text-gray-600 text-base">
                  Connecting people together
                </p>
              </div>
              <Login />
            </div>
          </div>
        </div>

        <div className="md:hidden w-full px-[10%] py-6 min-h-full">
          <div className="bg-white rounded-lg shadow-lg p-10 space-y-6">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-gray-800">Togetha</h1>
              <p className="text-gray-600 text-base">
                Connecting people together
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
