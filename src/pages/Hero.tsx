import arrowRight from "../assets/arrow-right.svg";
import heroImage1 from "../assets/scooter1.png";
import heroImage2 from "../assets/scooter2.png";

export function Hero() {
  return (
    <div className="home__hero">
      <div className="home__hero__container">
        <div className="home__half">
          <div className="home__wrapper1">
            <h1 className="text-heading1">
              Rent electric scooter. Fast and reliable.
            </h1>
            <p className="text-body">
              You find most suitable scooter for you, and rent it now, for as
              long as you want.
            </p>
            <button className="btn btn-primary text-caption">
              Our vehicles
              <img src={arrowRight} alt="Arrow right" />
            </button>
          </div>
        </div>

        <div className="home__half">
          <div className="home__wrapper2">
            <div className="home__wrapper2__image-container">
              <img src={heroImage1} alt="Newest model electric scooter"></img>
              <img
                src={heroImage2}
                alt="Person riding electric scooter on road"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
