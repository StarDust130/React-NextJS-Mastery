/* eslint-disable @typescript-eslint/no-explicit-any */
interface ItemProps {
  item: any;
  handleDelete: (id: number) => void;
  handleTogglePacked: (id: number) => void;
}

const Item = ({ item, handleDelete, handleTogglePacked }: ItemProps) => {
  return (
    <div className="flex justify-center items-center gap-3 h-10 w-auto">
      {/* Set the checkbox checked state based on item.packed */}
      <input
        type="checkbox"
        checked={item.packed} // Reflect the packed status
        onChange={() => handleTogglePacked(item.id)} // Toggle packed status on change
      />
      <span
        className={`text-lg font-semibold text-gray-800 ${
          item.packed ? "line-through text-gray-400" : ""
        }`}
      >
        {item.qty} {item.desc}
      </span>
      <button
        onClick={() => handleDelete(item.id)}
        className="ml-2 text-red-500 hover:text-red-700 transition-colors duration-300"
      >
        ❌
      </button>
    </div>
  );
};

export default Item;
