import { Sort, sortFunctions } from "@/helpers/sorting";

interface SortDropdownProps {
  collapsed: boolean;
  setCurrentSortType: (type: Sort) => void;
}

const SortDropdownContent = ({
  collapsed,
  setCurrentSortType,
}: SortDropdownProps) => {
  return (
    <>
      {collapsed && (
        <div className="sort__dropdown dropdown__content">
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
    </>
  );
};

export default SortDropdownContent;
