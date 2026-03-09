import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-4 text-center">

        <p className="text-sm">
          © {new Date().getFullYear()} Password Manager
        </p>

        <p className="text-green-400 font-semibold mt-1">
          Made by Haazim Khan
        </p>

      </div>
    </footer>
  );
};

export default Footer;