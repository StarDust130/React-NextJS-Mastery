const StarRating = () => {
  return (
    <div className="flex justify-center items-center w-full py-2">
      <div>
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className="text-2xl">
            ⭐
          </span>
        ))}
      </div>
      <p>5</p>
    </div>
  );
};
export default StarRating;
