import React, { useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ShopContext } from "../../Context/ShopContext";

export default function CartItem(props) {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const { id, title, price, image } = props.data;

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 p-5 bg-white rounded-lg shadow-md">
      {/* Product Details */}
      <div className="flex items-center gap-4 w-full lg:w-3/6">
        <img
          src={image}
          alt={title}
          className="w-20 h-20 lg:w-40 lg:h-40 object-cover rounded-lg"
        />
        <h1 className="font-semibold text-base lg:text-lg">{title}</h1>
      </div>

      {/* Price and Quantity */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 w-full lg:w-2/6">
        <p className="text-base lg:text-lg font-semibold">${price}</p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => removeFromCart(id)}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            <FaMinus />
          </button>
          <input
            type="number"
            value={cartItems[id]}
            onChange={(e) =>
              updateCartItemCount(Number(e.target.value), id)
            }
            className="w-12 text-center border border-gray-300 rounded-md"
          />
          <button
            onClick={() => addToCart(id)}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Total Price */}
      <div className="w-full lg:w-1/6 text-base lg:text-lg font-semibold text-center lg:text-right">
        ${price * cartItems[id]}
      </div>
    </div>
  );
}
