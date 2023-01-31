import "./navbar.css";

// Image
import Logo from "../../assets/Logo_Light.png";

export default function NavBar() {
  return (
    <nav className="DHR__NavBar">
      <a href="/">
        <img className="DHR__NavBar-Logo" src={Logo} alt="Dhruv Rayat Logo" />
      </a>

      <div className="DHR__NavBar-Bars">
        <div className="DHR__NavBar-Bars_Top"></div>
        <div className="DHR__NavBar-Bars_Middle"></div>
        <div className="DHR__NavBar-Bars_Bottom"></div>
      </div>
    </nav>
  );
}
