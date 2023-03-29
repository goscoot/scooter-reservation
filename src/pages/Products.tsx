import productsHeaderImage from "../assets/products-hero.webp";
import FilterableProductList from "../components/products/FilterableProductList";

const Products = () => {
  return (
    <>
      <header className="products__header">
        <div className="image__wrapper">
          <img
            className="header__image"
            src={productsHeaderImage}
            alt="people riding on scooters"
          />
        </div>
        <hgroup className="header__text">
          <h1 className="text-heading1 text-100">
            Our <span className="text-400">scooters</span>.
          </h1>
          <p className="text-body text-100">
            More than 216 types of scooters. Choose whatever you like.
          </p>
        </hgroup>
      </header>
      <FilterableProductList />
    </>
  );
};

export default Products;
