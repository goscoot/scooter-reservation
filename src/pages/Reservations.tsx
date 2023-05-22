import { scooters } from "@/data/Scooters";

const Reservations = () => {
  return (
    <main className="reservations-container">
      <h1 className="text-heading1">Reservation History</h1>
      <div className="old-reservations">
        <h2 className="text-heading2">Active reservations</h2>

        <div className="reservation-entries">
          <h3 className="text-body">Today, 23 may</h3>
          <div className="reservation-details">
            <div className="reservation-details__item">
              <div className="text-body-sm">Reservation date</div>
              <div className="text-body-sm font-weight-700">
                05/05/2023 9:15am
              </div>
            </div>
            <div className="reservation-details__item">
              <div className="text-body-sm">Return date</div>
              <div className="text-body-sm font-weight-700">05/05/2023 6pm</div>
            </div>
            <div className="reservation-details__item">
              <div className="text-body-sm">Location</div>
              <div className="text-body-sm font-weight-700">Example</div>
            </div>
            <div className="reservation-details__item">
              <div className="text-body-sm">Total</div>
              <div className="text-body-sm font-weight-700">29$</div>
            </div>
            <div className="reservation-details__item">
              <button className="text-body-sm font-weight-700 reservation-details__button">
                Cancel
              </button>
            </div>
          </div>
        </div>

        <div className="reservation-products">
          <div className="text-body-sm">Products</div>
          <div className="reservation-products__list">
            {scooters
              .filter((scooter) => scooter.id <= 3)
              .map((product) => (
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
                    <p className="text-body-sm">3x {product.price}$</p>
                    <p className="text-body-sm">{3 * product.price}$</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="old-reservations">
        <h2 className="text-heading2">Old reservations</h2>

        <div className="reservation-entries">
          <h3 className="text-body">Today, 23 may</h3>
          <div className="reservation-details">
            <div className="reservation-details__item">
              <div className="text-body-sm">Reservation date</div>
              <div className="text-body-sm font-weight-700">
                05/05/2023 9:15am
              </div>
            </div>
            <div className="reservation-details__item">
              <div className="text-body-sm">Return date</div>
              <div className="text-body-sm font-weight-700">05/05/2023 6pm</div>
            </div>
            <div className="reservation-details__item">
              <div className="text-body-sm">Location</div>
              <div className="text-body-sm font-weight-700">Example</div>
            </div>
            <div className="reservation-details__item">
              <div className="text-body-sm">Total</div>
              <div className="text-body-sm font-weight-700">29$</div>
            </div>
            <div className="reservation-details__item">
              <div className="text-body-sm">Status</div>
              <div className="reservation-product__status">Completed</div>
            </div>
          </div>
        </div>

        <div className="reservation-products">
          <div className="text-body-sm">Products</div>
          <div className="reservation-products__list">
            {scooters
              .filter((scooter) => scooter.id <= 3)
              .map((product) => (
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
                    <p className="text-body-sm">3x {product.price}$</p>
                    <p className="text-body-sm">{3 * product.price}$</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Reservations;
