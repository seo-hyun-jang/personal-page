import { useEffect, useRef } from "react";
import "./TextAni.css";

export default function TextAni({ children, className = "", delay = "0s" }) {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
        } else {
          el.classList.remove("is-visible"); // ← 핵심
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elRef} className={`reveal-up ${className}`} style={{ transitionDelay: delay }}>
      {children}
    </div>
  );
}
