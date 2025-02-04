import { createFileRoute } from '@tanstack/react-router';
import Event from '../components/event';
import Search from '../components/search';
import { testEvents } from '../utils/constants';

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
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
          tags={event.tags}
        />
      ))}
    </>
  );
}
