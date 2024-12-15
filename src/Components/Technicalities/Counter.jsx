import React, { useState } from "react";

const Counter = ({increaseCount,decreaseCount , count, }) => {

  
const min = 1;
const max = 100;
  return (
    <div className="flex items-center space-x-4 border border-slate-500 rounded-full">
      {/* Decrease Button */}
      <button
        onClick={ () =>{decreaseCount}}
        className="px-3 py-1 text-2xl font-semibold text-gray-500  rounded disabled:cursor-not-allowed"
        disabled={count <= min}
      >
        -
      </button>

      {/* Display Count */}
      <span className="text-lg font-semibold">{count}</span>

      {/* Increase Button */}
      <button
        onClick={()=>{increaseCount}}
        className="px-3 py-1 text-2xl font-semibold text-gray-500  rounded  disabled:cursor-not-allowed"
        disabled={count >= max}
      >
        + 
      </button>
    </div>
  );
};

export default Counter;
