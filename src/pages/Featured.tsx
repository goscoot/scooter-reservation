import { Slider } from "../components/Slider";
import { SliderElement } from "../components/Slider";

const products: SliderElement[] = [
  {
    title: "Ducati Pro - I Electric Scooter",
    caption:
      "The PRO-I is the most technically advanced scooter in the Ducati Urban e-mobility series.",
    imageSource: "src/assets/product1.png",
    id: 1,
  },
  {
    title: "Flow St Kilda XTS Pro Electric Scooter XXXXXXX",
    caption:
      "The PRO-II is the most technically advanced scooter in the Ducati Urban e-mobility series.",
    imageSource: "src/assets/product1.png",
    id: 2,
  },
  {
    title: "Ducati Pro - III Electric Scooter",
    caption:
      "The PRO-II is the most technically advanced scooter in the Ducati Urban e-mobility series.",
    imageSource: "src/assets/product1.png",
    id: 3,
  },
  {
    title: "Ducati Pro - IV Electric Scooter",
    caption:
      "The PRO-II is the most technically advanced scooter in the Ducati Urban e-mobility series.",
    imageSource: "src/assets/product1.png",
    id: 4,
  },
];

export function Featured() {
  return (
    <div className="featured">
      <div className="featured__left">
        <div className="featured__wrapper">
          <h2 className="text-heading2">Featured Vehicles</h2>
          <p className="text-body">
            These are recently the most frequently chosen and most valued
            vehicles by our customers around theworld.
          </p>
        </div>
      </div>

      <Slider value={products} />
    </div>
  );
}
