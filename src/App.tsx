import { Route, Routes } from "react-router-dom";

// Layouts
import HomePage from "./layouts/home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<h1>Games</h1>} />
      </Routes>
    </>
  );
}
