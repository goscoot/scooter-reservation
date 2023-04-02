import { Scooter, scooters } from "../../data/Scooters";

export type Actions =
  | {
      brands: string[];
      ranges: string[];
      colors: string[];
      type: "filter";
    }
  | { sortedProducts: Scooter[]; type: "sort" };

export function productsReducer(state: Scooter[], action: Actions) {
  switch (action.type) {
    case "filter": {
      let filteredScooters = scooters;

      if (action.brands.length > 0) {
        filteredScooters = [
          ...filteredScooters.filter((scooter) =>
            action.brands.includes(scooter.brand)
          ),
        ];
      }

      if (action.colors.length > 0) {
        filteredScooters = [
          ...filteredScooters.filter((scooter) =>
            action.colors.includes(scooter.color)
          ),
        ];
      }

      if (action.ranges.length > 0) {
        filteredScooters = [
          ...filteredScooters.filter((scooter) =>
            action.ranges.includes(scooter.range.toString())
          ),
        ];
      }

      return filteredScooters;
    }
    case "sort": {
      return [...action.sortedProducts];
    }
  }
}
