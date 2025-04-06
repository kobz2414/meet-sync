import { createFileRoute } from "@tanstack/react-router";
import Event from "../components/Event";
import Search from "../components/Search";
import NavBar from "../components/NavBar";
import { testEvents } from "../utils/constants";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <NavBar />
      <div>
        <p className="flex justify-center text-6xl font-bold pt-4 pb-10">
          Meet Sync
        </p>
      </div>
      <Search />
      {testEvents.map((event, i) => (
        <Event
          key={i}
          id={event.id}
          name={event.name}
          description={event.description}
          location={event.location}
          date={event.date}
          timeStart={event.timeStart}
          timeEnd={event.timeEnd}
          participants={event.participants}
          availableSlots={event.availableSlots}
          tags={event.tags}
        />
      ))}
    </>
  );
}
