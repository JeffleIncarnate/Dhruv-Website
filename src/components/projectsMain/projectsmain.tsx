import "./projectsmain.css";

import DhruvBanking from "../../assets/Projects/DhruvBanking.png";

import ProjectsShowAndGameShow from "../projectsShowAndGameShow/projectsShowAndGameShow";

export default function ProjectsMain(props: any) {
  return (
    <main>
      <ProjectsShowAndGameShow img={DhruvBanking} number="01" />
    </main>
  );
}
