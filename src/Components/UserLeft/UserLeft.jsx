import React from "react";
import {
  FaQuestionCircle,
  FaSignOutAlt,
  FaTrash,
  FaTrashAlt,
} from "react-icons/fa";
import { FaSpinner, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function UserLeft() {
  return (
    <div>
      <ul className="flex flex-col gap-5 bg-white rounded-lg p-5">
        <Link to="/UserProfile">
          <li className="flex items-center gap-2 text-xl text-slate-700 cursor-pointer hover:text-blue-500">
            <FaUser />
            Profile
          </li>
        </Link>
        <li className="flex items-center gap-2 text-xl text-slate-700 cursor-pointer hover:text-blue-500">
          <FaSpinner />
          Order History
        </li>
        <li className="flex items-center gap-2 text-xl text-slate-700 cursor-pointer hover:text-blue-500">
          <FaQuestionCircle />
          Help or Complaint
        </li>
        <li className="flex items-center gap-2 text-xl text-slate-700 cursor-pointer hover:text-blue-500">
          <FaSignOutAlt />
          Log Out
        </li>
        <li className="flex items-center gap-2 text-xl text-red-500 cursor-pointer">
          <FaTrash />
          Delete Account
        </li>
      </ul>
    </div>
  );
}
