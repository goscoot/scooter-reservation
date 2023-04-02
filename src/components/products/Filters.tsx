import { ChangeEvent, Dispatch, useEffect, useState } from "react";
import { Actions } from "../../reducers/productsReducer";

const BRANDS = ["Ducati", "FLOW", "Segway", "Pure", "Aprilia", "KQI2"];
const COLORS = ["black", "white", "silver"];
const RANGES = ["65", "40"];

interface FiltersProps {
  dispatch: Dispatch<Actions>;
}

interface Filters {
  brands: string[];
  colors: string[];
  ranges: string[];
}

const Filters = ({ dispatch }: FiltersProps) => {
  const [filters, setFilters] = useState<Filters>({
    brands: [],
    colors: [],
    ranges: [],
  });

  const handleAddBrand = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setFilters({
        ...filters,
        brands: [...filters.brands, event.target.value],
      });
      return;
    }
    setFilters({
      ...filters,
      brands: filters.brands.filter((d) => d !== event.target.value),
    });
  };

  const handleAddColor = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setFilters({
        ...filters,
        colors: [...filters.colors, event.target.value],
      });
      return;
    }
    setFilters({
      ...filters,
      colors: filters.colors.filter((d) => d !== event.target.value),
    });
  };

  const handleAddRange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setFilters({
        ...filters,
        ranges: [...filters.ranges, event.target.value],
      });
      return;
    }
    setFilters({
      ...filters,
      ranges: filters.ranges.filter((d) => d !== event.target.value),
    });
  };

  useEffect(() => {
    dispatch({ type: "filter", ...filters });
  }, [filters]);

  return (
    <div>
      <form action="" className="filters">
        <p className="font-weight-700 text-body">Brand</p>
        {BRANDS.map((brand) => (
          <label className="input-wrapper" key={brand}>
            <input
              className="input-checkbox"
              type="checkbox"
              id={brand}
              value={brand}
              onChange={(event) => handleAddBrand(event)}
            />
            <span className="checkmark"></span>
            {brand}
          </label>
        ))}
        <p className="font-weight-700 text-body">Color</p>
        {COLORS.map((color) => (
          <label className="input-wrapper" key={color}>
            <input
              className="input-checkbox"
              key={color}
              type="checkbox"
              id={color}
              value={color}
              onChange={(event) => handleAddColor(event)}
            />
            <span className="checkmark"></span>
            {color}
          </label>
        ))}
        <p className="font-weight-700 text-body">Range</p>
        {RANGES.map((range) => (
          <label className="input-wrapper" key={range}>
            <input
              className="input-checkbox"
              key={range}
              type="checkbox"
              id={range}
              value={range}
              onChange={(event) => handleAddRange(event)}
            />
            <span className="checkmark"></span>
            {range}
          </label>
        ))}
      </form>
    </div>
  );
};

export default Filters;
