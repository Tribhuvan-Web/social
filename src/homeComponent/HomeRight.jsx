// HomeRight.js
import React from "react";
import SearchUser from "./SearchUser";
import PopularUserPart from "./PopularUserPart";

const HomeRight = () => {
  const users = [
    { id: 1, name: "Reyansh Singh", date: "2023-08-15" },
    { id: 2, name: "Aarav Patel", date: "2023-08-14" },
    { id: 3, name: "Sanya Gupta", date: "2023-08-13" },
    { id: 4, name: "Vihaan Sharma", date: "2023-08-12" },
    { id: 5, name: "Ananya Reddy", date: "2023-08-11" },
  ];

  return (
    <div className="pr-2 md:pr-5 lg:pr-8 w-full max-w-lg mx-auto">
      <SearchUser />

      <div className="py-5 space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-2">
          <h2 className="font-bold text-white text-lg mb-2 md:mb-0">
            People you may know
          </h2>
          <button className="text-[#2295e5] hover:text-[#1a7bb9] font-semibold text-sm">
            View all Suggestions
          </button>
        </div>

        <div className="space-y-4">
          {users.map((user) => (
            <PopularUserPart key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
