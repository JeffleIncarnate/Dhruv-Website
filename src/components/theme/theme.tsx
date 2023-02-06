import "./theme.css";

import { useEffect, useState } from "react";

import LogoLight from "../../assets/Logo_Light.png";
import LogoDark from "../../assets/Logo_Dark.png";

export default function Theme(props: any) {
  const [isThemeDark, setIsThemeDark] = useState(true);

  return (
    <>
      <div
        className="DHR__Theme-Wrapper"
        onClick={() => {
          setIsThemeDark(!isThemeDark);
          if (isThemeDark) {
            window.dispatchEvent(new Event("storage"));
            localStorage.setItem("theme", "light");
            document.documentElement.style.setProperty("--white", "#1c344d");
            document.documentElement.style.setProperty("--blue", "#FAF9F6");
            const img: HTMLImageElement | any =
              document.getElementById("DHR__NavBar-Logo")!;
            img.src = LogoDark;
          } else {
            window.dispatchEvent(new Event("storage"));
            document.documentElement.style.setProperty("--white", "#FAF9F6");
            document.documentElement.style.setProperty("--blue", "#1c344d");
            localStorage.setItem("theme", "dark");
            const img: HTMLImageElement | any =
              document.getElementById("DHR__NavBar-Logo")!;
            img.src = LogoLight;
          }
        }}
      >
        {isThemeDark ? (
          <i className="fa-solid fa-sun"></i>
        ) : (
          <i className="fa-solid fa-moon"></i>
        )}
      </div>
    </>
  );
}
