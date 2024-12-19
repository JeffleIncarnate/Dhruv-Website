import { Project } from "./project";

import { ByteClass, DhruvBanking, DhruvSocial } from "../assets";
import type { ProjectOmitted } from "../core/types";

const Projects: ProjectOmitted[] = [
  {
    projectName: "Dhruv Banking",
    description:
      "Dhruv Banking, the future of banking.  This  Full stack web app was a School Level 2 Assessment",
    imageData: {
      img: DhruvBanking,
      alt: "Dhruv Banking",
    },
    links: {
      github: "https://github.com/Dhruv-Banking",
    },
    tags: [
      "react",
      "docker",
      "redis",
      "postgresql",
      "authentication",
      "mailing",
      "css",
    ],
  },
  {
    projectName: "Dhruv Social",
    description: "Dhruv’s happening? Join Dhruv Social Today!",
    imageData: {
      img: DhruvSocial,
      alt: "Dhruv Social",
    },
    links: {
      github: "https://github.com/Dhruv-Social",
    },
    tags: [
      "react",
      "express",
      "postgresql",
      "authentication",
      "mailing",
      "css",
    ],
  },
  {
    projectName: "ByteClass",
    description: "Hate google classroom? Well I've got the solution for you!",
    imageData: {
      img: ByteClass,
      alt: "ByteClass",
    },
    links: {
      github: "https://github.com/Byte-Class",
    },
    tags: [
      "nextjs",
      "trpc",
      "postgresql",
      "redis",
      "google",
      "classroom",
      "typescript",
    ],
  },
];

export const SelectedWorks = () => {
  return (
    <div className="mx-auto flex w-[90%] flex-col items-center justify-center gap-8">
      <h2 className="flex flex-col items-center gap-4 font-header text-6xl font-bold uppercase after:h-2 after:w-[120%] after:bg-white after:content-['']">
        Selected Works
      </h2>

      <div className="w-full space-y-24">{DisplayWorks(Projects)}</div>
    </div>
  );
};

const DisplayWorks = (projects: ProjectOmitted[]) => {
  return (
    <>
      {projects.map((project, idx) => {
        return (
          <Project
            projectName={project.projectName}
            description={project.description}
            imageData={project.imageData}
            links={project.links}
            tags={project.tags}
            type={idx % 2 == 0 ? "left" : "right"}
          />
        );
      })}
    </>
  );
};
