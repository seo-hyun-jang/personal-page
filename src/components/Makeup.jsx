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
    let mm = gsap.matchMedia();

    // 데스크탑 스크롤 애니메이션
    mm.add("(min-width: 1280px)", () => {
      const section = sectionRef.current;
      const leftCol = leftColRef.current;
      const rightCol = rightColRef.current;

      if (!section || !leftCol || !rightCol) return;

      // 이전 transform 제거
      gsap.set([leftCol, rightCol], { clearProps: "all" });

      const leftCards = leftCol.querySelectorAll(".photo-card");
      const rightCards = rightCol.querySelectorAll(".photo-card");

      const lastLeft = leftCards[leftCards.length - 1];
      const lastRight = rightCards[rightCards.length - 1];

      const leftBottom = lastLeft.offsetTop + lastLeft.offsetHeight;
      const rightBottom = lastRight.offsetTop + lastRight.offsetHeight;

      const contentHeight = Math.max(leftBottom, rightBottom);
      const scrollLength = Math.max(0, contentHeight - window.innerHeight);

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

      tl.to(leftCol, { y: -scrollLength, ease: "none" }, 0)
        .to(rightCol, { y: -scrollLength, ease: "none" }, 0);
    });

    // 모바일 진입 시 애니메이션 제거
    mm.add("(max-width: 1279px)", () => {
      const leftCol = leftColRef.current;
      const rightCol = rightColRef.current;

      if (!leftCol || !rightCol) return;

      gsap.set([leftCol, rightCol], { clearProps: "all" });
      ScrollTrigger.getAll().forEach(st => st.kill());
    });

    return () => mm.revert();
  }, []);


  return (
    <section className="makeup-section" ref={sectionRef}>
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
