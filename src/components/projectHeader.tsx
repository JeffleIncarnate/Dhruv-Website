import { useContext } from "react";
import { ProjectContext } from "../core/context/project";

export const ProjectHeader = () => {
  const project = useContext(ProjectContext);

  return <div>{project}</div>;
};
