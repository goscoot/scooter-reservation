import { Sort, sortFunctions } from "../../helpers/sorting";

interface SortDropdownProps {
  collapsed: boolean;
  setCurrentSortType: (type: Sort) => void;
}

const SortDropdown = ({ collapsed, setCurrentSortType }: SortDropdownProps) => {
  return (
    <div>
      {collapsed && (
        <div className="sort__dropdown dropdown">
          {sortFunctions.map((type) => {
            return (
              <p
                className="dropdown__element text-body-sm"
                key={type.name}
                onClick={() => setCurrentSortType(type)}
              >
                {type.name}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
