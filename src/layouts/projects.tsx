import NavBar from "../components/navbar/navbar";
import SplashOthers from "../components/splash/splashOthers/splashOthers";
import ProjectsMain from "../components/projectsMain/projectsmain";
import Corners from "../components/corners/corners";
import Footer from "../components/footer/footer";

import { useEffect } from "react";

export default function ProjectsPage() {
  useEffect(() => {
    document.title = "Projects | Dhruv Rayat";
  }, []);

  return (
    <>
      <Corners />
      <NavBar />
      <SplashOthers h1="Projects" p="Some of my best projects" />
      <ProjectsMain />
      <Footer />
    </>
  );
}
