const Search = () => {
  return (
    <div className="flex flex-row">
      <input
        type="text"
        className="p-2 border border-gray-300 rounded-md flex-1"
        placeholder="Search..."
      />
      <div className="mx-1"></div>
      <button
        className="p-2 border border-gray-300 rounded-md bg-gray-950 text-white"
        onClick={() => console.log("Search")}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
