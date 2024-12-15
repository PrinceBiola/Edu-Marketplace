import React from "react";
import { FaUser } from "react-icons/fa";
import { FaBoxesPacking, FaTicket } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function UserModal({ onClose }) {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden animate-fadeIn">
      <ul className="divide-y divide-gray-100">
        <Link to="/UserProfile" onClick={onClose}>
          <li className="flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors">
            <FaUser className="text-gray-500 text-lg sm:text-xl" />
            <span className="text-gray-900 text-sm sm:text-base">My Account</span>
          </li>
        </Link>
        
        <li className="flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors cursor-pointer">
          <FaBoxesPacking className="text-gray-500 text-lg sm:text-xl" />
          <span className="text-gray-900 text-sm sm:text-base">Orders</span>
        </li>
        
        <li className="flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors cursor-pointer">
          <FaTicket className="text-gray-500 text-lg sm:text-xl" />
          <span className="text-gray-900 text-sm sm:text-base">Vouchers</span>
        </li>

        <li className="p-4">
          <button 
            onClick={onClose}
            className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm sm:text-base font-medium"
          >
            LOGOUT
          </button>
        </li>
      </ul>
    </div>
  );
}
