import NavBar from "../components/navbar/navbar";
import SplashOthers from "../components/splash/splashOthers/splashOthers";
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact | Dhruv Rayat";
  }, []);

  return (
    <>
      <NavBar />
      <SplashOthers h1="Contact" />
    </>
  );
}
