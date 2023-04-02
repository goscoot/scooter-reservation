import { Scooter } from "../../data/Scooters";
import ProductItem from "./ProductItem";

interface ProductListProps {
  products: Scooter[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="products">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
