import React from "react";

const Header = () => {
  return (
    <header className="bg-green-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Pass<span className="text-black">OP</span>
        </h1>

        <nav>
          <a
            href="https://github.com/Haazim-Khan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
