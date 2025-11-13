import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Root.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider attribute="class" defaultTheme="light">
        <RouterProvider router={router} />
      </AuthProvider>
      <Toaster />
    </ThemeProvider>
  </StrictMode>
);
