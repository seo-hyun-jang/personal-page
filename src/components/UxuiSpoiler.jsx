import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./cssbox/UxuiSpoiler.css";
import TextAni from "./svgani/TextAni.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function UxuiSpoiler() {
  const contentRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    const track = trackRef.current;
    const panels = gsap.utils.toArray(".spoiler-card", track);

    const tween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      paused: true,
    });

    const st = ScrollTrigger.create({
      trigger: content,        
      pin: true,               
      scrub: 1,
      start: "top top",
      end: () => "+=" + (track.scrollWidth - window.innerWidth), 
      animation: tween,
      invalidateOnRefresh: true,
    });

    const onResize = () => st.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      st.kill();
      tween.kill();
    };
  }, []);

  return (
    <section className="uxui-spoiler">
      <div className="uxui-header">
        <TextAni>
        <h2 className="uxui-title">UXUI</h2>
        </TextAni>
        <TextAni>
        <h2 className="uxui-title">DESIGN</h2>
        </TextAni>

        <div className="uxui-subtitle">
          생각은 화면으로 정리되고,<br />
          화면은 실제 결과로 이어져야 한다고 믿습니다.<br />
          그 과정 전체를 하나의 흐름으로 바라봅니다.
        </div>
      </div>

      <div className="uxui-content" ref={contentRef}>
        <div className="spoiler-track" ref={trackRef}>
          <a 
            href="https://www.figma.com/design/NVNNJxevXpC6TpXoN6YAV0/23.%EC%9E%A5%EC%84%9C%ED%98%84?node-id=1554-5325&t=e4iKN61IgSATVm9C-1"
            target="_blank"
            rel="noopener noreferrer"
            className="spoiler-card card-1million"
          >
            <img src="/img/1million-big.svg" alt="" />
          </a>

          <a 
            href="https://www.figma.com/design/NVNNJxevXpC6TpXoN6YAV0/23.%EC%9E%A5%EC%84%9C%ED%98%84?node-id=1554-933&t=e4iKN61IgSATVm9C-1"
            target="_blank"
            rel="noopener noreferrer"
            className="spoiler-card card-nova"
          >
            <img src="/img/nova-big.svg" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
