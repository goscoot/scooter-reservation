import { useState, useEffect } from "react";

type WindowSizes = {
  width: number;
  height: number;
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSizes>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
