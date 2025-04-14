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
import PrivateRouter from "../Router/PrivateRouter";

const AppRouter = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route
          path="/register"
          element={
            <PrivateRouter publicPage={true}>
              <Register />
            </PrivateRouter>
          }
        />
        <Route
          path="/login"
          element={
            <PrivateRouter publicPage={true}>
              <Login />
            </PrivateRouter>
          }
        />

        {/* Main layout routes */}
        <Route
          path="/"
          element={
            <PrivateRouter publicPage={false}>
              <HomePage />
            </PrivateRouter>
          }
        >
          <Route
            index
            element={
              <PrivateRouter publicPage={false}>
                <MiddlePart />
              </PrivateRouter>
            }
          />
          <Route
            path="reels"
            element={
              <PrivateRouter publicPage={false}>
                <ReelsPage />
              </PrivateRouter>
            }
          />
          <Route
            path="create-reels"
            element={
              <PrivateRouter publicPage={false}>
                <CreateReels />
              </PrivateRouter>
            }
          />
          <Route
            path="notifications"
            element={
              <PrivateRouter publicPage={false}>
                <Notification />
              </PrivateRouter>
            }
          />
          <Route
            path="message"
            element={
              <PrivateRouter publicPage={false}>
                <Message />
              </PrivateRouter>
            }
          />
          <Route
            path="profile"
            element={
              <PrivateRouter publicPage={false}>
                <ProfilePage />
              </PrivateRouter>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
