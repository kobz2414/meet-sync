const Search = () => {
  return (
    <div className="flex flex-row my-2">
      <input
        type="text"
        className="py-2 px-4 border border-gray-300 rounded-md flex-1"
        placeholder="Search..."
      />
      <div className="mx-1"></div>
      <button
        className="p-2 border border-gray-300 rounded-md bg-gray-950 text-white min-w-30"
        onClick={() => console.log("Search")}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
