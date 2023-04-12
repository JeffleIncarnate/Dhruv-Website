import SplashHome from "../components/splash/splashHome/splashHome";
import AnimatedPage from "../components/transition/transition";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home | Dhruv Rayat";
  }, []);

  return (
    <>
      <AnimatedPage>
        <SplashHome />
      </AnimatedPage>
    </>
  );
}
