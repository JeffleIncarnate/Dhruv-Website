import { ByteClass, DhruvBanking, DhruvSocial } from "../../assets";
import { TProjectOmitted } from "../types";

export const Projects: TProjectOmitted[] = [
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
