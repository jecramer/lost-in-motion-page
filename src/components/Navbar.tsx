
import React from "react";
import { Button } from "./ui/button";
import { useLocation } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const scrollToOdin = () => {
    const odinSection = document.getElementById('odin-section');
    if (odinSection) {
      odinSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Only show investors link if on the home route
  const showInvestorsLink = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-sm z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo / Brand */}
        <div className="flex items-center">
          <a href="/" className="text-white font-newsreader text-2xl font-semibold hover:text-slate-200 transition-colors">
            Get Lost
          </a>
        </div>

        {/* Navigation Links - Right Aligned */}
        <div className="flex items-center gap-6">
          {showInvestorsLink && (
            <button 
              onClick={scrollToOdin}
              className="text-white font-newsreader hover:text-slate-200 transition-colors"
            >
              Investors
            </button>
          )}
          
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
