import React from 'react';
import './ContactWaveAni.css';

const ContactWaveAni = ({ className }) => {
  return (
    <div className={`contact-wave-ani-wrapper ${className || ""}`}>
      <svg
        viewBox="0 0 1920 3321"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="wave-svg-container"
      >

        <rect width="1920" height="3321" fill="#1573FF" />

        <path className="mid-wave-path" fill="#81B3FF">
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            values="
              M 0 1450 C 480 1380, 1440 1520, 1920 1450 V 3321 H 0 Z;
              M 0 1450 C 480 1520, 1440 1380, 1920 1450 V 3321 H 0 Z;
              M 0 1450 C 480 1380, 1440 1520, 1920 1450 V 3321 H 0 Z
            "
          />
        </path>

        <path fill="#D0E3FF">
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            values="
              M 0 2200 C 480 1800, 1440 2400, 1920 2200 V 3321 H 0 Z;
              M 0 2200 C 480 2400, 1440 1800, 1920 2200 V 3321 H 0 Z;
              M 0 2200 C 480 1800, 1440 2400, 1920 2200 V 3321 H 0 Z
            "
          />
        </path>
      </svg>
    </div>
  );
};

export default ContactWaveAni;
