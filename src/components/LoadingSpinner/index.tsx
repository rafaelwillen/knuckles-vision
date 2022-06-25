import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-dark-900 bg-opacity-70 flex justify-center items-center">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
