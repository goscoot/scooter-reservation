import ProductList from "./ProductList";
import { scooters } from "../../data/Scooters";
import SortByButton from "./SortByButton";
import { useReducer } from "react";
import Filters from "./Filters";
import { productsReducer } from "../../reducers/productsReducer";
import FiltersButton from "./FiltersButton";

const FilterableProductList = () => {
  const [state, dispatch] = useReducer(productsReducer, scooters);

  return (
    <div className="products-main">
      <aside className="filters-section">
        <h2 className="text-heading2 filters-header">Filters</h2>
        <Filters dispatch={dispatch} />
      </aside>
      <main>
        <div className="products-filters">
          <FiltersButton dispatch={dispatch} />

          <SortByButton products={state} dispatch={dispatch} />
        </div>
        <ProductList products={state} />
      </main>
    </div>
  );
};

export default FilterableProductList;
