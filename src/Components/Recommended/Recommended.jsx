import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import StarRating from "../Technicalities/StarRating";
import Images from "../../assets/image";

const Recommended = () => {
  return (
    <div className="bg-gray-200 px-5 py-5 rounded-3xl w-full lg:w-1/4">
      <h3 className="text-lg lg:text-xl font-semibold pb-4 text-center lg:text-left">
        RECOMMENDED
      </h3>

      <ul className="flex flex-col gap-4">
        <li className="border border-slate-400 rounded-2xl bg-white">
          {/* Image Section */}
          <div className="relative">
            <img
              src={Images.PenHolder}
              alt="Pen Holder"
              className="w-full h-40 lg:h-60 object-cover rounded-t-2xl"
            />
            <FaHeart className="absolute top-4 right-4 text-blue-600 rounded-full border text-2xl lg:text-3xl border-grey-400 p-1 hover:bg-blue-600 hover:text-white transition-all" />
            <p className="p-1 lg:p-2 bg-blue-400 text-xs lg:text-sm text-white w-16 lg:w-20 rounded-full inline-flex items-center justify-center absolute top-4 left-4">
              On Sale
            </p>
          </div>

          {/* Details Section */}
          <div className="flex flex-col p-4 items-center lg:items-start gap-3">
            {/* Rating Section */}
            <div className="flex gap-2 items-center">
              <StarRating />
              <span className="text-sm lg:text-base">2039</span>
            </div>

            {/* Product Title */}
            <p className="font-semibold text-center lg:text-left text-sm lg:text-base">
              Pen Holder
            </p>

            {/* Price Section */}
            <div className="flex justify-between items-center w-full text-sm lg:text-base">
              <p>Price:</p>
              <span className="font-semibold text-lg lg:text-2xl">$200</span>
            </div>

            {/* Add to Cart Button */}
            <button className="border border-slate-800 rounded-full inline-flex p-2 lg:p-3 items-center justify-center gap-2 text-sm lg:text-base w-full lg:w-auto">
              <FaShoppingCart />
              Add to Cart
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Recommended;
