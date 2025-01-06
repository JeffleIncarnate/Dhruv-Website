import { createFileRoute } from "@tanstack/react-router";

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

  const doesProjectExist = Projects.filter((x) => {
    return (
      x.projectName.toLowerCase() ===
      project
        .split("-")
        .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
        .map((x) => x.toLowerCase())
        .join(" ")
    );
  })[0];

  return (
    <ProjectContext.Provider value={doesProjectExist}>
      {children}
    </ProjectContext.Provider>
  );
};
