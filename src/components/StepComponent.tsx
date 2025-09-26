'use client';
import React, { useState } from 'react';

const StepComponent = ({
  stepNumber,
  label,
  leftMargin,
  barWidth = "500px", // Puedes ajustar este valor
}: { stepNumber: number; label: string; leftMargin: number; barWidth?: string }) => {

  const [currentMargin, setCurrentMargin] = useState(leftMargin);

  const handleMouseEnter = () => {
    setCurrentMargin(leftMargin + 2); // Aumenta el margen al 2%
  };

  const handleMouseLeave = () => {
    setCurrentMargin(leftMargin); // Regresa el margen a su valor original
  };

  return (
    <div
      className="flex items-center relative z-10 transition-all duration-300 mb-4 cursor-pointer"
      style={{
        marginLeft: `${currentMargin}%`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Círculo del número */}
      <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 border-4 border-[#3270B6] bg-white rounded-full text-[#3270B6] text-2xl md:text-3xl font-bold shadow-lg z-20" style={{ flexShrink: 0 }}>
        {stepNumber}
      </div>
      {/* Línea horizontal */}
      <div
        className="ml-[-1.5rem] md:ml-[-2rem] flex items-center"
        style={{ width: barWidth, minWidth: barWidth, maxWidth: barWidth, zIndex: 10 }}
      >
        <div className="bg-[#3270B6] text-white px-4 py-2 pl-8 md:px-6 md:py-3 md:pl-8 rounded-full text-base md:text-lg font-semibold shadow w-full text-left">
          {label}
        </div>
      </div>
    </div>
  );
};

export default StepComponent;