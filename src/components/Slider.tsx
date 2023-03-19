import { useRef, useState, useLayoutEffect } from "react";

import arrowRight from "../assets/image-arrow-right.svg";
import arrowLeft from "../assets/image-arrow-left.svg";

export type SliderElement = {
  title: string;
  caption: string;
  imageSource: string;
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

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setIsDragStart(true);
    setPrevPageX(event.pageX); // horizontal coordinate of mouse click relative to the left edge of parent element
    if (carouselRef.current) {
      setPrevScrollLeft(carouselRef.current.scrollLeft); // current scroll starting from left of selected element
    }
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!carouselRef.current) return;
    event.preventDefault();

    // when we stop holding mouse button stop dragging
    if (!isDragStart) {
      return;
    }

    setIsDragging(true);
    carouselRef.current.classList.add("dragging");

    // scroll when moving mouse
    setPositionDiff(event.pageX - prevPageX);
    carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
  };

  const handleMouseUp = () => {
    setIsDragStart(false);
    if (carouselRef.current) carouselRef.current.classList.remove("dragging");
    if (!isDragging) return;
    setIsDragging(false);

    // cleanup
    setPositionDiff(0);
  };

  function handleTouchDown(event: React.TouchEvent<HTMLDivElement>) {
    setIsDragStart(true);
    setPrevPageX(event.touches[0].pageX);
    if (carouselRef.current) {
      setPrevScrollLeft(carouselRef.current.scrollLeft);
    }
  }

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    event.preventDefault();
    if (!isDragStart) {
      return;
    }
    setIsDragging(true);
    carouselRef.current.classList.add("dragging");
    setPositionDiff(event.touches[0].pageX - prevPageX);
    carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
  };

  useLayoutEffect(() => {
    showHideIcons();
  });

  return (
    <div className="featured__right">
      <div
        ref={carouselRef}
        className="featured__carousel"
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
            if (carouselRef.current) carouselRef.current.scrollLeft -= 325;
          }}
        >
          <img src={arrowLeft} alt="Arrow left" />
        </span>
        {value.map((v) => (
          <div className="featured__product">
            <img src={v.imageSource} alt="Electric scooter" draggable="false" />

            <div className="featured__product--description">
              <h2 className="text-700 text-body-sm">{v.title}</h2>
              <p className="text-caption">{v.caption}</p>
              <a href="/reservation" className="text-caption link-underlined">
                Make a reservation
                <img src="src\assets\arrow-right.svg" alt="Arrow right" />
              </a>
            </div>
          </div>
        ))}

        <span
          id="right"
          ref={arrowRightRef}
          onClick={() => {
            if (carouselRef.current) carouselRef.current.scrollLeft += 325;
          }}
        >
          <img src={arrowRight} alt="Arrow right" />
        </span>
      </div>
    </div>
  );
}
