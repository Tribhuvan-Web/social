import React, { useState } from "react";
import PostCard from "../homeComponent/PostCard";
import UserReelCard from "../Components/UserReelCard";
import { useStoreContext } from "../contextApi/ContextApi";
import { useGetUserName } from "../useQuery";
import api from "../api/api";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { token } = useStoreContext();
  const { data: name, refetch } = useGetUserName(token);
  const [loader, setLoader] = useState(false);
  const [newName, setNewName] = useState("");
  const [activeTab, setActiveTab] = useState("post");
  const [openModal, setOpenModal] = useState(false);

  const tabs = [
    { value: "post", name: "Post" },
    { value: "reels", name: "Reels" },
    { value: "saved", name: "Saved" },
    { value: "repost", name: "Repost" },
  ];

  const posts = Array(6).fill(null);
  const savedPosts = Array(6).fill(null);
  const reels = Array(6).fill(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newName.trim()) {
      toast.error("Please enter a valid name");
      return;
    }

    setLoader(true);
    try {
      const response = await api.put(
        "/user/update",
        { name: newName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Profile updated successfully!");
        await refetch(); // Refresh the username
        setOpenModal(false);
        setNewName("");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error updating profile");
      console.error("Error updating name:", error);
    } finally {
      setLoader(false);
    }
  };

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
            onClick={() => setOpenModal(true)}
            className="px-6 py-2 rounded-full font-medium bg-[#2295E5] text-white hover:bg-[#1c7dbb] transition-all"
          >
            Edit Profile
          </button>
        </div>

        {/* Edit Profile Modal */}
        {openModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setOpenModal(false)}
          >
            <div
              className="bg-white rounded-lg p-6 w-[400px] border-2 border-black shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder={name || "Enter new name"}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#2295E5]"
                  />
                </div>

                <div className="mt-6 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setOpenModal(false)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loader}
                    className="px-4 py-2 bg-[#2295E5] text-white hover:bg-[#1c7dbb] rounded transition-colors disabled:opacity-50 flex items-center gap-2"
                  >
                    {loader ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Updating...
                      </>
                    ) : (
                      "Save Changes"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="mt-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white">{name}</h1>
          <p className="text-white mt-1">@{name}</p>

          <div className="flex gap-6 mt-4">
            <div className="flex items-center gap-1">
              <span className="font-bold">142</span>
              <span className="text-white">Posts</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-bold">2.5k</span>
              <span className="text-white">Followers</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-bold">856</span>
              <span className="text-white">Following</span>
            </div>
          </div>

          <p className="mt-4 text-white">
            Digital Creator ✨ | Content Writer 📝 | Exploring the world of tech
            & creativity 🌍
          </p>
        </div>

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
