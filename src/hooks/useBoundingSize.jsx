import { useEffect, useState } from "react";

const useBoundingSize = (ref) => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setSize({ width: ref.current?.clientWidth, height: ref.current?.clientHeight });
  }, [ref]);

  return size;
};

export default useBoundingSize;
