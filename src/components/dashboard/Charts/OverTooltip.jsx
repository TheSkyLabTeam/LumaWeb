import React, { useState, useEffect } from "react";

export const OverTooltip = ({ active, payload, label }) => {
  const colors = [
    "#3b82f6",
    "#22c55e",
    "#eab308",
    "#ef4444",
    "#f97316",
    "#6b7280"
  ];

  const [selectedColor, setSelectedColor] = useState(colors[5]);

  useEffect(
    () => {
      switch (label) {
        case "EIT171":
          setSelectedColor(colors[0]);
          break;
        case "EIT195":
          setSelectedColor(colors[1]);
          break;
        case "EIT284":
          setSelectedColor(colors[2]);
          break;
        case "EIT304":
          setSelectedColor(colors[3]);
          break;
        case "HMIIGR":
          setSelectedColor(colors[4]);
          break;
        case "HMIMAG":
          setSelectedColor(colors[5]);
          break;
        default:
          setSelectedColor(colors[5]);
      }
    },
    [label]
  );

  if (active && payload.length) {
    return (
      <div className="bg-surface p-3">
        <div className="flex flex-row items-center gap-3">
          <div
            id="labelColorIndicator"
            className="w-4 h-4"
            style={{ backgroundColor: selectedColor }}
          />
          <span className="font-clash font-semibold">
            {label}
          </span>
        </div>
        {payload.map((item, index) =>
          <div key={index}>
            <span className="font-archivo">
              {item.name}: {item.value.toFixed(4)}
            </span>
          </div>
        )}
      </div>
    );
  }

  return null;
};
