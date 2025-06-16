import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { Logo } from "../assets";
import { Link, useNavigate } from "@tanstack/react-router";

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [navOpen]);

  const navigate = useNavigate();

  return (
    <>
      <nav className="absolute left-8 right-8 top-8 flex w-[calc(100vw-4rem)] cursor-pointer justify-between">
        <div
          className="aspect-square w-20"
          onClick={() => {
            navigate({
              to: "/",
            });
          }}
        >
          <img src={Logo} alt="Dhruv Rayat Logo" className="h-full w-full" />
        </div>

        <div
          className="z-20 flex aspect-square w-20 cursor-pointer items-center justify-center rounded-xl bg-maroon"
          onClick={() => {
            setNavOpen((prev) => !prev);
          }}
        >
          <motion.div
            className="flex w-3/5 flex-col items-end justify-center gap-[6px]"
            animate={navOpen ? "open" : "closed"}
          >
            <motion.div
              key={"nav_1"}
              className="relative h-[7px] w-full bg-white"
              variants={{
                open: {
                  rotate: "-45deg",
                  top: "0.8rem",
                },
                closed: {
                  rotate: "0deg",
                },
              }}
            ></motion.div>
            <motion.div
              key={"nav_2"}
              className="relative h-[7px] w-3/5 bg-white"
              variants={{
                open: {
                  width: "0px",
                },
                closed: {
                  width: "60%",
                },
              }}
            ></motion.div>
            <motion.div
              key={"nav_3"}
              className="relative h-[7px] w-full bg-white"
              variants={{
                open: {
                  rotate: "45deg",
                  bottom: "0.8rem",
                },
                closed: {
                  rotate: "0deg",
                },
              }}
            ></motion.div>
          </motion.div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          initial={false}
          className="absolute bottom-4 right-4 top-4 z-10 flex h-[calc(100lvh-2rem)] w-2/6 justify-end overflow-x-hidden"
          animate={navOpen ? "open" : "closed"}
        >
          <motion.div
            key={"open_nav"}
            className="flex h-full items-center rounded-3xl bg-purple"
            variants={{
              open: {
                width: "100%",
                opacity: 1,
                visibility: "visible",
              },
              closed: {
                width: "0px",
                opacity: 0,
                visibility: "hidden",
              },
            }}
          >
            <div className="ml-8 flex flex-col space-y-8 font-header text-6xl font-bold">
              <Link
                to="/"
                onClick={() => {
                  setNavOpen(false);
                }}
              >
                Home
              </Link>
              <Link
                to="/"
                hash="about"
                onClick={() => {
                  setNavOpen(false);
                }}
              >
                About
              </Link>
              <Link
                to="/"
                hash="selected-works"
                onClick={() => {
                  setNavOpen(false);
                }}
              >
                Selected Works
              </Link>
              <Link
                to="/"
                hash="contact"
                onClick={() => {
                  setNavOpen(false);
                }}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
