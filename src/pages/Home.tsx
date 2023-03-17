export function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__wrapper1">
          <h1 className="text-heading1">
            Rent electric scooter.
            <br /> Fast and reliable
          </h1>
          <p className="text-body">
            You find most suitable scooter for you, and rent it now, for as long
            as you want.
          </p>
          <button className="btn btn-primary text-caption">
            Our vehicles
            <img src="src\assets\arrow-right.svg" alt="Arrow right" />
          </button>
        </div>

        <div className="home__wrapper2">
          <img
            src="src\assets\scooter1.png"
            alt="Newest model electric scooter"
          ></img>
          <img
            src="src\assets\scooter2.png"
            alt="Person riding electric scooter on road"
          ></img>
        </div>
      </div>
      <div className="home__featured">
        <div className="home__featured--left">
          <h2 className="text-heading2">Featured Vehicles</h2>
          <p className="text-body">
            These are recently the most frequently chosen and most valued
            vehicles by our customers around the world.
          </p>
        </div>
        <div className="home__featured--right">
          <div className="home__featured__product">
            <img src="src\assets\product1.png" alt="Electric scooter" />

            <div className="home__featured__product--description">
              <h2 className="text-body-sm-bold">
                Ducati Pro - III Electric Scooter
              </h2>
              <p className="text-caption">
                The PRO-III is the most technically advanced scooter in the
                Ducati Urban e-mobility series.
              </p>
              <a href="/reservation" className="text-caption link-underlined">
                Make a reservation
                <img src="src\assets\arrow-right.svg" alt="Arrow right" />
              </a>
            </div>
          </div>

          <div className="home__featured__product">
            <img src="src\assets\product1.png" alt="Electric scooter" />

            <div className="home__featured__product--description">
              <h2 className="text-body-sm-bold">
                Ducati Pro - III Electric Scooter
              </h2>
              <p className="text-caption">
                The PRO-III is the most technically advanced scooter in the
                Ducati Urban e-mobility series.
              </p>
              <a href="/reservation" className="text-caption link-underlined">
                Make a reservation
                <img src="src\assets\arrow-right.svg" alt="Arrow right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
