import { Sort, sortFunctions } from "@/helpers/sorting";
import { useState } from "react";
import { SortButtonProps } from "./SortButton";

export const useSorting = ({
  products,
  dispatch,
}: SortButtonProps): [Sort, (type: Sort) => void] => {
  const [currentSort, setCurrentSort] = useState<Sort>(sortFunctions[0]);

  const handleSetCurrentSortType = (type: Sort) => {
    setCurrentSort(type);

    dispatch({
      type: "sort",
      sortedProducts: products.sort(currentSort.method),
    });
  };

  return [currentSort, handleSetCurrentSortType];
};

export default useSorting;
