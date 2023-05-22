import sortIcon from "@/assets/sort-icon.svg";
import chevronDownIcon from "@/assets/chevron-down.svg";
import chevronUpIcon from "@/assets/chevron-up.svg";
import { Dispatch } from "react";
import { Scooter } from "@/data/Scooters";
import { Actions } from "@/reducers/productsReducer";
import useToggle from "@/hooks/useToggle";
import useSorting from "./useSorting";
import SortDropdown from "./SortDropdown";

export interface SortButtonProps {
  dispatch: Dispatch<Actions>;
  products: Scooter[];
}

const SortButton = ({ products, dispatch }: SortButtonProps) => {
  const [currentSort, setCurrentSortType] = useSorting({ products, dispatch });
  const [collapsed, toggleCollapsed] = useToggle();

  return (
    <button className="btn sort-button" onClick={toggleCollapsed}>
      <img src={sortIcon} alt="" />
      <p className="text-body-sm">Sort by:</p>
      <p className="font-weight-700 text-body-sm">{currentSort.name}</p>

      <SortDropdown
        setCurrentSortType={setCurrentSortType}
        collapsed={collapsed}
      />
      <img src={collapsed ? chevronUpIcon : chevronDownIcon} alt="" />
    </button>
  );
};

export default SortButton;
