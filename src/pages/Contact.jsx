import ContactWaveAni from "../components/svgani/ContactWaveAni.jsx";
import MoreInfoAni from "../components/svgani/MoreInfoAni.jsx";
import '../components/cssbox/Contact.css';
import TextAni from "../components/svgani/TextAni.jsx";

export default function Contact() {
  return (
    <div className="contact-section">
      <ContactWaveAni className="bg-wave" />
      {}
      <img src="/img/contact-star-1.svg" alt="star" className="star-icon star-1" />
      <img src="/img/contact-star-2.svg" alt="star" className="star-icon star-2" />
      <img src="/img/contact-star-3.svg" alt="star" className="star-icon star-3" />
      <img src="/img/contact-star-4.svg" alt="star" className="star-icon star-4" />
      <img src="/img/contact-star-5.svg" alt="star" className="star-icon star-5" />

      {}
      <div className="contact-container">
        <header className="contact-header">
        <MoreInfoAni className="more-info-badge" />
        <TextAni>
        <h2 className="contact-title">CONTACT</h2>
        </TextAni>
          <p className="contact-subtitle">함께 일할 수 있는 이야기를 기다립니다.</p>
        </header>
      </div>

      {}
      <div className="contact-footer">
        <div className="speech-bubble-wrapper">
          <img src="/img/contact-textbollun.svg" alt="speech bubble" className="speech-bubble-bg" />
          <p className="bubble-text">LET'S WORK TOGETHER!</p>
        </div>
        <div className="contact-char-container">
          <img src="/img/contact-char.svg" alt="character" className="contact-char frame-1" />
          <img src="/img/contact-char2.svg" alt="character" className="contact-char frame-2" />
        </div>
      </div>
    </div>
  );
}