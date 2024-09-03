interface FiltersProps {
  handleClearAll: () => void;
  handleSort: (sortType: string) => void;
}

const Filters = ({ handleClearAll, handleSort }: FiltersProps) => {
  return (
    <form
      className="flex justify-center items-center absolute bottom-16 gap-4 font-semibold font-sans  text-black"
      onSubmit={(e) => e.preventDefault()}
    >
      <select
        className="rounded-2xl pl-2 text-sm"
        onChange={(e) => handleSort(e.target.value)}
      >
        <option className="text-sm" value="inputOrder">
          SORT BY INPUT ORDER
        </option>
        <option className="text-sm" value="description">
          SORT BY DESCRIPTION
        </option>
        <option className="text-sm" value="packedStatus">
          SORT BY PACKED STATUS
        </option>
      </select>
      <button
        type="button"
        onClick={handleClearAll}
        className="w-20 h-6 bg-blue-500 text-white text-xs rounded-2xl shadow-lg hover:bg-blue-700 transition-colors duration-300"
      >
        CLEAR LIST
      </button>
    </form>
  );
};

export default Filters;
