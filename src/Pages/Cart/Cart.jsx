import { useContext } from "react";
import React from "react";
import NavWrapper from "../NavWrapper";
import Recommended from "../../Components/Recommended/Recommended";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import NewArrivals from "../../Components/NewArrivals/NewArrivals";
import CartItem from "./CartItem";

export default function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <NavWrapper>
      <div className="flex flex-col lg:flex-row gap-10 px-5 lg:px-20 py-10">
        {/* Cart Section */}
        <div className="w-full lg:w-3/4 bg-gray-200 rounded-3xl p-5 lg:p-7 flex flex-col gap-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Your Cart:{" "}
              <span>
                {/* {cartItemsArray.length} Items */}
              </span>
            </h2>
            <Link
              to="/productcatalog"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-700 transition"
            >
              Continue Shopping
              <FaChevronRight />
            </Link>
          </div>

          {/* Table Header */}
          <ul className="hidden md:flex items-center text-lg font-semibold">
            <li className="w-3/6">Product Details</li>
            <li className="w-2/6 px-5">Price</li>
            <li className="w-1/6">Total Price</li>
          </ul>

          {/* Cart Items */}
          <div className="flex flex-col gap-3">
            {NewArrivals.map((product) => {
              const quantity = cartItems[product.id] || 0;
              if (quantity > 0) {
                return <CartItem key={product.id} data={product} />;
              }
              return null;
            })}
          </div>

          {/* Total Amount */}
          <div className="flex justify-end">
            <p className="text-lg font-semibold">Total: ${totalAmount}</p>
          </div>

          {/* Promo Code */}
          <div className="flex flex-col md:flex-row justify-end items-stretch gap-2 mt-4">
            <input
              type="text"
              placeholder="Enter your promo code"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
              Apply
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row justify-end gap-2 mt-4">
            <Link to="/productcatalog">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-md">
                Continue Shopping
              </button>
            </Link>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
              Proceed to Checkout
            </button>
          </div>
        </div>

        {/* Recommended Section */}
        <div className="w-full lg:w-1/4">
          <Recommended />
        </div>
      </div>
    </NavWrapper>
  );
}
