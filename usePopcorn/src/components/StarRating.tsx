/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import Star from "./Star";

const StarRating = ({ maxRating = 10, color = "#fcc419" }: any) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex  justify-center gap-3 items-center w-full py-2">
      <div className={`flex bg-${color}-500 `}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span key={i} className="text-sm">
            <Star
              onClick={() => setRating(i + 1)}
              full={hoverRating >= i + 1 || rating >= i + 1}
              onHoverIn={() => setHoverRating(i + 1)}
              onHoverOut={() => setHoverRating(0)}
              color={color}
            />
          </span>
        ))}
      </div>
      <p className="font-semibold text-xl">{hoverRating || rating || ""}</p>
      <button
        className="btn"
        onClick={() => {
          setRating(0);
          setHoverRating(0);
        }}
      >
        Clear
      </button>
    </div>
  );
};
export default StarRating;
