import { useState, useEffect } from 'react';
import "./cssbox/History.css";
import TextAni from "./svgani/textani.jsx";

const historyData = [
  { year: 2022, count: 8 },
  { year: 2023, count: 14 },
  { year: 2024, count: 12 },
  { year: 2025, count: 11 },
];

export default function History() {
  const [currentYearIndex, setCurrentYearIndex] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhotoIndex(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const { count } = historyData[currentYearIndex];

    if (currentPhotoIndex > count) {
      setCurrentYearIndex(prev =>
        prev === historyData.length - 1 ? 0 : prev + 1
      );
      setCurrentPhotoIndex(1);
    }
  }, [currentPhotoIndex]);

  const { year, count } = historyData[currentYearIndex];

  const safePhotoIndex =
    currentPhotoIndex > count ? 1 : currentPhotoIndex;

  const currentImageSrc = `/img/history${year}-${safePhotoIndex}.png`;

  return (
    <section className="history-section">
      <div className="history-text-content">  
        <TextAni>
        <h2 className="history-title">MY HISTORY</h2>
        </TextAni>
        <div className="history-desc">
          여러 경험을 거치며 일해왔습니다.<br />
          현장에서 배우고, 스스로 방식을 만들어왔습니다.<br />
          그 시간들이 지금의 저를 이루고 있습니다.
        </div>
      </div>

      <div className="history-slideshow-container">
        <div className="history-year-text">{year}</div>

        <div className="history-bg-white">
          <img src="/img/history-bg-white.svg" alt="" />
        </div>
        <div className="history-bg">
          <img src="/img/history-bg.svg" alt="" />
        </div>

        <img
          src={currentImageSrc}
          alt={`History ${year}`}
          className="history-photo"
        />
      </div>

      <img src="/img/history-char.svg" alt="" className="history-char" />
    </section>
  );
}
