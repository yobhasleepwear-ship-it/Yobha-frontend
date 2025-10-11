import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-premium-white/95 backdrop-blur-md border-b border-luxury-gold/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={require("../../assets/YOBHA_logo_final.png")} 
              alt="YOBHA Logo" 
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#" 
              className="text-text-dark hover:text-luxury-gold transition-colors duration-300 font-helvetica font-light tracking-wide"
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-text-dark hover:text-luxury-gold transition-colors duration-300 font-helvetica font-light tracking-wide"
            >
              About
            </a>
            <a 
              href="#" 
              className="text-text-dark hover:text-luxury-gold transition-colors duration-300 font-helvetica font-light tracking-wide"
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-text-dark hover:text-luxury-gold transition-colors duration-300">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
