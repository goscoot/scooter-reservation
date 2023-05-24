import { Scooter } from "@/data/Scooters";
import { Link } from "react-router-dom";
import useBasketStore from "../../store/useBasketStore";
import smallArrowRight from "@/assets/arrow-right.svg";

interface ProductItemProps {
  product: Scooter;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { addProduct } = useBasketStore();

  return (
    <div className="product" key={product.id}>
      <img className="product__thumbnail" src={product.thumbnail} alt="" />
      <div className="product__item">
        {product.amount === 0 && <p className="text-body">NOT AVAILABLE</p>}
        <h5 className="font-weight-700 text-heading5 product__name">
          {product.name}
        </h5>
        <p className="text-body-sm product__description">
          {product.description}
        </p>
        <button
          className="text-caption link-underlined"
          onClick={() => addProduct(product.id)}
        >
          Make a reservation
          <img src={smallArrowRight} alt="Arrow right" />
        </button>
        {/* <Link to="/reservation" className="text-caption link-underlined">
          Make a reservation
          <img src={smallArrowRight} alt="Arrow right" />
        </Link> */}
      </div>
    </div>
  );
};

export default ProductItem;
