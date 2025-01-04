import { createFileRoute, useNavigate } from "@tanstack/react-router";

import { ProjectHeader } from "../../components/projectHeader";

import { ProjectContext } from "../../core/context/project";
import { Projects } from "../../core/data/projects";

export const Route = createFileRoute("/project/$project")({
  component: () => (
    <Provider>
      <ProjectHeader />
    </Provider>
  ),
});

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { project } = Route.useParams();
  const navigate = useNavigate();

  const doesProjectExist =
    Projects.filter((x) => {
      return (
        x.projectName ===
        project
          .split("-")
          .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
          .join(" ")
      );
    }).length !== 0;

  if (!doesProjectExist) {
    navigate({
      to: `/`,
    });
  }

  return (
    <ProjectContext.Provider value={project}>
      {children}
    </ProjectContext.Provider>
  );
};
