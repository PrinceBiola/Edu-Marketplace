import React, { useState } from "react";

const StarRating = ({ totalStars = 5, onRatingChange }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        return (
          <svg
            key={index}
            onClick={() => {
              setRating(starValue);
              onRatingChange?.(starValue);
            }}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            xmlns="http://www.w3.org/2000/svg"
            fill={starValue <= (hover || rating) ? "yellow" : "none"}
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            className={`w-6 h-6 cursor-pointer ${
              starValue <= (hover || rating) ? "text-yellow-400" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        );
      })}
    </div>
  );
};

export default StarRating;
