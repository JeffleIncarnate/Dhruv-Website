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
  id: string;
};

type ProjectOmitted = Omit<Project, "type" | "id">;

export type { Project, ProjectOmitted };
