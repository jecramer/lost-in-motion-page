
import React from "react";
import { Button } from "./ui/button";
import { useLocation, Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-sm z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-8">
        {/* Logo / Brand */}
        <div className="flex items-center">
          <Link to="/" className="text-white font-newsreader text-2xl font-semibold hover:text-slate-200 transition-colors">
            Get Lost
          </Link>
        </div>

        {/* Navigation Links - Right Aligned */}
        <div className="flex items-center gap-6">
          <Link 
            to="/timeline" 
            className={`text-white font-newsreader hover:text-slate-200 transition-colors ${
              location.pathname === '/timeline' ? 'underline' : ''
            }`}
          >
            Timeline
          </Link>
          
          <a 
            href="https://getlosthq.substack.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white font-newsreader hover:text-slate-200 transition-colors"
          >
            Articles
          </a>
          
          <a 
            href="https://www.linkedin.com/company/getlosthq/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-slate-200 transition-colors flex items-center"
          >
            <Linkedin size={20} color="white" />
          </a>
          
          <a 
            href="https://getlost.ink/login"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white font-newsreader hover:text-slate-200 transition-colors"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
