import React from 'react';
import './IntroBlobAni.css';

const IntroBlobAni = ({ className }) => {
  return (
    <div className={`intro-blob-ani-wrapper ${className || ""}`}>
      <svg
        viewBox="0 0 1918 2493"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="wave-svg-container"
      >
        <path fill="#1573FF">
          <animate
            attributeName="d"
            dur="7s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            values="
              M 0 100 C 480 0, 1440 200, 1918 100 V 2493 H 0 Z;
              M 0 100 C 480 200, 1440 0, 1918 100 V 2493 H 0 Z;
              M 0 100 C 480 0, 1440 200, 1918 100 V 2493 H 0 Z
            "
          />
        </path>
      </svg>
    </div>
  );
};

export default IntroBlobAni;
