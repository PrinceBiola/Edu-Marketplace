import React, { useContext } from "react";
import NewArrivals from "./NewArrivals";
import { FaHeart } from "react-icons/fa";
import StarRating from "../Technicalities/StarRating";
import { ShopContext } from "../../Context/ShopContext";

export default function NewArrival() {
  const { addToCart, cartItems } = useContext(ShopContext);

  return (
    <div className="w-[95%] sm:w-[92%] md:w-[90%] mx-auto py-8 sm:py-10 md:py-12">
      <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
       

        <div className="grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {NewArrivals.map((item) => {
            const cartItemAmount = cartItems[item.id];
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[80%]  p-[10%] h-[160px] sm:h-[200px] md:h-[240px] lg:h-[280px] object-cover rounded-t-xl"
                  />
                  <button 
                    className="absolute top-2 right-2 p-1.5 sm:p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-blue-600 hover:text-white transition-colors group shadow-sm"
                  >
                    <FaHeart className="text-lg sm:text-xl text-blue-600 group-hover:text-white" />
                  </button>
                </div>

                <div className="p-3 sm:p-4 flex flex-col gap-2 sm:gap-3">
                  <div className="min-h-[40px] sm:min-h-[48px]">
                    <p className="text-xs sm:text-sm md:text-base line-clamp-2 hover:text-blue-600">
                      {item.title}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base md:text-lg font-bold">
                    {item.price}
                  </p>

                  <div className="flex justify-between items-center gap-2">
                    <div className="flex-1">
                      <StarRating />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500">
                      {item.rating}
                    </span>
                  </div>

                  <button
                    onClick={() => addToCart(item.id)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 mt-1"
                  >
                    Add to Cart
                    {cartItemAmount > 0 && (
                      <span className="bg-blue-700 px-1.5 py-0.5 rounded-full text-xs inline-flex items-center justify-center min-w-[20px]">
                        {cartItemAmount}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-md"
        >
          View All Products
        </button>
      </div>
    </div>
  );
}

