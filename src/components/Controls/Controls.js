import React from "react";

const ControlButton = ({ children, className, onClick }) => {
  const buttonClassName = `
    w-1/3 
    bg-blue-500 
    hover:bg-blue-700 
    text-white 
    font-bold 
    py-2 px-4 
    rounded-full 
    ml-4 
    ${className}
  `;

  return (
    <button onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
};

const Controls = ({ onPlay, onPause, onReset, status }) => {
  const handleClickPlayOrPause = () => {
    if (status === "idle" || status === "paused") {
      onPlay();
    } else {
      onPause();
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <ControlButton onClick={handleClickPlayOrPause}>
        {status === "idle" || status === "paused" ? "Play" : "Pause"}
      </ControlButton>
      <ControlButton onClick={onReset} className="ml-4">
        Reset
      </ControlButton>
    </div>
  );
};

export default Controls;
