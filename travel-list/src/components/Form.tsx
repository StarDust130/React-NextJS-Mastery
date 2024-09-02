const Filters = () => {
  return (
    <form className="flex justify-center items-center absolute bottom-16 gap-4 font-semibold font-sans  text-black">
      <select className="rounded-2xl pl-2 text-sm">
        <option className="text-sm" value="">
          SORT BY INPUT ORDER
        </option>
        <option className="text-sm" value="">
          SORT BY DESCRIPTION
        </option>
        <option className="text-sm" value="">
          SORT BY PACKED STATUS
        </option>
      </select>
      <button className="w-20 h-6 bg-blue-500 text-white text-xs rounded-2xl shadow-lg hover:bg-blue-700 transition-colors duration-300">
        CLEAR LIST
      </button>
    </form>
  );
};
export default Filters;
