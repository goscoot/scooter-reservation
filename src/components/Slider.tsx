import {
  useRef,
  useState,
  useLayoutEffect,
  MouseEvent,
  TouchEvent,
} from "react";
import { Link } from "react-router-dom";

import smallArrowRight from "../assets/arrow-right.svg";
import arrowRight from "../assets/image-arrow-right.svg";
import arrowLeft from "../assets/image-arrow-left.svg";

export type SliderElement = {
  title: string;
  caption: string;
  imageSource: string;
  id: number;
};

type SliderProps = {
  value: SliderElement[];
};

export function Slider({ value }: SliderProps) {
  const carouselRef = useRef<null | HTMLDivElement>(null);
  const arrowRightRef = useRef<null | HTMLDivElement>(null);
  const arrowLeftRef = useRef<null | HTMLDivElement>(null);

  const [isDragStart, setIsDragStart] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const [prevPageX, setPrevPageX] = useState(0);
  const [prevScrollLeft, setPrevScrollLeft] = useState(0);
  const [positionDiff, setPositionDiff] = useState(0);

  const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    if (carouselRef.current && arrowRightRef.current && arrowLeftRef.current) {
      let scrollWidth: number =
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

      arrowRightRef.current.style.display =
        carouselRef.current.scrollLeft == scrollWidth ? "none" : "block";
      arrowLeftRef.current.style.display =
        carouselRef.current.scrollLeft == 0 ? "none" : "block";
    }
  };

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    setIsDragStart(true);
    setPrevPageX(event.pageX); // horizontal coordinate of mouse click relative to the left edge of parent element
    if (carouselRef.current) {
      setPrevScrollLeft(carouselRef.current.scrollLeft); // current scroll starting from left of selected element
    }
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    event.preventDefault();

    // when we stop holding mouse button stop dragging
    if (!isDragStart) {
      return;
    }
    setIsDragging(true);

    // scroll when moving mouse
    setPositionDiff(event.pageX - prevPageX);
    carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
  };

  const handleMouseUp = () => {
    setIsDragStart(false);
    if (!isDragging) return;
    setIsDragging(false);

    // cleanup
    setPositionDiff(0);
  };

  function handleTouchDown(event: TouchEvent<HTMLDivElement>) {
    setIsDragStart(true);
    setPrevPageX(event.touches[0].pageX);
    if (carouselRef.current) {
      setPrevScrollLeft(carouselRef.current.scrollLeft);
    }
  }

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    event.preventDefault();
    if (!isDragStart) {
      return;
    }
    setIsDragging(true);
    setPositionDiff(event.touches[0].pageX - prevPageX);
    carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
  };

  function scrollBy(value: number, direction: string): void {
    if (!carouselRef.current) return;

    if (direction === "right") {
      carouselRef.current.scrollLeft += value;
    } else if (direction === "left") {
      carouselRef.current.scrollLeft -= value;
    }
  }

  useLayoutEffect(() => {
    showHideIcons();
  });

  return (
    <div className="featured__right">
      <div
        ref={carouselRef}
        className={`featured__carousel ${isDragStart ? "dragging" : ""}`}
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
            scrollBy(325, "left");
          }}
        >
          <img src={arrowLeft} alt="Arrow left" />
        </span>
        {value.map((product) => (
          <div className="featured__product" key={product.id}>
            <img
              src={product.imageSource}
              alt="Electric scooter"
              draggable="false"
            />

            <div className="featured__product--description">
              <h6 className="text-700 text-heading6">{product.title}</h6>
              <p className="text-caption">{product.caption}</p>
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
            scrollBy(325, "right");
          }}
        >
          <img src={arrowRight} alt="Arrow right" />
        </span>
      </div>
    </div>
  );
}
