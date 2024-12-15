import React, { useState } from "react";
import NavWrapper from "../NavWrapper";
import UserLeft from "../../Components/UserLeft/UserLeft";
import PersonalInfo from "../../Components/UserRight/PersonalInfo";
import Security from "../../Components/UserRight/Security";
import ContactInfo from "../../Components/UserRight/ContactInfo";
import DeliveryAddress from "../../Components/UserRight/DeliveryAddress";

export default function UserProfile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavWrapper>
      <div className="mt-20 flex flex-col lg:flex-row p-5 lg:p-10 gap-5">
        {/* Left Section */}
        <div className={`w-full lg:w-1/4 bg-white shadow-md rounded-md p-5 ${isMenuOpen ? "block" : "hidden"} lg:block`}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 mb-4 text-gray-600 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? "Close Menu" : "Menu"}
          </button>
          <UserLeft />
        </div>

        {/* Right Section */}
        <ul className="w-full lg:w-3/4 flex flex-col gap-5 overflow-auto">
          <li>
            <PersonalInfo />
          </li>
          <li>
            <Security />
          </li>
          <li>
            <ContactInfo />
          </li>
          <li>
            <DeliveryAddress />
          </li>
        </ul>
      </div>
    </NavWrapper>
  );
}
