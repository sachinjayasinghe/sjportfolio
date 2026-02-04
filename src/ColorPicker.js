import React from 'react';
import './ColorPicker.css';
import themePresets from './themePresets';

function ColorPicker({ currentColor, onColorChange }) {
  return (
    <div className="color-picker">
      <div className="color-picker-label">Theme Color</div>
      <div className="color-options">
        {Object.keys(themePresets).map((colorKey) => (
          <button
            key={colorKey}
            className={`color-option ${currentColor === colorKey ? 'active' : ''}`}
            onClick={() => onColorChange(colorKey)}
            title={themePresets[colorKey].name}
          >
            {themePresets[colorKey].emoji}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;