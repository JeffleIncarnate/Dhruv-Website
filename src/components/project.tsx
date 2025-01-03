import { useNavigate } from "@tanstack/react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

import type { Project as TProj } from "../core/types";

export const Project = ({
  id,
  projectName,
  description,
  imageData,
  tags,
  links,
  type,
}: TProj) => {
  return (
    <div
      className="flex w-full gap-16"
      style={{
        flexDirection: type === "left" ? "row" : "row-reverse",
      }}
    >
      <div className="w-[45%] rounded-3xl">
        <img
          className="rounded-[inherit]"
          src={imageData.img}
          alt={imageData.alt}
        />
      </div>

      <div
        className="relative flex w-[55%] flex-col justify-center gap-4"
        style={{
          textAlign: type === "left" ? "left" : "right",
          alignItems: type === "left" ? "flex-start" : "flex-end",
        }}
      >
        <h3 className="font-header text-6xl font-bold capitalize">
          {projectName}
        </h3>
        <p>{description} </p>

        <div className="flex gap-4 uppercase">
          {tags.map((tag) => {
            return (
              <span
                key={`tag_${tag}_project_name`}
                className="rounded-full border-2 border-solid border-white px-3 font-bold"
              >
                {tag}
              </span>
            );
          })}
        </div>

        <div className="absolute bottom-0 flex gap-4 text-2xl">
          {links.github && (
            <a href={links.github} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
          {links.link && (
            <a href={links.github} target="_blank">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          )}
        </div>

        <div className="flex gap-2">
          <Button id={id} text="Learn More" icon={faArrowUpRightFromSquare} />
        </div>
      </div>
    </div>
  );
};

const Button = ({
  id,
  text,
  icon,
}: {
  id: string;
  text: string;
  icon: IconDefinition;
}) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="flex items-center justify-center gap-2"
        onClick={() => {
          navigate({
            to: `/project/${id}`,
          });
        }}
      >
        {text} <FontAwesomeIcon icon={icon} />
      </button>
    </>
  );
};
