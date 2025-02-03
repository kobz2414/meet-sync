import { Tag } from "../utils/types";

const EventTag = ({ tag }: Tag) => {
  return (
    <p className="w-fit rounded-full bg-gray-950 py-1 px-4 text-xs text-white">
      {tag}
    </p>
  );
};

export default EventTag;
