import "./gamesmain.css";

import Pogformer from "../../assets/Games/Pogformer.png";
import FourDPhysics from "../../assets/Games/4DPhysics.png";

import ProjectsShowAndGameShow from "../projectsShowAndGameShow/projectsShowAndGameShow";

export default function GamesMain(props: any) {
  return (
    <main>
      <ProjectsShowAndGameShow
        img={Pogformer}
        number="01"
        description="Welcome to Pogformer, a Mario like platformer but with cubes."
        redirect="https://dhruv-rayat.itch.io/pogformer"
        align="left"
      />

      <hr />

      <ProjectsShowAndGameShow
        img={FourDPhysics}
        number="02"
        description="This was my latest game, 4D Physics. It uses the 4th dimention, time!"
        redirect="https://dhruv-rayat.itch.io/4d-physics-game"
        align="right"
      />
    </main>
  );
}
