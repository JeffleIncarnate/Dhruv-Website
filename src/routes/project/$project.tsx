import { createFileRoute } from "@tanstack/react-router";

import { ProjectHeader } from "../../components/projectHeader";

import { ProjectContext } from "../../core/context/project";

export const Route = createFileRoute("/project/$project")({
  component: () => (
    <Provider>
      <ProjectHeader />
    </Provider>
  ),
});

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { project } = Route.useParams();

  return (
    <ProjectContext.Provider value={project}>
      {children}
    </ProjectContext.Provider>
  );
};
