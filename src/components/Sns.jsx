import React from 'react';
import './cssbox/Sns.css';
import TextAni from "./svgani/TextAni.jsx";

const Sns = () => {
  const youtubeStats = [
    { label: '최고 조회수', value: '2.75M' },
    { label: '총 제작 콘텐츠', value: '롱폼 22개\n쇼츠 98개' },
  ];

  const instagramStats = [
    { label: '평균 조회수', value: '13.5K' },
    { label: '1M+ 콘텐츠', value: '3개' },
  ];

  const instaThumbs = [
    { id: 1, img: '/img/sns-insta-1.svg', views: '160만회' },
    { id: 2, img: '/img/sns-insta2.svg', views: '155만회' },
    { id: 3, img: '/img/sns-insta-3.svg', views: '124.1만회' },
  ];

  return (
    <section className="sns-section">
      <div className="sns-header">
        <TextAni>
        <p className="sns-main-title">SNS & GROWTH</p>
        </TextAni>
        <p className="sns-subtitle">
          직접 운영하며 성과를 만들어왔습니다.{"\n"}
          콘텐츠 기획부터 반응 분석까지 경험했습니다.
        </p>
      </div>

      <div className="sns-columns-container">
        {}
        <div className="sns-column" data-platform="youtube">
          <div className="sns-platform-header">
            <img src="/img/sns-youtube.png" alt="YouTube" className="sns-platform-logo" />
            <h3 className="sns-platform-name">YOUTUBE</h3>
          </div>

          <div className="sns-stats-card">
            <div className="sns-stats-grid two">
              {youtubeStats.map((stat, i) => (
                <div key={i} className="sns-stat-item">
                  <div className="sns-stat-label">{stat.label}</div>
                  <div 
                    className={`sns-stat-value ${stat.value.includes('\n') ? 'small-value' : ''}`} 
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sns-gallery youtube">
            <div className="youtube-large" style={{ position: 'relative' }}>
              <img src="/img/crown.svg" className="sns-crown-icon" alt="Best" />
              <div className="sns-card" style={{ width: '100%', height: '100%' }}>
                <img src="/img/sns-youtube-1.svg" className="sns-thumb" />
                <div className="sns-card-overlay">
                  <img src="/img/sns-eyes.svg" className="sns-overlay-icon" />
                  <span>275.5만회</span>
                </div>
              </div>
            </div>

            <div className="sns-gallery-right-stack">
              <div className="youtube-small">
                <div className="sns-card" style={{ width: '100%', height: '100%' }}>
                  <img src="/img/sns-youtube-2.svg" className="sns-thumb" />
                  <div className="sns-card-overlay">
                    <img src="/img/sns-eyes.svg" className="sns-overlay-icon" />
                    <span>6.6천회</span>
                  </div>
                </div>
              </div>

              <div className="youtube-small">
                <div className="sns-card" style={{ width: '100%', height: '100%' }}>
                  <img src="/img/sns-youtube-3.svg" className="sns-thumb" />
                  <div className="sns-card-overlay">
                    <img src="/img/sns-eyes.svg" className="sns-overlay-icon" />
                    <span>2.5천회</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="https://www.youtube.com/channel/UCrQDh5l_3JcfIxh58nFQJPQ?si=cquTmYYML3nAV7GW" target="_blank" rel="noopener noreferrer" className="sns-view-project-btn">VIEW CHANNEL</a>
        </div>

        <div className="sns-column" data-platform="instagram">
          <div className="sns-platform-header">
            <img src="/img/sns-instagram.png" alt="Instagram" className="sns-platform-logo" />
            <h3 className="sns-platform-name">INSTAGRAM</h3>
          </div>

          <div className="sns-stats-card">
            <div className="sns-stats-grid two">
              {instagramStats.map((stat, i) => (
                <div key={i} className="sns-stat-item">
                  <div className="sns-stat-label">{stat.label}</div>
                  <div 
                    className={`sns-stat-value ${stat.value.includes('\n') ? 'small-value' : ''}`}
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sns-gallery instagram">
            {instaThumbs.map((t, i) => (
              <div key={t.id} className="sns-card-wrapper" style={{ flex: 1, height: '100%', position: 'relative' }}>
                {i === 0 && <img src="/img/crown.svg" className="sns-crown-icon" alt="Best" />}
                <div className="sns-card" style={{ width: '100%', height: '100%' }}>
                  <img src={t.img} className="sns-thumb" />
                  <div className="sns-card-overlay">
                    <img src="/img/sns-eyes.svg" className="sns-overlay-icon" />
                    <span>{t.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a href="https://www.instagram.com/amongguri?igsh=MWN0czkxcXl6eXdrMQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="sns-view-project-btn">VIEW CHANNEL</a>
        </div>
        
      </div>
      <div className="sns-char-box">
          <img src="/img/sns-char.svg" className="sns-btn-char" />
        </div>
    </section>
  );
};

export default Sns;
