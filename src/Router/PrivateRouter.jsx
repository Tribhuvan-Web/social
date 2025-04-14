import React from "react";
import { Navigate } from "react-router-dom";
import { useStoreContext } from "../contextApi/ContextApi";

export default function PrivateRouter({ children, publicPage }) {
  const { token } = useStoreContext();

  if (publicPage) {
    return token ? <Navigate to="/" /> : children;
  }
  return !token ? <Navigate to="/login" /> : children;
}
