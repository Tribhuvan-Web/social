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

const AppRouter = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/middle" element={<MiddlePart />} />
        <Route path="/reels" element={<ReelsPage />} />
        <Route path="/create-reels" element={<CreateReels />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
