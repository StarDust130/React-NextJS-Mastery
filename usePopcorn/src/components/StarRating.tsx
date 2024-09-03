/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import Star from "./Star";

const StarRating = ({ maxRating = 10 }: any) => {
  const [rating, setRating] = useState(1);
  return (
    <div className="flex justify-center gap-3 items-center w-full py-2">
      <div className="flex ">
        {Array.from({ length: maxRating }, (_, i) => (
          <span key={i} className="text-sm ">
            <Star onClick={() => setRating(i + 1)} full={rating >= i + 1} />
          </span>
        ))}
      </div>
      <p className="font-semibold text-xl">{rating || ""}</p>
    </div>
  );
};
export default StarRating;
