import { scooters } from "../../data/Scooters";
import arrowRight from "../../assets/arrow-right.svg";
import { useEffect, useState } from "react";
import { Scooter } from "../../compiler/types";
import useBasketStore from "../../store/useBasketStore";

type BookingItemProps = {
  scooterId: number;
  scooterCount: number;
  changeTotalPrice: (newValue: number) => void;
};

const BookingItem = ({
  scooterId,
  scooterCount,
  changeTotalPrice,
}: BookingItemProps) => {
  const [count, setCount] = useState<number>(scooterCount);
  const [price, setPrice] = useState<number>(0);

  const scooter: Scooter | undefined = scooters.find(
    (scooter) => scooter.id === scooterId
  );

  const { handleProducts, removeProducts } = useBasketStore();

  useEffect(() => {
    if (scooter) {
      changeTotalPrice(count * scooter.price);
      setPrice(scooter.price * count);
    }

    return () => {
      if (scooter) {
        changeTotalPrice(count * -scooter.price);
        setPrice(count * -scooter.price);
      }
    };
  }, [count]);

  const subCount = () => {
    if (scooter && count > 0) {
      handleProducts(scooterId, count - 1);
      setCount((count) => count - 1);
    }
  };

  const addCount = () => {
    if (scooter && count <= scooter.amount) {
      handleProducts(scooterId, count + 1);
      setCount((count) => count + 1);
    }
  };

  return (
    <>
      {scooter ? (
        <div className="booking__list">
          <img src={scooter?.thumbnail} alt={scooter.description} />
          <div className="booking__set">
            <div className="booking__product">
              <p className="text-heading5">{scooter.name}</p>
              <div>
                <div className="btn btn-primary" onClick={subCount}>
                  <span className="text-body-sm font-weight-700">-</span>
                </div>
                <p className="text-body-sm font-weight-700">{count}</p>
                <div className="btn btn-primary" onClick={addCount}>
                  <span className="text-body-sm font-weight-700">+</span>
                </div>
              </div>
            </div>
            <div className="booking__pricing">
              <p className="text-body text-weight-600">{price}$</p>
              <p className="text-caption">{scooter.price}$</p>
              <div>
                <button onClick={() => removeProducts(scooter.id)}>
                  <p className="text-caption">Remove</p>
                  <img src={arrowRight} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Scooter not found"
      )}
    </>
  );
};

export default BookingItem;
