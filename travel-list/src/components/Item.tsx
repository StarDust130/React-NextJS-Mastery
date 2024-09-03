/* eslint-disable @typescript-eslint/no-explicit-any */

interface ItemProps {
  item: any;
  handleDelete: (id: number) => void;
}

const Item = ({ item, handleDelete }: ItemProps) => {
  return (
    <div className="flex justify-center items-center gap-3  h-10 w-auto">
      <input type="checkbox" />
      <span
        className={`text-lg font-semibold text-gray-800  ${
          item.packed ? "line-through text-gray-400" : ""
        }`}
      >
        {item.qty} {item.desc}
      </span>
      <button
        onClick={() => handleDelete}
        className="ml-2 text-red-500 hover:text-red-700 transition-colors duration-300"
      >
        ❌
      </button>
    </div>
  );
};
export default Item;
