import { formatDistanceToNow } from "date-fns";

export function getTimeStamp(createdAt: Date): string {
  const timeStamp = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
  });
  return timeStamp;
}
