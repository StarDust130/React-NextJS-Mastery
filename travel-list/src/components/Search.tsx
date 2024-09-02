const Search = () => {
  return (
    <div className="flex justify-center items-center h-16 w-screen bg-orange-600 gap-3">
      <p className="">What do you need for your 🥰 trip?</p>
      <select className="rounded-2xl">
        <option className="text-xs" value={1}>
          1
        </option>
        {Array.from({ length: 10 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input type="text" className="rounded-2xl pl-2" placeholder="Items..." />
      <button className="w-12 h-6 bg-blue-300 rounded-2xl">Add</button>
    </div>
  );
};

export default Search;
