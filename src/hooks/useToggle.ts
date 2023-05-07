import { useCallback, useState } from "react";

const useToggle = (): [boolean, () => void] => {
  const [value, setValue] = useState(false);

  const toggle = useCallback(() => {
    setValue((prevState) => !prevState);
  }, []);

  return [value, toggle];
};

export default useToggle;
