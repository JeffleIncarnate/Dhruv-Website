import { createContext } from "react";
import { TProjectOmitted } from "../types";

export const ProjectContext = createContext<null | TProjectOmitted>(null);
