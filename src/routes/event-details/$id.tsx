import { createFileRoute } from "@tanstack/react-router";
import { testEvents } from "../../utils/constants";
import { EventDetailsType } from "../../utils/types";
import { formatDate } from "../../utils/common";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
import { Badge } from "@/components/ui/badge";

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

const tags = (tags: string[]) => {
  return (
    <div className="py-1">
      <div className="flex space-x-1 flex-wrap items-center">
        {tags?.map((tag, i) => {
          return <Badge key={i} variant="outline" className="text-xs">{tag}</Badge>;
        })}
      </div>
    </div>
  );
};

function EventDetails() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = Route.useParams();
  const testEvent: EventDetailsType = testEvents[0];

  return (
    <>
      <NavBar />

      <div className="p-4">
        <p className="text-3xl font-bold pb-4">{testEvent.name}</p>

        <div className="border border-gray-300 rounded-lg p-4 my-4">
          <div className="grid sm:grid-cols-4 grid-cols-2">
            {eventDetail("Location", testEvent.location)}
            {eventDetail("Date", formatDate(testEvent.date))}
            {eventDetail(
              "Time",
              `${testEvent.timeStart} - ${testEvent.timeEnd}`
            )}
            {eventDetail("Available Slots", `${testEvent.availableSlots}/${testEvent.participants}`)}
          </div>
          <Button className="mt-4 w-full" text="Join" />
        </div>

        <p className="py-4">{testEvent.description}</p>
        {tags(testEvent.tags)}
      </div>
    </>
  );
}
