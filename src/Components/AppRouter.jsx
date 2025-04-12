import React from "react";
import Navbar from "../PageComponent/Navbar";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import HomePage from "../PageComponent/HomePage";
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";

const AppRouter = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
