import ProductList from "./ProductList";
import { Scooter, scooters } from "../../data/Scooters";
import SortByButton from "./SortByButton";
import { useState } from "react";

const FilterableProductList = () => {
  const [products, setProducts] = useState<Scooter[]>(scooters);

  const handle = (sortedProducts: Scooter[]) => {
    setProducts([...sortedProducts]);
  };

  return (
    <main className="products-main">
      <div className="products-filters">
        <SortByButton setProducts={handle} />
      </div>
      <section className="products">
        <ProductList products={products} />
      </section>
    </main>
  );
};

export default FilterableProductList;
