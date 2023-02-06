import NavBar from "../components/navbar/navbar";
import SplashOthers from "../components/splash/splashOthers/splashOthers";
import Corners from "../components/corners/corners";
import GamesMain from "../components/gamesMain/gamesmain";

import { useEffect } from "react";

export default function GamesPage() {
  useEffect(() => {
    document.title = "Games | Dhruv Rayat";
  }, []);
  return (
    <>
      <Corners />
      <NavBar />
      <SplashOthers h1="Games" />
      <GamesMain />
    </>
  );
}
