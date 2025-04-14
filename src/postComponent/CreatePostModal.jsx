import React, { useState } from "react";
import { useForm } from "react-hook-form";
import uploadToCloud from "../utils/UploadToCloud";
import { useStoreContext } from "../contextApi/ContextApi";

const CreatePostModal = ({ handleClose, open }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { token } = useStoreContext();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectImage = async (event) => {
    setIsLoading(true);
    const imageUrl = await uploadToCloud(event.target.files[0], "image");
    setSelectedImage(imageUrl);
    setValue("image", imageUrl);
    setIsLoading(false);
  };

  const handleSelectVideo = async (event) => {
    setIsLoading(true);
    const videoUrl = await uploadToCloud(event.target.files[0], "video");
    setSelectedVideo(videoUrl);
    setValue("video", videoUrl);
    setIsLoading(false);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/posts/user", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Post creation failed");

      console.log("Post created successfully");
      handleClose();
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={handleClose}
    >
      <div
        className="bg-white p-4 md:p-6 rounded-lg max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Create New Post</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">U</span>
              </div>
              <div>
                <p className="font-semibold">User name</p>
                <p className="text-sm text-gray-500">Reyansh singh</p>
              </div>
            </div>

            <textarea
              {...register("caption", { required: "Caption is required" })}
              placeholder="Write caption..."
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
            {errors.caption && (
              <p className="text-red-500 text-sm mt-1">
                {errors.caption.message}
              </p>
            )}
          </div>

          <div className="flex justify-between mb-4">
            <div className="flex items-center space-x-2">
              <input
                type="file"
                id="image-input"
                accept="image/*"
                onChange={handleSelectImage}
                className="hidden"
              />
              <label
                htmlFor="image-input"
                className="cursor-pointer px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
              >
                Add Image
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="file"
                id="video-input"
                accept="video/*"
                onChange={handleSelectVideo}
                className="hidden"
              />
              <label
                htmlFor="video-input"
                className="cursor-pointer px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
              >
                Add Video
              </label>
            </div>
          </div>

          {selectedImage && (
            <div className="mb-4">
              <img
                src={selectedImage}
                alt="Preview"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          )}

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              {isLoading ? "Posting..." : "Post"}
            </button>
          </div>
        </form>

        {isLoading && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePostModal;
