import { Link } from "react-router-dom";

import smallArrowRight from "../assets/arrow-right.svg";
import arrowRight from "../assets/image-arrow-right.svg";
import arrowLeft from "../assets/image-arrow-left.svg";
import { useSlider } from "../hooks/useSlider";
import { Scooter } from "../compiler/types";

type SliderProps = {
  value: Scooter[];
};

export function Slider({ value }: SliderProps) {
  const {
    isDragStart,
    carouselRef,
    arrowRightRef,
    arrowLeftRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchDown,
    handleTouchMove,
    scrollLeftBy,
    scrollRightBy,
  } = useSlider();

  return (
    <div className="featured__right">
      <div
        ref={carouselRef}
        className={`featured__carousel ${isDragStart && "dragging"}`}
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseUp={() => handleMouseUp()}
        onMouseLeave={() => handleMouseUp()}
        onTouchStart={(e) => handleTouchDown(e)}
        onTouchMove={(e) => handleTouchMove(e)}
        onTouchEnd={() => handleMouseUp()}
      >
        <span
          id="left"
          ref={arrowLeftRef}
          onClick={() => {
            scrollLeftBy(325);
          }}
        >
          <img src={arrowLeft} alt="Arrow left" />
        </span>
        {value.map((product) => (
          <div className="featured__product" key={product.id}>
            <img
              src={product.thumbnail}
              alt="Electric scooter"
              draggable="false"
            />

            <div className="featured__product--description">
              <h5 className="font-weight-700 text-heading5">{product.name}</h5>
              <p className="text-body-sm">{product.description}</p>
              <Link to="/reservation" className="text-caption link-underlined">
                Make a reservation
                <img src={smallArrowRight} alt="Arrow right" />
              </Link>
            </div>
          </div>
        ))}

        <span
          id="right"
          ref={arrowRightRef}
          onClick={() => {
            scrollRightBy(325);
          }}
        >
          <img src={arrowRight} alt="Arrow right" />
        </span>
      </div>
    </div>
  );
}
