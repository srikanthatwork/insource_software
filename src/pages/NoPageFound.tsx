// src/pages/NoPageFound.jsx
import React from "react";
import nopage from "../components/assets/error.jpg";

const NoPageFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 text-center bg-white">
      <img
        src={nopage}
        alt="Page Not Found"
        className="w-full max-w-md md:max-w-lg lg:max-w-xl mb-6"
      />
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h1>
      <p className="text-gray-600 text-base md:text-lg">
        The page you're looking for doesn't exist or has been moved.
      </p>
    </div>
  );
};

export default NoPageFound;

