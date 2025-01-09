import { useContext } from "react";

import { ProjectContext } from "../core/context/project";

export const ProjectHeader = () => {
  const project = useContext(ProjectContext);

  if (!project) {
    throw new Error("⚠️ project is null from <ProjectHeader />");
  }

  console.log(project);

  return (
    <div>
      <div>
        <h1>{project.projectName}</h1>
        <p>{}</p>

        {/* Breadcrumbs */}
        <div>
          <p>Home/Project/</p>
        </div>
      </div>

      <div>
        <img src={project.imageData.img} alt={project.imageData.alt} />
      </div>
    </div>
  );
};
