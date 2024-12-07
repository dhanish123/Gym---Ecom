// Rating.js

import React, { useState } from "react";
import "./Rating.scss";
const Rating = ({ initialRating, onChange }) => {
  const [rating, setRating] = useState(initialRating || 0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    onChange(newRating);
  };

  return (
    <div className="rating-container ">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleRatingChange(star)}
          className={star <= rating ? "active" : ""}
        >
          &#9733;
          {/*  &#9733 ===> star */}
        </span>
      ))}
    </div>
  );
};

export default Rating;
