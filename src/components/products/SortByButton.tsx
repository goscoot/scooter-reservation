import sortIcon from "../../assets/sort-icon.svg";
import chevronDownIcon from "../../assets/chevron-down.svg";
import { useState } from "react";
import { Scooter, scooters } from "../../data/Scooters";

export interface Sort {
  method: (a: Scooter, b: Scooter) => number;
  name: string;
}

interface SortByButtonProps {
  setProducts: (sortedProducts: Scooter[]) => void;
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

const SortByButton = ({ setProducts }: SortByButtonProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const [currentSort, setCurrentSort] = useState<Sort>(sortFunctions[0]);

  const handleCollapsedToggle = () => {
    setCollapsed((collapsed) => !collapsed);
  };

  const handleSetCurrentSortType = (type: Sort) => {
    setCurrentSort(type);

    setProducts(scooters.sort((a, b) => currentSort.method(a, b)));
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
