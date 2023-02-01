import { Route, Routes } from "react-router-dom";

// Layouts
import HomePage from "./layouts/home";
import ProjectsPage from "./layouts/projects";
import GamesPage from "./layouts/games";
import AboutPage from "./layouts/about";
import ContactPage from "./layouts/contact";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}
