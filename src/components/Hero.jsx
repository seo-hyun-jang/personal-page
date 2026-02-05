import React, { useEffect, useRef } from "react";
import "./cssbox/Hero.css";
import TextAni from "../svgani/TextAni.jsx";

const INITIAL_BALLS = [
  
  { id: 1, homeX: 16, homeY: 37, x: 16, y: -50, vx: 0, vy: 0, size: 300, type: 'hello', img: "./img/hellocircle.svg" },
  { id: 2, homeX: 85, homeY: 44, x: 85, y: -50, vx: 0, vy: 0, size: 280, type: 'hello', img: "./img/hellocircle.svg" },
  
  { id: 11, homeX: 40, homeY: 15, x: 40, y: -60, vx: 0, vy: 0, size: 240, type: 'hello', img: "./img/hellocircle.svg" },
  { id: 12, homeX: 60, homeY: 60, x: 60, y: 120, vx: 0, vy: 0, size: 260, type: 'hello', img: "./img/hellocircle.svg" },
  
  
  { id: 3, homeX: 10, homeY: 100, x: 10, y: -80, vx: 0, vy: 0, size: 400, type: 'white' }, 
  { id: 4, homeX: 5, homeY: 30, x: 5, y: -40, vx: 0, vy: 0, size: 350, type: 'white' },   
  { id: 5, homeX: 50, homeY: 17, x: 50, y: -100, vx: 0, vy: 0, size: 500, type: 'white' }, 
  { id: 6, homeX: 35, homeY: 100, x: 35, y: -60, vx: 0, vy: 0, size: 310, type: 'white' },  
  { id: 7, homeX: 95, homeY: 20, x: 95, y: -70, vx: 0, vy: 0, size: 450, type: 'white' },  
  { id: 8, homeX: 86, homeY: 100, x: 86, y: -90, vx: 0, vy: 0, size: 500, type: 'white' },  
  { id: 9, homeX: 95, homeY: 77, x: 95, y: -30, vx: 0, vy: 0, size: 300, type: 'white' },  
  { id: 10, homeX: 17, homeY: 23, x: 17, y: -20, vx: 0, vy: 0, size: 250, type: 'white' }, 
];

export default function Hero() {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  
  
  const ballsStateRef = useRef(INITIAL_BALLS.map(b => ({ ...b, settled: false })));
  const ballElementsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
        active: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    let animationFrameId;
    const gravity = 0.05;
    const friction = 0.98;
    const bounce = 0.7;

    const updatePhysics = () => {
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      ballsStateRef.current.forEach((ball, index) => {
        const el = ballElementsRef.current[index];
        if (!el) return;

        
        if (!ball.settled) {
          const dy = ball.homeY - ball.y;
          if (dy > 1) {
            ball.vy += 0.05; 
            ball.y += ball.vy;
          } else {
            ball.y = ball.homeY;
            ball.vy = 0;
            ball.settled = true;
          }
        } else {
          
          
          ball.vy += gravity;

          
          if (mouseRef.current.active) {
            const dxMouse = ball.x - mouseRef.current.x;
            const dyMouse = ball.y - mouseRef.current.y;
            const dist = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
            
            if (dist < 15) { 
              const force = (15 - dist) * 0.1;
              ball.vx += (dxMouse / dist) * force;
              ball.vy += (dyMouse / dist) * force;
            }
          }

          
          ball.vx *= friction;
          ball.vy *= friction;

          
          ball.x += ball.vx;
          ball.y += ball.vy;

          
          const radiusX = (ball.size / 2 / containerWidth) * 100;
          const radiusY = (ball.size / 2 / containerHeight) * 100;

          
          if (ball.y + radiusY > 100) {
            ball.y = 100 - radiusY;
            ball.vy *= -bounce;
          }
          
          if (ball.y - radiusY < 0) {
            ball.y = radiusY;
            ball.vy *= -bounce;
          }
          
          if (ball.x - radiusX < 0) {
            ball.x = radiusX;
            ball.vx *= -bounce;
          }
          
          if (ball.x + radiusX > 100) {
            ball.x = 100 - radiusX;
            ball.vx *= -bounce;
          }
        }

        
        el.style.left = `${ball.x}%`;
        el.style.top = `${ball.y}%`;
        el.style.transform = `translate(-50%, -50%) rotate(${ball.vx * 5}deg)`;
      });

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    animationFrameId = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hero" ref={containerRef}>
      {}
      <div className="hero-text" style={{ pointerEvents: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextAni delay="0.1s">TO DESIGN,</TextAni>
        <TextAni delay="0.3s">EDIT,</TextAni>
        <TextAni delay="0.5s">AND GROW</TextAni>
      </div>

      {}
      {INITIAL_BALLS.map((ball, index) => (
        <div 
          key={ball.id}
          className={`ball-container interactive-ball b${ball.id} ${ball.type === 'white' ? 'white-ball' : ''}`}
          ref={el => ballElementsRef.current[index] = el}
          style={{ 
            width: ball.size, 
            height: ball.size,
            left: `${ball.x}%`,
            top: `${ball.y}%`,
            position: 'absolute',
            zIndex: ball.type === 'hello' ? 11 : 5, 
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            boxShadow: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none' 
          }}
        >
          {ball.type === 'hello' && (
            <img src={ball.img} alt="hellocircle" style={{ width: '100%', height: 'auto' }} />
          )}
        </div>
      ))}
    </section>
  );    
}
