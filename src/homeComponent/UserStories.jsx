import React from "react";

const UserStories = () => {
  return (
    <div>
      <div className="flex flex-col items-center mr-4 cursor-pointer">
        <Avatar
          src="/social.png"
          sx={{ width: "5rem", height: "5rem" }}
          className="flex flex-col items-center mr-4 cursor-pointer"
        >
          <IoIosAdd className="w-[3rem] " />
        </Avatar>
        <p className="text-white">Reyansh singn</p>
      </div>
    </div>
  );
};

export default UserStories;
