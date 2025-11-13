import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col min-h-screen bg-[linear-gradient(135deg,#e0eafc,#cfdef3)] dark:bg-[linear-gradient(135deg,#1e293b,#0f172a)]">
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
