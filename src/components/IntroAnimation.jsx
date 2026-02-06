import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const INTRO_CHAR_SVG = "/img/intro-char.svg";

// 위 → 아래
const WAVE_COLORS = [
  "#9ABEFF",
  "#4F8DFF",
  "#1573FF",
];

export default function IntroAnimation({ onComplete }) {
  const [stage, setStage] = useState("waves");

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage("name"), 3000),
      setTimeout(() => setStage("blackhole"), 5000),
      setTimeout(() => setStage("explode"), 7500),
      setTimeout(() => setStage("statement"), 8800),
      setTimeout(() => onComplete(), 10500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const isBlackhole = stage === "blackhole" || stage === "explode";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        overflow: "hidden",
        background: stage === "statement" ? "#000" : "#fff",
      }}
    >
      {/* ===== WAVES ===== */}
      {(stage === "waves" ||
        stage === "name" ||
        stage === "blackhole" ||
        stage === "explode") &&
        WAVE_COLORS.map((color, i) => (
          <motion.div
            key={i}
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
              duration: isBlackhole ? 2.5 : 3,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              bottom: 0,
              left: "-20%",
              width: "140%",
              height: `${48 + i * 10}%`,
              background: color,
              borderRadius: "50% 50% 0 0",
              transformOrigin: "50% 100%",
              zIndex: 10 + i,
            }}
          />
        ))}

      {/* ===== NAME ===== */}
      {(stage === "name" || isBlackhole) && (
        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={
            isBlackhole
              ? { scale: 0, opacity: 0 }
              : { y: 0, opacity: 1 }
          }
          transition={{
            duration: isBlackhole ? 2 : 1.8,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Anton, sans-serif",
            fontSize: "200px",
            letterSpacing: "0.1em",
            paddingLeft: "0.25em",
            color: "#000",
            whiteSpace: "nowrap",
            zIndex: 40,
          }}
        >
          Jang Seo Hyun
        </motion.h1>
      )}

      {/* ===== CHARACTER ===== */}
      {(stage === "name" || isBlackhole) && (
        <motion.img
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
            duration: isBlackhole ? 2.5 : 3,
            ease: "easeOut",
            repeat: isBlackhole ? 0 : Infinity,
          }}
          style={{
            position: "absolute",
            top: 150,
            right: 150,
            width: 120,
            height: 120,
            zIndex: 50,
          }}
        />
      )}

      {/* ===== BLACKHOLE ===== */}
      {(stage === "blackhole" || stage === "explode") && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: stage === "explode" ? 50 : 1 }}
          transition={{
            duration: stage === "explode" ? 1.2 : 2.5,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
          }}
        >
          <div
            style={{
              width: 240,
              height: 240,
              borderRadius: "50%",
              background: "#000",
              boxShadow:
                "0 0 160px #1573FF, inset 0 0 120px #1573FF",
            }}
          />
        </motion.div>
      )}

      {/* ===== STATEMENT ===== */}
      {stage === "statement" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#000",
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: "56px",
              letterSpacing: "0.08em",
              color: "#fff",
              textAlign: "center",
            }}
          >
            Designing beyond one role.
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}
