import NavBar from "../components/navbar/navbar";
import SplashOthers from "../components/splash/splashOthers/splashOthers";
import ProjectsMain from "../components/projectsMain/projectsmain";

import { useEffect } from "react";

export default function ProjectsPage() {
  useEffect(() => {
    document.title = "Projects | Dhruv Rayat";
  }, []);

  return (
    <>
      <NavBar />
      <SplashOthers h1="Projects" p="Some of my best projects" />
      <ProjectsMain />
    </>
  );
}
