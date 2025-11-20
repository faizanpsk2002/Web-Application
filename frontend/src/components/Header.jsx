import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-gray-800">Cerope</div>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link to="/login" className="text-gray-600 hover:text-gray-900">
            Login
          </Link>
          <Link to="/register" className="text-gray-600 hover:text-gray-900">
            Register
          </Link>
          <Link to="/profile" className="text-gray-600 hover:text-gray-900">
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
