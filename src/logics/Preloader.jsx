import React from "react";
import './Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="logo-container">
        <img src='/assets/cement-logo.png' alt="Logo" className="preloader-logo" />
      </div>
    </div>
  );
};

export default Preloader;
