import Button from "./Button";

const Search = () => {
  return (
    <div className="flex flex-row my-2">
      <input
        type="text"
        className="py-2 px-4 border border-gray-300 rounded-lg flex-1"
        placeholder="Search..."
      />
      <div className="mx-1"></div>
      <Button text="Search" onClick={() => console.log("Search")}/>
    </div>
  );
};

export default Search;
