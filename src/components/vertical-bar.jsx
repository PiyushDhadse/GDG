import React from "react";
import "./vertical-bar.css"; // Import the CSS file for additional styles if needed
export default function BlueStrip() {
  return (
    <div
      style={{
        width: "14px",
        height: "264px",
        backgroundColor: "#3B82F6", // Tailwind blue-500 hex
        borderTopLeftRadius: "9999px",
        borderBottomLeftRadius: "9999px",
      }}
    ></div>
  );
}