import NavBar from "../components/navbar/navbar";
import SplashOthers from "../components/splash/splashOthers/splashOthers";
import { useEffect } from "react";

export default function GamesPage() {
  useEffect(() => {
    document.title = "Games | Dhruv Rayat";
  }, []);
  return (
    <>
      <NavBar />
      <SplashOthers h1="Games" />
    </>
  );
}
