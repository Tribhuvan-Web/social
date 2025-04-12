import React, { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaShareAlt,
  FaBookmark,
  FaRegBookmark,
  FaEllipsisV,
} from "react-icons/fa";

const PostCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Placeholder data (replace with your actual data source)
  const post = {
    username: "User",
    timestamp: "2 hours ago",
    caption: "Beautiful moment captured! 📸",
    likes: 245,
    comments: 15,
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-4 max-w-2xl mx-auto">
      {/* Post Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="/social.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 text-sm md:text-base">
              {post.username}
            </h3>
            <p className="text-xs text-gray-500">{post.timestamp}</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-[#2295E5] transition-colors">
          <FaEllipsisV />
        </button>
      </div>

      {/* Post Image */}
      <div className="relative aspect-square md:aspect-video">
        <img
          src="/social.png"
          alt="Post content"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Post Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="text-2xl transition-colors"
            >
              {isLiked ? (
                <FaHeart className="text-[#2295E5]" />
              ) : (
                <FaRegHeart className="hover:text-[#2295E5]" />
              )}
            </button>
            <button className="text-2xl hover:text-[#2295E5] transition-colors">
              <FaRegComment />
            </button>
            <button className="text-2xl hover:text-[#2295E5] transition-colors">
              <FaShareAlt />
            </button>
          </div>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className="text-2xl transition-colors"
          >
            {isSaved ? (
              <FaBookmark className="text-[#2295E5]" />
            ) : (
              <FaRegBookmark className="hover:text-[#2295E5]" />
            )}
          </button>
        </div>

        {/* Likes Count */}
        <div className="mb-2">
          <p className="font-semibold text-gray-800 text-sm md:text-base">
            {post.likes} likes
          </p>
        </div>

        {/* Caption */}
        <div className="mb-2">
          <span className="font-semibold text-gray-800 mr-2 text-sm md:text-base">
            {post.username}
          </span>
          <span className="text-gray-600 text-sm md:text-base">
            {post.caption}
          </span>
        </div>

        {/* Comments */}
        <div className="text-sm text-gray-500">
          View all {post.comments} comments
        </div>
      </div>

      {/* Add Comment Section */}
      <div className="px-4 py-3 border-t border-gray-100">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full text-sm text-gray-600 placeholder-gray-400 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default PostCard;
