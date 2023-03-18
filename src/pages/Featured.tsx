import { Slider } from "../components/Slider";
import { SliderElement } from "../components/Slider";

const products: SliderElement[] = [
  {
    title: "Ducati Pro - I Electric Scooter",
    caption:
      "The PRO-I is the most technically advanced scooter in the Ducati Urban e-mobility series.",
    imageSource: "src/assets/product1.png",
  },
  {
    title: "Ducati Pro - II Electric Scooter",
    caption:
      "The PRO-II is the most technically advanced scooter in the Ducati Urban e-mobility series.",
    imageSource: "src/assets/product1.png",
  },
];

export function Featured() {
  return (
    <div className="featured">
      <div className="featured__left">
        <div className="featured__wrapper">
          <h2 className="text-heading2">Featured Vehicles</h2>
          <p className="text-body">
            These are recently the most <br /> frequently chosen and most valued{" "}
            <br />
            vehicles by our customers around the <br /> world.
          </p>
        </div>
      </div>

      <Slider value={products} />
    </div>
  );
}
