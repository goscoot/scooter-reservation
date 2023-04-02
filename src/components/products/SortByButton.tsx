import sortIcon from "../../assets/sort-icon.svg";
import chevronDownIcon from "../../assets/chevron-down.svg";
import { Dispatch, useState } from "react";
import { Scooter } from "../../data/Scooters";
import { Actions } from "./productsReducer";

export interface Sort {
  method: (a: Scooter, b: Scooter) => number;
  name: string;
}

interface SortByButtonProps {
  dispatch: Dispatch<Actions>;
  products: Scooter[];
}

const sortFunctions = [
  {
    method: (a: Scooter, b: Scooter) => a.amount - b.amount,
    name: "Best choice",
  },
  {
    method: (a: Scooter, b: Scooter) => b.amount - a.amount,
    name: "Popular",
  },
];

const SortByButton = ({ products, dispatch }: SortByButtonProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const [currentSort, setCurrentSort] = useState<Sort>(sortFunctions[0]);

  const handleCollapsedToggle = () => {
    setCollapsed((collapsed) => !collapsed);
  };

  const handleSetCurrentSortType = (type: Sort) => {
    setCurrentSort(type);

    dispatch({
      type: "sort",
      sortedProducts: products.sort(currentSort.method),
    });
  };

  return (
    <button className="btn sort-products" onClick={handleCollapsedToggle}>
      <img src={sortIcon} alt="" />
      <p>Sort by:</p>
      <p className="font-weight-700">{currentSort.name}</p>
      <div>
        {collapsed && (
          <div className="dropdown">
            {sortFunctions.map((type, i) => {
              return (
                <p
                  className="dropdown__element"
                  key={i}
                  onClick={() => handleSetCurrentSortType(type)}
                >
                  {type.name}
                </p>
              );
            })}
          </div>
        )}
      </div>

      <img src={chevronDownIcon} alt="" />
    </button>
  );
};

export default SortByButton;
