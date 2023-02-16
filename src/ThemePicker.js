import "./ThemePicker.css";
// import localforage from "localforage";
import React, { useState } from "react";

export const ThemePicker = ({ theme, setTheme }) => {
  const [showTheme, setShowTheme] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <button className="theme" onClick={() => setShowTheme(!showTheme)} />
      {showTheme && (
        <div className="colors">
          {[
            [`#591cbf`],
            [`#F6839C`, `#54457F`],
            [`#150811`],
            [`#380036`],
            [`#E4572E`],
            [`#B0C0BC`, `#413620`],
            [`#D3FAC7`, `#413620`],
            [`#EE6352`, `#2C0703`],
            [`#DFC79F`, `#413620`],
            [`#75B8C8`, `#413620`]
          ].map(([color, contrast]) => (
            <button
              key={color}
              className="color"
              style={{
                background: color,
                ...(color === theme[0] ? { opacity: 1 } : {})
              }}
              onClick={() => {
                setTheme([color, contrast]);
                setShowTheme(false);
                // localforage.setItem(`dungeon23-theme`, [color, contrast]);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
