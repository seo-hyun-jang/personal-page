import React, { useState, useRef, useEffect } from 'react';
import './cssbox/TopBtn.css';

export default function TopBtn() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.07;
      audioRef.current.loop = true;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
      setIsPlaying(prev => !prev);
    } catch (err) {
      console.warn('BGM play blocked:', err);
    }
  };

  return (
    <div className="fixed-btn-container">
      <audio ref={audioRef} src="/public/audio/cute.mp3" />

      <button className="play-btn" onClick={togglePlay}>
        <img
          src={isPlaying ? "/img/stop-icon.svg" : "/img/play-icon.svg"}
          alt={isPlaying ? "Stop Music" : "Play Music"}
        />
      </button>

      <button className="top-btn" onClick={scrollToTop}>
        <img src="/img/top-btn.svg" alt="Scroll to top" />
        TOP
      </button>
    </div>
  );
}
