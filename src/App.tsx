// React
import { Route, Routes, useLocation } from "react-router-dom";

// Exit animation
import { AnimatePresence } from "framer-motion";

// Layouts
import HomePage from "./layouts/home";
import ProjectsPage from "./layouts/projects";
import GamesPage from "./layouts/games";
import AboutPage from "./layouts/about";
import ContactPage from "./layouts/contact";

export default function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
