import NavBar from "../components/navbar/navbar";
import SplashOthers from "../components/splash/splashOthers/splashOthers";
import Corners from "../components/corners/corners";

import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact | Dhruv Rayat";
  }, []);

  return (
    <>
      <Corners />
      <NavBar />
      <SplashOthers h1="Contact" />
    </>
  );
}
