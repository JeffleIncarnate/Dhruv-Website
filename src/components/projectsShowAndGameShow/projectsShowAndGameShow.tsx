import "./projectsShowAndGameShow.css";

import { useNavigate } from "react-router-dom";

export default function ProjectsShowAndGameShow(props: any) {
  let navigate = useNavigate();

  return (
    <div
      className={`projects_${props.align}`}
      onClick={() => {
        window.open(props.redirect, "_blank", "noreferrer");
      }}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url(${props.img})`,
      }}
    >
      <h2>{props.number}</h2>
      <p>{props.description}</p>
    </div>
  );
}
