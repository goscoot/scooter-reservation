import { Scooter } from "@/data/Scooters";

export interface Sort {
  method: (a: Scooter, b: Scooter) => number;
  name: string;
}

export const sortFunctions = [
  {
    // sorting by the best reviewed products
    method: (a: Scooter, b: Scooter) => a.amount - b.amount,
    name: "Best choice",
  },
  {
    // sorting by most selling products
    method: (a: Scooter, b: Scooter) => b.amount - a.amount,
    name: "Popular",
  },
];
