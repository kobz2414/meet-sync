import Event from "./components/event";
import Search from "./components/search";
import { testEvents } from "./utils/constants";

function App() {
  return (
    <>
      <div className="m-4">
        <div className="flex flex-col max-w-2xl w-full mx-auto">
          <Search />
          {testEvents.map((event) => {
            return (
              <Event
                name={event.name}
                description={event.description}
                location={event.location}
                date={event.date}
                timeStart={event.timeStart}
                timeEnd={event.timeEnd}
                participants={event.participants}
                tags={event.tags}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
