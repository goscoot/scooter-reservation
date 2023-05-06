import { Scooter } from "../../data/Scooters";
import ProductItem from "./ProductItem";
import sadFace from "../../assets/sad-face.svg";

interface ProductListProps {
  products: Scooter[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="products">
      {products.length >= 1 ? (
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <div className="products__none">
          <img src={sadFace} alt="" />
          <p className="text-body">
            We are sorry, but there are currently no items in our store that
            match such criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
