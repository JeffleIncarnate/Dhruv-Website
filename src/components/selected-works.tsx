import { Project } from "./project";

import { Projects } from "../core/data/projects";
import { TProjectOmitted } from "../core/types";

export const SelectedWorks = () => {
  return (
    <div
      className="mx-auto flex w-[90%] flex-col items-center justify-center gap-8"
      id="selected-works"
    >
      <h2 className="flex flex-col items-center gap-4 font-header text-6xl font-bold uppercase after:h-2 after:w-[120%] after:bg-white after:content-['']">
        Selected Works
      </h2>

      <div className="w-full space-y-24">{DisplayWorks(Projects)}</div>
    </div>
  );
};

const DisplayWorks = (projects: TProjectOmitted[]) => {
  return (
    <>
      {projects.map((project, idx) => {
        return (
          <Project
            id={project.projectName
              .split(" ")
              .map((x) => x.toLowerCase())
              .join("-")}
            projectName={project.projectName}
            description={project.description}
            imageData={project.imageData}
            links={project.links}
            tags={project.tags}
            type={idx % 2 == 0 ? "left" : "right"}
            key={project.projectName}
          />
        );
      })}
    </>
  );
};
