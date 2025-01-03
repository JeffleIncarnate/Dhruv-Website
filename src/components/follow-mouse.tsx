import { motion } from "motion/react";
import { useState, useEffect, useLayoutEffect } from "react";

const useMousePosition = () => {
  const [prevY, setPrevY] = useState(0);
  const [y, setY] = useState(0);
  const [x, setX] = useState(0);

  // UseEffect to determine the position of the lil' div that follows the mouse
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setY(e.clientY + window.scrollY);
      setX(e.clientX);
      setPrevY(e.clientY);
    };

    const scrollData = () => {
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

  // Special use effect to know if the follow mouse is colliding with a project div.
  // If it does happen. Then a spicy animation will play!
  useEffect(() => {
    window.addEventListener("load", () => {
      const projectDivs = document.querySelectorAll("#project");

      const firstDiv = projectDivs[0];

      console.log(firstDiv.scrollTop);
    });
  }, []);

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
