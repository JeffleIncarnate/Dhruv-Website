import NavBar from "../components/navbar/navbar";
import SplashOthers from "../components/splash/splashOthers/splashOthers";
import Corners from "../components/corners/corners";

import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Me | Dhruv Rayat";
  }, []);

  return (
    <>
      <Corners />
      <NavBar />
      <SplashOthers h1="About Me" />
    </>
  );
}
