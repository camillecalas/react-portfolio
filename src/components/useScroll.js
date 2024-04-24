import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [view, controls]);

  return [element, controls];
};

export default useScroll;
