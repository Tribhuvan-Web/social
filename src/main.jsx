// In your main application file (like index.jsx or App.jsx)
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ContextProvider } from "./contextApi/ContextApi";
import { QueryClient, QueryClientProvider } from "react-query";
import AppRouter from "./Components/AppRouter";
import { BrowserRouter } from "react-router-dom";

// Create a new QueryClient instance
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <AppRouter />
        </ContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
