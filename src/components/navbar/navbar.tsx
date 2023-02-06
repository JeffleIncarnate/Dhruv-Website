import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

// Image
import LogoLight from "../../assets/Logo_Light.png";
import LogoDark from "../../assets/Logo_Dark.png";

// Components
import Theme from "../theme/theme";

export default function NavBar() {
  const [isNavShown, setIsNavShown] = useState(false);

  return (
    <>
      <Theme />
      <nav className="DHR__NavBar">
        <Link to="/">
          {localStorage.getItem("theme") == "dark" ? (
            <img id="DHR__NavBar-Logo" src={LogoLight} alt="Dhruv Rayat Logo" />
          ) : (
            <img id="DHR__NavBar-Logo" src={LogoDark} alt="Dhruv Rayat Logo" />
          )}
        </Link>

        <div className="DHR__NavBar-Social_Links">
          <ul>
            <li>
              <a href="https://github.com/Dhruv-Rayat1" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dhruv_rayat/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/RayatDhruv" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>

        <div
          className="DHR__NavBar-Bars"
          onClick={() => {
            let bar1 = document.getElementById("DHR__NavBar-Bars_Top");
            let bar2 = document.getElementById("DHR__NavBar-Bars_Middle");
            let bar3 = document.getElementById("DHR__NavBar-Bars_Bottom");

            let entireNav = document.getElementById("DHR__NavBar-OnClick");

            if (isNavShown) {
              entireNav!.style.width = "0vw";
              // Bar 1
              bar1!.style.transform = "rotate(0deg)";
              bar1!.style.top = "0rem";

              // Bar 2
              bar2!.style.width = "65%";

              // Bar 3
              bar3!.style.transform = "rotate(0deg)";
              bar3!.style.bottom = "0rem";
              setIsNavShown(false);
            } else {
              entireNav!.style.width = "100vw";

              // Bar 1
              bar1!.style.transform = "rotate(-45deg)";
              bar1!.style.top = "1.25rem";

              // Bar 2
              bar2!.style.width = "0%";

              // Bar 3
              bar3!.style.transform = "rotate(45deg)";
              bar3!.style.bottom = "1.25rem";
              setIsNavShown(true);
            }
          }}
        >
          <div id="DHR__NavBar-Bars_Top"></div>
          <div id="DHR__NavBar-Bars_Middle"></div>
          <div id="DHR__NavBar-Bars_Bottom"></div>
        </div>
      </nav>

      <div id="DHR__NavBar-OnClick">
        <ul>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
