
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/30 z-50 px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-newsreader text-xl">
          <Link to="/">Get Lost</Link>
        </div>
        <div className="flex space-x-6">
          <a 
            href="https://getlostco.substack.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white font-newsreader hover:text-gray-200 transition-colors"
          >
            Articles
          </a>
          <a 
            href="https://getlost.ink/login" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white font-newsreader hover:text-gray-200 transition-colors"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
