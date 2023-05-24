import { useState } from "react";
import BookingItem from "./BookingItem";
import useBasketStore from "../../store/useBasketStore";
import { useFormikContext } from "formik";
import arrowRight from "../../assets/arrow-right.svg";
import { Link } from "react-router-dom";

const BookingList = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { basketProducts } = useBasketStore();

  const formik = useFormikContext();

  const handleTotalPriceChange = (newValue: number) => {
    setTotalPrice((price) => price + newValue);
  };

  return (
    <div className="product-list">
      <div className="product-list__wrapper">
        {basketProducts.map((product) => (
          <BookingItem
            key={product.id}
            scooterId={product.id}
            scooterCount={product.count}
            changeTotalPrice={handleTotalPriceChange}
          />
        ))}

        <Link to="/products">
          <div className="square"></div>
        </Link>

        <hr />
        <div className="product-list__total">
          <p className="text-body-sm">Total Sum</p>
          <h4 className="text-heading4 text-weight-600">{totalPrice}$</h4>
        </div>
        <button
          className="btn btn-primary text-body-sm product-list__proceed"
          type="submit"
          disabled={formik.isSubmitting}
          onClick={() => formik.handleSubmit}
        >
          Proceed
          <span>
            <img src={arrowRight} alt="" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default BookingList;
