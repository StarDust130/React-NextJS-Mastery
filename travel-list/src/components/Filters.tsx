interface FiltersProps {
  handleClearAll: () => void;
  handleSort: (sortType: string) => void;
}

const Filters = ({ handleClearAll, handleSort }: FiltersProps) => {
  return (
    <div className="flex gap-4 absolute bottom-16">
      <select
        className="rounded-2xl pl-2 text-sm"
        onChange={(e) => handleSort(e.target.value)}
      >
        <option value="inputOrder">SORT BY INPUT ORDER</option>
        <option value="description">SORT BY DESCRIPTION</option>
        <option value="packedStatus">SORT BY PACKED STATUS</option>
      </select>
      <button
        onClick={handleClearAll}
        className="w-20 h-6 bg-blue-500 text-white text-xs rounded-2xl"
      >
        CLEAR LIST
      </button>
    </div>
  );
};

export default Filters;
