import { useState } from "react";
import { motion } from "motion/react";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Dropdown = ({
  title,
  dropdownContents,
}: {
  title: string;
  dropdownContents: string;
}) => {
  const [descriptionOpen, setDescriptionOpen] = useState(false);

  return (
    <motion.div
      className="border-b-4 py-2 first:border-t-4"
      animate={descriptionOpen ? "open" : "closed"}
      initial={false}
    >
      <div
        className="flex items-center justify-between"
        onClick={() => {
          setDescriptionOpen((prev) => !prev);
        }}
      >
        <h2 className="cursor-pointer select-none font-header text-4xl font-bold uppercase">
          {title}
        </h2>

        <motion.div
          key={`dropdown_${title}`}
          variants={{
            open: {
              rotate: "180deg",
            },
            closed: {
              rotate: "0deg",
            },
          }}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </motion.div>
      </div>

      <motion.div
        key={`dropdown_text_${title}`}
        className="overflow-y-hidden"
        variants={{
          open: {
            height: "auto",
          },
          closed: {
            height: "0",
          },
        }}
      >
        {dropdownContents}
      </motion.div>
    </motion.div>
  );
};
