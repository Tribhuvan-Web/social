// SearchUser.js
import React from "react";

const SearchUser = () => {
  return (
    <div className="relative mt-4 mx-2 bg-white rounded-lg">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search users..."
        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#2295e5] focus:ring-1 focus:ring-[#2295e5] transition-colors"
      />
    </div>
  );
};

export default SearchUser;
