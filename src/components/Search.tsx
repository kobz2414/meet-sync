import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"

const Search = () => {
  return (
    <div className="flex w-full items-center space-x-2">
      <Input type="text" placeholder="Seach" />
      <Button onClick={() => console.log("Search")}>Search</Button>
    </div>
  );
};

export default Search;
