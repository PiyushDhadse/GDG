import React, { useState } from "react";
import "./header.css";
import gdgLogo from "./assets/gdg-logo.png";
import ThemeButton from "./themebutton";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src={gdgLogo} alt="GDG Logo" className="logo-img" />
          <span style={{ fontSize: "large", fontWeight: "400" }}>
            GDG RCOEM
          </span>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#alumni">Alumni</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <ThemeButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;