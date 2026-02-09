import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./cssbox/IntroAnimation.css";

const INTRO_CHAR_SVG = "/img/intro-char.svg";

const WAVE_COLORS = [
  "#9ABEFF",
  "#4F8DFF",
  "#1573FF",
];

export default function IntroAnimation({ onComplete }) {
  const [stage, setStage] = useState("waves");

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage("name"), 1200),
      setTimeout(() => setStage("blackhole"), 2200),
      setTimeout(() => setStage("explode"), 3400),
      setTimeout(() => setStage("statement"), 4000),
      setTimeout(() => onComplete(), 5000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const isBlackhole = stage === "blackhole" || stage === "explode";

  return (
    <div
      className="intro-container"
      style={{
        background: stage === "statement" ? "#000" : "#fff",
      }}
    >
      {(stage === "waves" ||
        stage === "name" ||
        stage === "blackhole" ||
        stage === "explode") &&
        WAVE_COLORS.map((color, i) => (
          <motion.div
            key={i}
            className="intro-wave"
            initial={{ y: "100%" }}
            animate={{
              y: "40%",
              ...(isBlackhole && {
                x: i === 0 ? "-3vw" : i === 1 ? "2vw" : "5vw",
                y: "30%",
                rotate: i === 0 ? -6 : i === 1 ? 3 : 6,
                skewX: i === 0 ? -5 : 3,
              }),
            }}
            transition={{
              duration: isBlackhole ? 1.0 : 1.2,
              ease: "easeInOut",
            }}
            style={{
              height: `${48 + i * 10}%`,
              background: color,
              zIndex: 10 + i,
            }}
          />
        ))}

      {(stage === "name" || isBlackhole) && (
        <motion.h1
          className="intro-name"
          initial={{ y: 80, opacity: 0 }}
          animate={
            isBlackhole
              ? { scale: 0, opacity: 0 }
              : { y: 0, opacity: 1 }
          }
          transition={{
            duration: isBlackhole ? 0.8 : 0.8,
            ease: "easeOut",
          }}
        >
          Jang Seo Hyun
        </motion.h1>
      )}

      {(stage === "name" || isBlackhole) && (
        <motion.img
          className="intro-char-img"
          src={INTRO_CHAR_SVG}
          initial={{ y: 60, opacity: 0 }}
          animate={
            isBlackhole
              ? {
                  x: "-40vw",
                  y: "30vh",
                  scale: 0,
                  rotate: 720,
                  opacity: 0,
                }
              : { y: 0, opacity: 1, rotate: 360 }
          }
          transition={{
            duration: isBlackhole ? 1.0 : 1.2,
            ease: "easeOut",
            repeat: isBlackhole ? 0 : Infinity,
          }}
        />
      )}

      {(stage === "blackhole" || stage === "explode") && (
        <motion.div
          className="intro-circle-container"
          initial={{ scale: 0 }}
          animate={{ scale: stage === "explode" ? 50 : 1 }}
          transition={{
            duration: stage === "explode" ? 0.5 : 1.0,
            ease: "easeInOut",
          }}
        >
          <div className="intro-blackhole-circle" />
        </motion.div>
      )}

      {stage === "statement" && (
        <motion.div
            className="intro-statement-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.p
            className="intro-statement-text"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Designing beyond one role.
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}
