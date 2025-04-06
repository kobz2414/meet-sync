export type EventDetailsType = {
  id: string;
  name: string;
  description: string;
  location: string;
  date: string;
  timeStart: string;
  timeEnd: string;
  participants: number;
  availableSlots: number;
  tags: string[];
};

export type TagType = {
  tag: string;
};
