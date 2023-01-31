import "./splashHome.css";

// Components
import NavBar from "../../navbar/navbar";
import Corners from "../../corners/corners";
import TitleHome from "./titleHome/titleHome";

export default function SplashHome() {
  return (
    <>
      <div className="DHR__SplashHome"></div>

      <header>
        <Corners />
        <NavBar />
        <TitleHome />
      </header>
    </>
  );
}
