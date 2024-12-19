import { motion } from "motion/react";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

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
    >
      <div
        className="flex items-center justify-between"
        onClick={() => {
          setDescriptionOpen((prev) => !prev);
        }}
      >
        <h2 className="font-header text-4xl font-bold uppercase">{title}</h2>

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
          <ChevronDown />
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
