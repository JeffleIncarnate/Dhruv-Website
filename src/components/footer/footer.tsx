import "./footer.css";

import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  let navigate = useNavigate();

  return (
    <footer>
      <h3
        onClick={() => {
          navigate("/");
        }}
      >
        Dhruv Rayat™️
      </h3>
      <div className="footer_links">
        <Link
          onClick={() => {
            window.scrollBy(0, -100000);
          }}
          to="/games"
        >
          Games
        </Link>
        <Link
          onClick={() => {
            window.scrollBy(0, -100000);
          }}
          to="/projects"
        >
          Projects
        </Link>
        <Link
          onClick={() => {
            window.scrollBy(0, -100000);
          }}
          to="/about"
        >
          About
        </Link>
        <button
          type="button"
          onClick={() => {
            navigate("/contact");
            window.scrollBy(0, -100000);
          }}
        >
          Contact
        </button>
      </div>
      <div className="DHR__Footer-Socials">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/dhruv_rayat/"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://twitter.com/RayatDhruv"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/Dhruv-Rayat1"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </footer>
  );
}
