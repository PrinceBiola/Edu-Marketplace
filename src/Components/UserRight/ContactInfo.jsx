import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { FaMessage, FaShieldHeart } from 'react-icons/fa6'

export default function Security() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white px-8 py-5 rounded-lg">
      <div className="flex items-center justify-between ">
        <div className="flex gap-2 items-center">
          <FaMessage />
          Contact Information
        </div>

        <div className="cursor-pointer" onClick={toggleContent}>
          <FaChevronDown />
        </div>
      </div>

      {isOpen && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p>Your Contact Information go here.</p>
        </div>
      )}
    </div>
  )
}
