import { Scooter } from "../../data/Scooters";
import ProductItem from "./ProductItem";

interface ProductListProps {
  products: Scooter[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductList;
