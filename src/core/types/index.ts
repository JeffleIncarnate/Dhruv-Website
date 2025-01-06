type TProject = {
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

type TProjectOmitted = Omit<TProject, "type" | "id">;

export type { TProject, TProjectOmitted };
