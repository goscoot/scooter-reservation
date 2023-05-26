import { Scooter } from "@/data/Scooters";

interface ReservationEntryProps {
  reservationDate: Date;
  returnDate: Date;
  location: string;
  total: number;
  completed: boolean;
  products: Array<Scooter & { reservedAmount: number }>;
}

const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
};

const ReservationEntry = ({
  reservationDate,
  returnDate,
  location,
  total,
  completed,
  products,
}: ReservationEntryProps) => {
  return (
    <>
      <div className="reservation-details">
        <div className="reservation-details__item">
          <div className="text-body-sm">Reservation date</div>
          <div className="text-body-sm font-weight-700">
            {reservationDate.toLocaleTimeString("en-us", { ...DATE_OPTIONS })}
          </div>
        </div>
        <div className="reservation-details__item">
          <div className="text-body-sm">Return date</div>
          <div className="text-body-sm font-weight-700">
            {returnDate.toLocaleTimeString("en-us", { ...DATE_OPTIONS })}
          </div>
        </div>
        <div className="reservation-details__item">
          <div className="text-body-sm">Location</div>
          <div className="text-body-sm font-weight-700">{location}</div>
        </div>
        <div className="reservation-details__item">
          <div className="text-body-sm">Total</div>
          <div className="text-body-sm font-weight-700">{total}$</div>
        </div>
        <div className="reservation-details__item">
          {!completed ? (
            <button className="text-body-sm font-weight-700 reservation-details__button">
              Cancel
            </button>
          ) : (
            <>
              <div className="text-body-sm">Status</div>
              <div className="reservation-product__status text-body-sm font-weight-700">
                Completed
              </div>
            </>
          )}
        </div>
      </div>

      <div className="reservation-products">
        <div className="text-body-sm">Products</div>
        <div className="reservation-products__list">
          {products.map((product) => (
            <div className="reservation-product" key={product.id}>
              <div className="reservation-product__thumbnail-wrapper">
                <img
                  src={product.thumbnail}
                  alt="Electric scooter"
                  className="reservation-product__thumbnail"
                />
                <h4 className="font-weight-700 text-heading5">
                  {product.name}
                </h4>
              </div>
              <div className="reservation-product__description">
                <p className="text-body-sm">
                  {product.reservedAmount}x {product.price}$
                </p>
                <p className="text-body-sm">
                  {product.reservedAmount * product.price}$
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReservationEntry;
