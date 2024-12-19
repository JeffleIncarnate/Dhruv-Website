type Project = {
  projectName: string;
  description: string;
  imageData: {
    img: string;
    alt: string;
  };
  tags: string[];
  links: {
    github?: string;
    link?: string;
  };
  type: "left" | "right";
};

type ProjectOmitted = Omit<Project, "type">;

export type { Project, ProjectOmitted };
