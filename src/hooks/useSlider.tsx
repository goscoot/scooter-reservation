import {
  useRef,
  useState,
  useLayoutEffect,
  MouseEvent,
  TouchEvent,
} from "react";

export const useSlider = () => {
  const carouselRef = useRef<null | HTMLDivElement>(null);
  const arrowRightRef = useRef<null | HTMLDivElement>(null);
  const arrowLeftRef = useRef<null | HTMLDivElement>(null);

  const [isDragStart, setIsDragStart] = useState(false);
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

    // scroll when moving mouse
    setPositionDiff(event.pageX - prevPageX);
    carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
  };

  const handleMouseUp = () => {
    setIsDragStart(false);
    if (!isDragStart) return;

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
    if (!isDragStart) {
      return;
    }
    setPositionDiff(event.touches[0].pageX - prevPageX);
    carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
  };

  function scrollRightBy(value: number): void {
    if (carouselRef.current) carouselRef.current.scrollLeft += value;
  }

  function scrollLeftBy(value: number): void {
    if (carouselRef.current) carouselRef.current.scrollLeft -= value;
  }

  useLayoutEffect(() => {
    showHideIcons();
  });

  return {
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
  };
};
