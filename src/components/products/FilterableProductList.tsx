import ProductList from "./ProductList";
import { scooters } from "@/data/Scooters";
import SortButton from "../sorting/SortButton";
import { useReducer } from "react";
import Filters from "../filters/FilterList";
import { productsReducer } from "@/reducers/productsReducer";
import FiltersButton from "../filters/FiltersButton";

const FilterableProductList = () => {
  const [state, dispatch] = useReducer(productsReducer, scooters);

  return (
    <main className="products-main">
      <aside className="filters-section">
        <h2 className="text-heading2 filters-header">Filters</h2>
        <Filters dispatch={dispatch} />
      </aside>
      <div>
        <div className="products-filters">
          <FiltersButton dispatch={dispatch} />

          <SortButton products={state} dispatch={dispatch} />
        </div>
        <ProductList products={state} />
      </div>
    </main>
  );
};

export default FilterableProductList;
