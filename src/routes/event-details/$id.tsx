import { createFileRoute } from "@tanstack/react-router";
import { testEvents } from "../../utils/constants";
import { EventDetailsType } from "../../utils/types";
import { formatDate } from "../../utils/common";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
import EventTag from "../../components/Event-Tag";

export const Route = createFileRoute("/event-details/$id")({
  component: EventDetails,
});

const eventDetail = (label: string, value: string) => {
  return (
    <div className="py-1">
      <p className="text-sm">{label}</p>
      <p>{value}</p>
    </div>
  );
};

const tags = (label: string, tags: string[]) => {
  return (
    <div className="py-1">
      <p className="text-sm mb-1">{label}</p>
      <div className="flex flex-row space-x-1 flex-wrap">
        {tags?.map((tag, i) => {
          return <EventTag key={i} tag={tag} />;
        })}
      </div>
    </div>
  );
};

function EventDetails() {
  const { id } = Route.useParams();
  const testEvent: EventDetailsType = testEvents[0];

  return (
    <>
      <NavBar />
      <div className="p-4 sm:grid sm:grid-cols-8 sm:gap-4">
        <div className="col-span-5">
          <p className="text-4xl font-bold py-2">{testEvent.name}</p>
          <p className="py-2">{testEvent.description}</p>
        </div>
        <div className="sm:col-span-3  border border-gray-300 rounded-lg p-4 sm:mt-0 mt-4">
          <div className="grid sm:grid-cols-1 grid-cols-2">
            {eventDetail("Location", testEvent.location)}
            {eventDetail("Date", formatDate(testEvent.date))}
            {eventDetail(
              "Time",
              `${testEvent.timeStart} - ${testEvent.timeEnd}`
            )}
            {eventDetail("Pax", testEvent.participants.toString())}
            {tags("Tags", testEvent.tags)}
          </div>
          <Button className="mt-4 w-full" text="Join" />
        </div>
      </div>
    </>
  );
}
