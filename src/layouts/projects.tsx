import NavBar from "../components/navbar/navbar";
import SplashOthers from "../components/splash/splashOthers/splashOthers";
import { useEffect } from "react";

export default function ProjectsPage() {
  useEffect(() => {
    document.title = "Projects | Dhruv Rayat";
  }, []);

  return (
    <>
      <NavBar />
      <SplashOthers h1="Projects" p="Some of my best projects" />
    </>
  );
}
