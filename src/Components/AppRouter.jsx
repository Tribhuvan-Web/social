import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import HomePage from "../PageComponent/HomePage";
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";
import MiddlePart from "../homeComponent/MiddlePart";
import ReelsPage from "../PageComponent/ReelsPage";
import CreateReels from "../PageComponent/CreateReels";
import ProfilePage from "../PageComponent/ProfilePage";
import Notification from "./Notification";
import Message from "./Message";

const AppRouter = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Main layout routes */}
        <Route path="/" element={<HomePage />}>
          <Route index element={<MiddlePart />} />
          <Route path="reels" element={<ReelsPage />} />
          <Route path="create-reels" element={<CreateReels />} />
          <Route path="notifications" element={<Notification />} />
          <Route path="message" element={<Message />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
