interface SearchProps {
  desc: string;
  setDesc: (desc: string) => void;
  qty: number;
  setQty: (qty: number) => void;
}

const Search = ({ desc, setDesc, qty, setQty }: SearchProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(desc);
  };
  return (
    <form
      className="flex justify-center items-center h-16 w-screen bg-orange-600 gap-3"
      onSubmit={handleSubmit}
    >
      <p className="">What do you need for your 🥰 trip?</p>
      <select
        className="rounded-2xl cursor-pointer"
        value={qty}
        onChange={(e) => setQty(Number(e.target.value))}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        className="rounded-2xl pl-2"
        placeholder="Items..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button type="submit" className="w-12 h-6 bg-blue-300 rounded-2xl">
        Add
      </button>
    </form>
  );
};

export default Search;
