import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaSearch, FaShoppingCart, FaUser, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserModal from "../../Modals/UserModal";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const menuRef = useRef(null);
  const userModalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (userModalRef.current && !userModalRef.current.contains(event.target)) {
        setIsUserModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">EduPortal</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-gray-600 hover:text-blue-600 transition-colors">
              Shop
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <FaSearch className="w-5 h-5" />
            </button>
            <Link to="/cart" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <FaShoppingCart className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsUserModalOpen(!isUserModalOpen)}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaUser className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors md:hidden"
            >
              {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-50 bg-white md:hidden flex flex-col overflow-y-auto"
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
          <div className="space-y-6 px-4">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg text-gray-900 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/shop"
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg text-gray-900 hover:text-blue-600 transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg text-gray-900 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* User Modal */}
      {isUserModalOpen && (
        <div
          ref={userModalRef}
          className="absolute right-4 top-16 w-64 z-50"
        >
          <UserModal onClose={() => setIsUserModalOpen(false)} />
        </div>
      )}
    </nav>
  );
}
