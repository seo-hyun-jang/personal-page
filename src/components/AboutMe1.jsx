import AboutMeBlobAni from "./svgani/AboutMeBlobAni.jsx";
import "./cssbox/AboutMe1.css";
import TextAni from "./svgani/TextAni.jsx";

export default function AboutMe1() {
  
  const barIcons = Array.from({ length: 17 }, (_, i) => `/img/bar${i + 1}.svg`);

  return (
    <section className="aboutme1-section">
      <div className="aboutme1-header">
        <TextAni>
        <h2 className="aboutme1-title">ABOUT ME</h2>
        </TextAni>
        <div className="aboutme1-subtitle">
          이런 과정을 거쳐온 저를 소개합니다.<br />
          제가 어떤 기준으로 살아오고 일해왔는지에 대한 이야기입니다.
        </div>
      </div>

      <div className="aboutme1-graphic">
        <AboutMeBlobAni className="bg-blob" />
        <img src="/img/aboutme-brush-char.svg" alt="Character" className="char-img" />
      </div>

      <div className="aboutme1-bar-container">
        <div className="aboutme1-marquee">
          {barIcons.map((src, index) => (
            <img key={`first-${index}`} src={src} alt={`icon-${index + 1}`} className="bar-icon" />
          ))}
          {}
          {barIcons.map((src, index) => (
            <img key={`second-${index}`} src={src} alt={`icon-dup-${index + 1}`} className="bar-icon" />
          ))}
        </div>
      </div>
    </section>
  );
}
