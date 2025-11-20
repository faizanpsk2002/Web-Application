import React from "react";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      {/* Gradient Top Border */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>

      <div className="container mx-auto px-6 py-10 text-center md:text-left">

        {/* Brand Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Cerope
          </h2>

          {/* Links */}
          <div className="flex space-x-6 text-sm mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-5 mt-6">
          <a href="#" className="hover:text-white transition">
            <Facebook size={22} />
          </a>
          <a href="#" className="hover:text-white transition">
            <Instagram size={22} />
          </a>
          <a href="#" className="hover:text-white transition">
            <Linkedin size={22} />
          </a>
          <a href="#" className="hover:text-white transition">
            <Mail size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Cerope — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
