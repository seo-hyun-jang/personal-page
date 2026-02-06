import { useEffect } from "react";
import MoreInfoAni from "./svgani/MoreInfoAni.jsx";
import VedioCut from "./svgani/VedioCut.jsx";
import "./cssbox/SnsMarketing.css";
import TextAni from "./svgani/TextAni.jsx";

export default function SnsMarketing() {

  useEffect(() => {
    const circles = document.querySelectorAll(".sns-circle");
    if (!circles.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.1 } // Lower threshold to trigger earlier
    );

    circles.forEach((circle) => observer.observe(circle));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="sns-marketing">
      <div className="sns-content">
        <MoreInfoAni className="more-info-icon" />

        <div className="sns-description">
          경험의 범위를 넓혀오며 다양한 작업을 배웠습니다.<br />
          하나의 역할에 국한되기보다, 여러 영역을 넘나들며 일해왔고<br />
          그 과정에서 시야와 역량을 함께 확장해왔습니다.
        </div>
      </div>

      {/* 🔥 비주얼 데코 영역 */}
      <div className="sns-visual">
        <div className="sns-circle-box">
          <div className="sns-circle sc1" />
          <div className="sns-circle sc2" />
          <div className="sns-circle sc3" />
          <div className="sns-circle sc4" />
          <div className="sns-circle sc5" />
          <div className="sns-circle sc6" />
          <div className="sns-circle sc7" />
        </div>

        <TextAni className="sns-title-wrap">
          <h2 className="sns-title">SNS MARKETING</h2>
        </TextAni>
      </div>

      {/* 🔥 미디어 영역 */}
      <div className="sns-media">
        <video
          className="sns-video"
          src="/img/thumbnail.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="vedio-cut-box">
          <VedioCut className="vedio-cut-svg" />
    </div>
  </div>
</section>

  );
}
