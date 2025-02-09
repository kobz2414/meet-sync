import { TagType } from "../utils/types";

const EventTag = ({ tag }: TagType) => {
  return (
    <p className="w-fit rounded-full bg-gray-950 py-1 px-4 my-0.5 text-xs text-white">
      {tag}
    </p>
  );
};

export default EventTag;
