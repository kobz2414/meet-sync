export type EventDetails = {
  name: string;
  description: string;
  location: string;
  date: string;
  timeStart: string;
  timeEnd: string;
  participants: number;
  tags: string[];
};

export type Tag = {
  tag: string;
};
