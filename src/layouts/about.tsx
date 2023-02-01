import NavBar from "../components/navbar/navbar";
import SplashOthers from "../components/splash/splashOthers/splashOthers";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Me | Dhruv Rayat";
  }, []);

  return (
    <>
      <NavBar />
      <SplashOthers h1="About Me" />
    </>
  );
}
