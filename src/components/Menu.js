import React from "react";
import "./Menu.css";

const Menu = ({
  setLineColor,
  setLineWidth,
  setLineOpacity,
  undoHandler,
  redoHandler,
}) => {
  return (
    <div className="Menu">
      <label>Brush Color </label>
      <input
        type="color"
        onChange={(e) => {
          setLineColor(e.target.value);
        }}
      />
      <label>Brush Width </label>
      <input
        type="range"
        min="3"
        max="20"
        defaultValue={5}
        onChange={(e) => {
          setLineWidth(e.target.value);
        }}
      />
      <label>Brush Opacity</label>
      <input
        type="range"
        min="1"
        max="100"
        defaultValue={10}
        onChange={(e) => {
          setLineOpacity(e.target.value / 100);
        }}
      />

      <button onClick={undoHandler}>undo</button>
      <button onClick={redoHandler}>redo</button>
    </div>
  );
};

export default Menu;
