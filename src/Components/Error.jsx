import React from 'react';
// import { Link } from "react-router-dom";
// import { Home } from "lucide-react";
import { Link } from 'react-router';

const Error = () => {
    return (
         <div className=" flex flex-col items-center justify-center h-screen  text-black text-center">
      <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">
        404
      </h1>
      <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-gray-400 mt-2 max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:scale-105 transition-transform"
      >
        {/* <Home size={18} /> */}
        Back to Home
      </Link>
    </div>
    );
};

export default Error;