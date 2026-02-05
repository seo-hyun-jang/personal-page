import IntroBlobAni from "./svgani/IntroBlobAni.jsx";
import MoreInfoAni from "./svgani/MoreInfoAni.jsx";
import "./cssbox/Introduction.css";
import TextAni from "../svgani/TextAni.jsx";

export default function Introduction() {
  const hobbies = [
    { src: "/img/hobby-travel.svg", label: "TRAVEL" },
    { src: "/img/hobby-hiphop.svg", label: "HIP HOP PERFORMANCE" },
    { src: "/img/hobby-cookie.svg", label: "COOKIE MAKING" },
    { src: "/img/hobby-movie.svg", label: "WATCH A MOVIE" },
    { src: "/img/hobby-photo.svg", label: "TAKE CONCEPT PHOTOS" },
    { src: "/img/hobby-cat.svg", label: "PLAYING WITH CAT" },
  ];
  return (
    <section className="intro-section">
      {}
      <div className="intro-header-icon">
        <MoreInfoAni className="more-info-icon" />
      </div>

      {}
      <div className="intro-blue-box">
        <IntroBlobAni className="bg-blob" />
        <div className="intro-title-group">
          <TextAni>
          <h2 className="intro-title">WHO AM I</h2>
          </TextAni>
          <div className="intro-subtitle">
            다양한 경험 속에서 배워왔고, 멈추지 않으려 합니다.<br />
            후회 없는 선택을 위해 지금의 순간에 집중합니다.
          </div>
        </div>

        {}
        <div className="intro-profile-area">
          <div className="intro-photo-box">
            <img src="/img/who-am-i-me.svg" alt="Profile" className="profile-img" />
            <img src="/img/who-am-i-char.svg" alt="" className="star-char" />
          </div>

          <div className="intro-text-box">
            <h3 className="profile-name">JANG SEO HYUN</h3>
            <div className="profile-role">
              • UX / UI DESIGN<br />
              • GROWTH THINKING<br />
              • CONTENT & MARKETING PERSPECTIVE
            </div>

            <div className="keyword-label">KEYWORD</div>
            <div className="keyword-list">
              자부심 • 섬세함 • 책임감 • 성실함 • 일관성 • 실행력
            </div>
          </div>
        </div>

        {}
        <div className="intro-hobby-area">
          <h3 className="hobby-title">MY HOBBY</h3>
          <div className="hobby-grid">
            {hobbies.map((hobby, index) => (
              <div key={index} className="hobby-item">
                <img src={hobby.src} alt={hobby.label} className="hobby-img" />
                <div className="hobby-name">{hobby.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
