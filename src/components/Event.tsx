import { Calendar, Clock, MapPin, User } from "lucide-react";
import EventTag from "./event-tag";
import { EventDetails } from "../utils/types";
import { useNavigate } from "@tanstack/react-router";

const Event = ({
  id,
  name,
  description,
  location,
  date,
  timeStart,
  timeEnd,
  participants,
  tags,
}: EventDetails) => {
  const navigate = useNavigate();

  const handlePageDetails = (id: string) => {
    navigate({ to: "/event-details/$id", params: { id: id } });
  }

  return (
    <>
      <div className="flex md:flex-row flex-col p-4 my-2 border justify-between rounded-md border-gray-300">
        <div className="flex flex-col max-w-md">
          <div className="py-1">
            <p className="text-xl font-semibold">{name}</p>
            <div className="flex md:flex-row flex-col space-x-4">
              <div className="flex flex-row items-center py-1">
                <MapPin size={16} />
                <p className="ps-1 text-sm">{location}</p>
              </div>
              <div className="flex flex-row items-center py-1">
                <Calendar size={16} />
                <p className="ps-1 text-sm">{date}</p>
              </div>
              <div className="flex flex-row items-center py-1">
                <Clock size={16} />
                <p className="ps-1 text-sm">
                  {timeStart} - {timeEnd}
                </p>
              </div>
              <div className="flex flex-row items-center py-1">
                <User size={16} />
                <p className="ps-1 text-sm">{participants}</p>
              </div>
            </div>
          </div>
          <p className="py-1">{description}</p>
          <div className="flex flex-row py-2 space-x-1">
            {tags.map((tag, i) => (
              <EventTag key={i} tag={tag} />
            ))}
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:justify-start md:items-end items-start md:py-0 pt-4 md:space-y-2 md:space-x-0 space-x-2">
          <button className="px-6 py-2 border-gray-300 rounded-md bg-gray-950 text-white min-w-30">
            Join
          </button>
          <button className="px-6 py-2 border-gray-300 rounded-md bg-gray-950 text-white min-w-30" onClick={() => handlePageDetails(id)}>
            Details
          </button>
        </div>
      </div>
    </>
  );
};

export default Event;
