import "./projectsmain.css";

import DhruvBanking from "../../assets/Projects/DhruvBanking.png";
import DhruvData from "../../assets/Projects/DhruvData.png";
import EviroClubWebsite from "../../assets/Projects/EviroClubWebsite.png";
import HavenBot from "../../assets/Projects/HavenBot.png";
import OJCBadgesWebsite from "../../assets/Projects/OJCBadgesWebsite.png";

import ProjectsShowAndGameShow from "../projectsShowAndGameShow/projectsShowAndGameShow";

export default function ProjectsMain(props: any) {
  return (
    <main>
      <ProjectsShowAndGameShow
        img={DhruvBanking}
        number="01"
        description="Dhruv Banking is a new and upcoming bank"
        redirect="https://banking.dhruvrayat.com/"
        align="left"
      />

      <hr />

      <ProjectsShowAndGameShow
        img={DhruvData}
        number="02"
        description="Dhruv Data is my own relation database written in C# and it compatable only with C# projects"
        redirect="https://github.com/Dhruv-Rayat1/Database"
        align="right"
      />

      <hr />

      <ProjectsShowAndGameShow
        img={EviroClubWebsite}
        number="03"
        description="This is a website I made for a club for my school"
        redirect="https://enviro-club.vercel.app/"
        align="left"
      />

      <hr />

      <ProjectsShowAndGameShow
        img={HavenBot}
        number="04"
        description="This is my first actually good Discord bot"
        redirect="https://github.com/Dhruv-Rayat1/Haven-Bot"
        align="right"
      />

      <hr />

      <ProjectsShowAndGameShow
        img={OJCBadgesWebsite}
        number="05"
        description="This is a website I made to make badges at OJC easier"
        redirect="https://ojc-badges.netlify.app/"
        align="left"
      />
    </main>
  );
}
