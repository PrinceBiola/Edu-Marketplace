import React, { useState } from "react";
import { FaUserEdit, FaChevronDown } from "react-icons/fa";
import Images from "../../assets/image";

export default function PersonalInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    nickname: '',
    dateOfBirth: '',
    gender: 'Choose',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Add your submit logic here
    console.log('Saving changes:', userData);
  };

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white px-8 py-5 rounded-lg">
      <div className="flex items-center justify-between ">
        <div className="flex gap-2 items-center">
          <FaUserEdit />
          Personal Info
        </div>

        <div className="cursor-pointer" onClick={toggleContent}>
          <FaChevronDown />
        </div>
      </div>

      {isOpen && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <img
              src={Images.stack} // Replace with actual profile picture URL
              alt="Profile Picture"
              className="w-24 h-24 rounded-full mr-4"
            />
           
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500   
       sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500   
       sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="nickname"
                className="block text-sm font-medium text-gray-700"
              >
                Nickname
              </label>
              <input
                type="text"
                id="nickname"
                name="nickname"
                value={userData.nickname}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500   
       sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={userData.dateOfBirth}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500   
       sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={userData.gender}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500   
       sm:text-sm"
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Choose">Choose Your Gender</option>
                
              </select>
            </div>
            
          </div>

          <div className="flex justify-end mt-4">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded   
       mr-2"
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
