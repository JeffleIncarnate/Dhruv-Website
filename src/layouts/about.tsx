import NavBar from "../components/navbar/navbar";
import SplashOthers from "../components/splash/splashOthers/splashOthers";
import Corners from "../components/corners/corners";
import AboutMain from "../components/aboutMain/aboutMain";
import Footer from "../components/footer/footer";
import AnimatedPage from "../components/transition/transition";

import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Me | Dhruv Rayat";
  }, []);

  return (
    <>
      <AnimatedPage>
        <Corners />
        <NavBar />
        <SplashOthers h1="About Me" />
        <AboutMain />
        <Footer />
      </AnimatedPage>
    </>
  );
}
