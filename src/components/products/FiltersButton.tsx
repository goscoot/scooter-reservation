import sortIcon from "../../assets/sort-icon.svg";
import chevronDownIcon from "../../assets/chevron-down.svg";
import xIcon from "../../assets/x-lg.svg";
import { Dispatch, useState } from "react";
import Filters from "./Filters";
import { Actions } from "../../reducers/productsReducer";
interface FiltersButtonProps {
  dispatch: Dispatch<Actions>;
}
const FiltersButton = ({ dispatch }: FiltersButtonProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleSetCollapsed = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <div className="filters-wrapper">
      <button
        className="btn filters-button"
        onClick={() => handleSetCollapsed(true)}
      >
        <img src={sortIcon} alt="" />
        All filters
        <img src={chevronDownIcon} alt="" />
      </button>

      {collapsed && (
        <div className="dropdown">
          <div className="filters-dropdown">
            <h2 className="text-heading2">Filters</h2>
            <img
              className="filters-close"
              src={xIcon}
              alt=""
              onClick={() => handleSetCollapsed(false)}
            />
          </div>
          <Filters dispatch={dispatch} />
        </div>
      )}
    </div>
  );
};

export default FiltersButton;
