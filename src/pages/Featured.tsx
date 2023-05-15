import { Slider } from "../components/Slider";
import { useProducts } from "../hooks/useProducts";
import { scooters } from "../data/Scooters";

export function Featured() {
  // If storing products on firestore
  // const { productList, getProductList, bestChoiceQuery } = useProducts();
  // useEffect(() => {
  //   getProductList(bestChoiceQuery);
  // }, []);

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

      <Slider value={scooters.filter((scooter) => scooter.id <= 5)} />
    </div>
  );
}
