import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col min-h-screen bg-[linear-gradient(135deg,#d2f1e1,#e0f3fa)] dark:bg-[linear-gradient(135deg,#144d43,#1a3a3f)] ">
      <header>
        <Navbar />
      </header>
      <main className="flex-1 max-w-[1200px] mx-auto my-8">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
