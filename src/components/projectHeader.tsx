import { useContext } from "react";

import { ProjectContext } from "../core/context/project";

export const ProjectHeader = () => {
  const project = useContext(ProjectContext);

  if (!project) {
    throw new Error("⚠️ project is null from <ProjectHeader />");
  }

  console.log(project);

  return <div></div>;
};
