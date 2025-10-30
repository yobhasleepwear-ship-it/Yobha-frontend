import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-premium-beige border-t border-luxury-gold/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <p className="text-text-medium font-helvetica font-light text-sm">
              © 2025{" "}
              <span className="text-luxury-gold font-normal">YOBHA</span>. All rights reserved.
            </p>
          </div>

          {/* Center Section */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            <Link 
              to="/contact-us"
              className="text-text-medium hover:text-luxury-gold transition-colors duration-300 font-helvetica font-light text-sm tracking-wide"
            >
              Contact Us
            </Link>
            <a 
              href="/shipmentPolicy.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-medium hover:text-luxury-gold transition-colors duration-300 font-helvetica font-light text-sm tracking-wide"
            >
              Shipment Policy
            </a>
            <a 
              href="/privacyPolicy.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-medium hover:text-luxury-gold transition-colors duration-300 font-helvetica font-light text-sm tracking-wide"
            >
              Privacy Policy
            </a>
            <a 
              href="/termsandconditions.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-medium hover:text-luxury-gold transition-colors duration-300 font-helvetica font-light text-sm tracking-wide"
            >
              Terms & Conditions
            </a>
            <a 
              href="/returnPolicy.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-medium hover:text-luxury-gold transition-colors duration-300 font-helvetica font-light text-sm tracking-wide"
            >
              Return Policy
            </a>
          </div>

          {/* Right Section */}
          <div className="flex justify-center md:justify-end gap-4">
            <a 
              href="#" 
              className="text-luxury-gold hover:text-luxury-rose-gold transition-all duration-300 transform hover:scale-110"
            >
              <FaFacebookF size={18} />
            </a>
            <a 
              href="#" 
              className="text-luxury-gold hover:text-luxury-rose-gold transition-all duration-300 transform hover:scale-110"
            >
              <FaTwitter size={18} />
            </a>
            <a 
              href="#" 
              className="text-luxury-gold hover:text-luxury-rose-gold transition-all duration-300 transform hover:scale-110"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom line */}
      <div className="h-px bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent"></div>
    </footer>
  );
};

export default Footer;
