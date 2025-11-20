import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "text-blue-600 font-semibold" : "text-gray-700";

  return (
    <>
      {/* Top Navbar */}
      <header className="backdrop-blur-lg bg-white/70 shadow-lg fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">

          {/* Left Hamburger */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>

          {/* Logo */}
          <div className="text-3xl font-extrabold tracking-wide text-blue-600 drop-shadow-sm">
            Cerope
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 text-lg">
            <Link to="/" className={`${isActive("/")} hover:text-blue-600 transition`}>
              Home
            </Link>
            <Link to="/login" className={`${isActive("/login")} hover:text-blue-600 transition`}>
              Login
            </Link>
            <Link to="/register" className={`${isActive("/register")} hover:text-blue-600 transition`}>
              Register
            </Link>
            <Link to="/profile" className={`${isActive("/profile")} hover:text-blue-600 transition`}>
              Profile
            </Link>
          </nav>
        </div>
      </header>

      {/* Background Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* Left Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform 
          ${open ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-blue-600">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col p-5 space-y-5 text-lg">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className={`${isActive("/")} hover:text-blue-600 transition`}
          >
            Home
          </Link>

          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className={`${isActive("/login")} hover:text-blue-600 transition`}
          >
            Login
          </Link>

          <Link
            to="/register"
            onClick={() => setOpen(false)}
            className={`${isActive("/register")} hover:text-blue-600 transition`}
          >
            Register
          </Link>

          <Link
            to="/profile"
            onClick={() => setOpen(false)}
            className={`${isActive("/profile")} hover:text-blue-600 transition`}
          >
            Profile
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
