import React from "react";
import { IoIosAdd, IoMdVideocam } from "react-icons/io";
import PostCard from "./PostCard";

const MiddlePart = () => {
  const stories = [1, 2, 3, 4, 5, 6];

  const handleOpenCreateModel = () => {
    console.log("Open create model");
  };

  return (
    <>
      <div className="px-4  md:px-20 py-8">
        {/* Stories Section */}
        <div className="flex items-center overflow-x-auto pb-4 space-x-4 scrollbar-hide">
          {/* Upload Story Card */}
          <div className="flex flex-col items-center shrink-0 cursor-pointer group">
            <div className="relative mb-2">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 p-1 group-hover:scale-105 transition-transform">
                <div className="bg-gray-800 rounded-full h-full w-full flex items-center justify-center">
                  <IoIosAdd className="w-8 h-8 text-purple-500" />
                </div>
              </div>
              <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-purple-500 rounded-full transition-all" />
            </div>
            <p className="text-gray-300 group-hover:text-white text-sm transition-colors">
              Upload Story
            </p>
          </div>

          {/* Stories */}
          {stories.map((story, index) => (
            <div
              key={index}
              className="flex flex-col items-center shrink-0 cursor-pointer group"
            >
              <div className="relative mb-2">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-pink-600 to-orange-500 p-1 group-hover:scale-105 transition-transform">
                  <img
                    src="/social.png"
                    alt={`Story ${index + 1}`}
                    className="rounded-full h-full w-full object-cover border-2 border-gray-800"
                  />
                </div>
                <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-pink-500 rounded-full transition-all" />
              </div>
              <p className="text-gray-300 group-hover:text-white text-sm transition-colors">
                Story {index + 1}
              </p>
            </div>
          ))}
        </div>

        {/* Create Post Section */}
        <section className="flex flex-col md:flex-row gap-4 items-center mt-8 w-full">
          {/* Author and Input */}
          <div className="flex items-center gap-4 w-full md:flex-1">
            <div className="h-10 w-10 rounded-full bg-gray-700 shrink-0" />
            <input
              type="text"
              placeholder="Create a post"
              className="w-full bg-gray-100 px-4 py-2 rounded-full border-2 border-black h-12 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 shrink-0 w-full md:w-auto justify-between md:justify-normal">
            <button
              onClick={handleOpenCreateModel}
              className="flex flex-col items-center hover:text-white text-gray-600 transition-colors"
            >
              <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 mb-1 transition-colors">
                <IoIosAdd className="w-6 h-6 text-purple-500" />
              </div>
              <span className="text-sm">Media</span>
            </button>

            <button
              onClick={handleOpenCreateModel}
              className="flex flex-col items-center hover:text-white text-gray-600 transition-colors"
            >
              <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 mb-1 transition-colors">
                <IoMdVideocam className="w-6 h-6 text-purple-500" />
              </div>
              <span className="text-sm">Live Video</span>
            </button>

            <button
              onClick={handleOpenCreateModel}
              className="flex flex-col items-center hover:text-white text-gray-600 transition-colors"
            >
              <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 mb-1 transition-colors">
                <IoMdVideocam className="w-6 h-6 text-purple-500" />
              </div>
              <span className="text-sm">Article</span>
            </button>
          </div>
        </section>
        <div className="mt-5 space-y-5">
          <PostCard />
        </div>
      </div>
    </>
  );
};

export default MiddlePart;
