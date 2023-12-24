"use client";
import React, { useState } from "react";

const Volt = () => {
  const [active, setActive] = useState<{ [key: string]: boolean }>({});
  const handleClick = (label: string) => {
    setActive(prev => ({ ...prev, [label]: !prev[label] }));
  };

  const labels = ["LV", "MV", "HV", "EV"];

  return (
    <div className="flex gap-4 mb-4">
      {labels.map((label) => (
        <button
          key={label}
          onClick={() => handleClick(label)}
          className={`w-10 h-10 border p-2 ${
            active[label] ? "border-black" : "opacity-50"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Volt;