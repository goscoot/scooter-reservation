import ProductList from "./ProductList";
import { scooters } from "../../data/Scooters";

const FilterableProductList = () => {
  return (
    <section className="products">
      <ProductList products={scooters} />
    </section>
  );
};

export default FilterableProductList;
