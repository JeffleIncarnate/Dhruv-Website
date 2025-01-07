import { createFileRoute } from "@tanstack/react-router";

import { ProjectHeader } from "../../components/projectHeader";

import { ProjectContext } from "../../core/context/project";
import { Projects } from "../../core/data/projects";
import { TProjectOmitted } from "../../core/types";
import { useEffect } from "react";

const Project = () => {
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

  useEffect(() => {
    document.title = `${doesProjectExist.projectName} | Dhruv Rayat`;
  }, [doesProjectExist.projectName]);

  return (
    <Provider data={doesProjectExist}>
      <ProjectHeader />
    </Provider>
  );
};

const Provider = ({
  children,
  data,
}: {
  children: React.ReactNode;
  data: TProjectOmitted;
}) => {
  return (
    <ProjectContext.Provider value={data}>{children}</ProjectContext.Provider>
  );
};

export const Route = createFileRoute("/project/$project")({
  component: Project,
});
