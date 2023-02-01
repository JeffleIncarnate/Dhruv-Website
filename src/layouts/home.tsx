import SplashHome from "../components/splash/splashHome/splashHome";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home | Dhruv Rayat";
  }, []);

  return (
    <>
      <SplashHome />
    </>
  );
}
