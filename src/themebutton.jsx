import React, { useState } from "react";
import "./themebutton.css";
import Sun from "./assets/sun-icon.png";
import Moon from "./assets/moon-icon.png"; // Assuming you also have a moon icon

const ThemeButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="theme-button-container">
      <label className="switch">
        <input 
          type="checkbox" 
          checked={isChecked}
          onChange={handleToggle}
        />
        <span className="slider round">
          <img 
            src={isChecked ? Moon : Sun} 
            alt={isChecked ? "Moon Icon" : "Sun Icon"} 
            className="theme-icon" 
          />
        </span>
      </label>
    </div>
  );
};

export default ThemeButton;