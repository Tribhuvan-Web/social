// PopularUserPart.js
import React from "react";

const PopularUserPart = ({ user }) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg transition-colors">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-[#2295e5] flex items-center justify-center text-white hover:text-black font-medium">
          {user.name[0]}
        </div>
        <div>
          <h3 className="font-semibold text-white">{user.name}</h3>
          <p className="text-white text-sm">Suggested for you</p>
        </div>
      </div>
      <button className="px-3 py-1.5 text-sm font-medium rounded-full bg-[#2295e5] hover:bg-[#1a7bb9] text-white transition-colors">
        Follow
      </button>
    </div>
  );
};

export default PopularUserPart;
