import { motion } from "motion/react";
import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [prevY, setPrevY] = useState(0);

  const [y, setY] = useState(0);
  const [x, setX] = useState(0);

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setY(ev.clientY + window.scrollY);
      setX(ev.clientX);
      setPrevY(ev.clientY);
    };

    const scrollData = (e) => {
      setY(prevY + window.scrollY);

      setPrevY(prevY);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("scroll", scrollData);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("scroll", scrollData);
    };
  }, [y, x, prevY]);

  return { x, y };
};

export const FollowMouse = () => {
  const mousePosition = useMousePosition();

  return (
    <motion.div
      className="pointer-events-none absolute h-12 w-12 rounded-full border-4 border-solid border-white"
      transition={{
        type: "spring",
      }}
      animate={{
        top: mousePosition.y - 24,
        left: mousePosition.x - 24,
      }}
    ></motion.div>
  );
};
