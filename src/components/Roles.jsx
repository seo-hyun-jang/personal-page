import "./cssbox/Roles.css";
import TextAni from "../svgani/TextAni.jsx";

export default function Roles() {
  return (
    <section className="roles-section">
      <div className="roles-content">
        <TextAni>
        <h2 className="roles-title">
          <span className="icon-container thumb-char-anim">
            <img src="/img/thumbchar.svg" alt="Star Character" className="thumb-char frame-1" />
            <img src="/img/thumbchar-2.svg" alt="Star Character" className="thumb-char frame-2" />
          </span>
          WORKING
        </h2>
        </TextAni>
        <TextAni>
        <h2 className="roles-title">BEYOND ONE ROLE</h2>
        </TextAni>
      </div>
    </section>
  );
}
