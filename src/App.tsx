import Event from "./components/Event";
import Search from "./components/Search";

function App() {
  return (
    <>
        <div className="m-4">
        <div className="flex flex-col max-w-2xl w-full mx-auto">
          <Search />
          <Event />
        </div>
        </div>
    </>
  );
}

export default App;
