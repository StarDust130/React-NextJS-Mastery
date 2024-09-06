/* eslint-disable @typescript-eslint/no-explicit-any */

const Search = ({ query, setQuery }: any) => {
  return (
    <>
      {" "}
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
};
export default Search;
