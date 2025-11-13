import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Root.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <AuthProvider attribute="class" defaultTheme="light">
        <RouterProvider router={router} />
      </AuthProvider>
      <Toaster />
  </StrictMode>
);
