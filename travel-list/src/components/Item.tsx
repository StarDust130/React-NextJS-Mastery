/* eslint-disable @typescript-eslint/no-explicit-any */

interface ItemProps {
  item: any;
}

const Item = ({ item }: ItemProps) => {
  return (
    <div className="flex justify-center items-center gap-3  h-10 w-auto">
      <input type="checkbox" />
      <span
        className={`text-lg font-semibold text-gray-800  ${
          item.packed ? "line-through text-gray-400" : ""
        }`}
      >
        {item.quantity} {item.description}
      </span>
      <button className="ml-2 text-red-500 hover:text-red-700 transition-colors duration-300">
        ❌
      </button>
    </div>
  );
};
export default Item;
