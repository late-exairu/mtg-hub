import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getNextSetToRelease(
  standard: Array<{
    sets: Array<{ name: string; code: string; releaseDate: string }>;
  }>
) {
  const currentDate = new Date();
  const allSets = standard.reduce((acc, curr) => {
    return acc.concat(curr.sets);
  }, [] as Array<{ name: string; code: string; releaseDate: string }>[]);

  const unreleasedSets = allSets.flat().filter((set) => {
    const date = new Date(set.releaseDate);
    return date >= currentDate;
  });

  return unreleasedSets[0];
}

export function getTimeToRelease(date: string) {
  const currentDate = new Date();
  const releaseDate = new Date(date);
  const timeToRelease = releaseDate.getTime() - currentDate.getTime();
  const months = Math.floor(timeToRelease / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor(
    (timeToRelease % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );

  return `${months > 0 ? `${months} months` : ""} ${days} days`;
}

export function getNextRotation(
  standard: Array<{
    sets: Array<{ name: string; code: string; releaseDate: string }>;
  }>
) {
  const lastBlock = standard[standard.length - 1];
  return lastBlock.sets[0];
}
