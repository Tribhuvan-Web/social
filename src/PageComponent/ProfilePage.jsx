import React, { useState } from "react";
import PostCard from "../homeComponent/PostCard";
import UserReelCard from "../Components/UserReelCard";

const ProfilePage = () => {
  const tabs = [
    { value: "post", name: "Post" },
    { value: "reels", name: "Reels" },
    { value: "saved", name: "Saved" },
    { value: "repost", name: "Repost" },
  ];
  const [activeTab, setActiveTab] = useState("post");
  const [isFollowing, setIsFollowing] = useState(false);

  const posts = Array(6).fill(null);
  const savedPosts = Array(6).fill(null);
  const reels = Array(6).fill(null);

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Cover Photo */}
        <div className="h-48 md:h-64 bg-gradient-to-r from-blue-400 to-[#2295E5] rounded-t-lg relative">
          <div className="absolute -bottom-16 left-4">
            <img
              src="/social.png"
              alt="Profile"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white"
            />
          </div>
        </div>

        {/* Profile Header */}
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setIsFollowing(!isFollowing)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              isFollowing
                ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                : "bg-[#2295E5] text-white hover:bg-[#1c7dbb]"
            }`}
          >
            {isFollowing ? "Following" : "Follow"}
          </button>
        </div>

        {/* Profile Info */}
        <div className="mt-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Reyansh Singh
          </h1>
          <p className="text-gray-600 mt-1">@Reyansh_Singh_Rajput</p>

          <div className="flex gap-6 mt-4">
            <div className="flex items-center gap-1">
              <span className="font-bold">142</span>
              <span className="text-gray-600">Posts</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-bold">2.5k</span>
              <span className="text-gray-600">Followers</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-bold">856</span>
              <span className="text-gray-600">Following</span>
            </div>
          </div>

          <p className="mt-4 text-gray-700">
            Digital Creator ✨ | Content Writer 📝 | Exploring the world of tech
            & creativity 🌍
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8 border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-4 py-4 font-medium transition-colors ${
                  activeTab === tab.value
                    ? "text-[#2295E5] border-b-2 border-[#2295E5]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="mt-6">
          {activeTab === "post" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {posts.map((_, index) => (
                <PostCard key={index} />
              ))}
            </div>
          )}

          {(activeTab === "reels" || activeTab === "repost") && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {reels.map((_, index) => (
                <UserReelCard key={index} />
              ))}
            </div>
          )}

          {activeTab === "saved" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {savedPosts.map((_, index) => (
                <PostCard key={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
