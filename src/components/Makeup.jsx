import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./cssbox/Makeup.css";
import TextAni from "./svgani/TextAni.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function MakeupScroll() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  const leftImages = [
    "/img/makeup1.svg",
    "/img/makeup3.svg",
    "/img/makeup5.svg",
    "/img/makeup7.svg",
    "/img/makeup9.svg",
  ];

  const rightImages = [
    "/img/makeup2.svg",
    "/img/makeup4.svg",
    "/img/makeup6.svg",
    "/img/makeup8.svg",
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;

    const scrollLength =
      Math.max(leftCol.scrollHeight, rightCol.scrollHeight) -
      window.innerHeight;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,          
        start: "top top",
        end: () => "+=" + scrollLength,
        pin: true,                 
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(leftCol, { y: -scrollLength * 1.1, ease: "none" }, 0)
      .to(rightCol, { y: -scrollLength * 0.8, ease: "none" }, 0);

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section className="makeup-section" ref={sectionRef}>
      {}
      <div className="makeup-textBox">
        <TextAni>
        <h2 className="makeup-title">MAKE UP</h2>
        </TextAni>
        <p className="makeup-desc">
          메이크업 분야에서의 경험을 바탕으로<br />
          화보와 광고 등 여러 작업을 진행해왔습니다.<br />
          그 경험은 이후의 작업 방식에도 영향을 주고 있습니다.
        </p>
      </div>

      <div className="photo-viewport">
        <div className="photo-columns">
          <div className="photo-col left" ref={leftColRef}>
            {leftImages.map((src, i) => (
              <div className="photo-card" key={i}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>

          <div className="photo-col right" ref={rightColRef}>
            {rightImages.map((src, i) => (
              <div className="photo-card" key={i}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
