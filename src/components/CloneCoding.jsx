import "./cssbox/CloneCoding.css";
import TextAni from "./svgani/TextAni.jsx";

export default function CloneCoding() {
  const clones = [
    {
      id: 1,
      title: "MUSIGN",
      image: "/img/clonecoding-1.svg", 
      imageAlt: "/img/clonecoding-1.png", 
      desc: "시맨틱 HTML과 반응형 CSS 설계를 기반으로, 전 디바이스 환경에 최적화된 웹 페이지를 구현했습니다.",
      desc2: "jQuery와 CSS 애니메이션을 활용해 스크롤 트리거 모션과 인터랙션 중심의 사용자 경험을 설계했습니다.",
      link: "/clonecoding/musign/index.html"
    },
    {
      id: 2,
      title: "Y-STUDIO",
      image: "/img/clonecoding-2.svg",
      imageAlt: "/img/clonecoding-2.png",
      desc: "jQuery 기반으로 Slick Slider를 활용한 메인 비주얼 슬라이드와, scrolla + animate.css를 결합한 스크롤 트리거 애니메이션을 구현한 인터랙션 중심 웹 페이지입니다.",
      desc2: "고정 헤더 상태 전환, CSS keyframes 커스텀 모션, 미디어쿼리 기반 반응형 레이아웃까지 직접 제어하며 퍼블리싱 완성도를 높였습니다.",
      link: "/clonecoding/y-studio/index.html"
    },
    {
      id: 3,
      title: "CONCIERGE",
      image: "/img/clonecoding-3.svg",
      imageAlt: "/img/clonecoding-3.png",
      desc: "Slick Slider와 jQuery를 활용해 메인 비주얼 슬라이드, 모바일 네비게이션, 스크롤 기반 UI 동작을 구현한 인터랙션 중심 퍼블리싱 작업입니다.",
      desc2: "CSS keyframes·mask 애니메이션·미디어쿼리를 결합해 고난도 모션 연출과 디바이스별 반응형 레이아웃을 정교하게 설계했습니다.",
      link: "/clonecoding/dopda/index.html"
    },
    {
      id: 4,
      title: "CREW A LA MODE",
      image: "/img/clonecoding-4.svg",
      imageAlt: "/img/clonecoding-4.png",
      desc: "jQuery 스크롤 이벤트와 scrolla.js를 활용해 헤더 상태 전환, 고정 텍스트노출, 섹션별 인터랙션을 정교하게 제어했습니다.",
      desc2: "Splitting.js + CSS keyframes를 결합해 텍스트를 단어·문자 단위로 분해한 시퀀스 애니메이션과 반응형 레이아웃을 구현했습니다.",
      link: "/clonecoding/crew-a-la-mode/index.html"
    },
    {
      id: 5,
      title: "DAEBANG",
      image: "/img/clonecoding-5.svg",
      imageAlt: "/img/clonecoding-5.png",
      desc: "jQuery 기반으로 Slick Slider를 활용한 메인·서브 비주얼 슬라이드와, scrolla.js + Splitting.js를 결합한 스크롤·텍스트 애니메이션을 구현했습니다.",
      desc2: "스크롤 위치에 따른 고정 헤더 전환, 비디오 인터랙션, CSS 모션을 직접 제어하며 기업형 웹 퍼블리싱 완성도를 높였습니다.",
      link: "/clonecoding/daebang/index.html"
    },
    {
      id: 6,
      title: "PHOMEIN",
      image: "/img/clonecoding-6.svg",
      imageAlt: "/img/clonecoding-6.png",
      desc: "fullPage.js를 활용해 섹션 단위 스크롤 전환, 앵커 네비게이션, 페이지 진입 시점별 이벤트를 제어한 원페이지 인터랙션 웹을 구현했습니다.",
      desc2: "Slick Slider + CounterUp + jQuery를 결합해 비주얼 슬라이드, 수치 카운트 애니메이션, GNB 호버 인터랙션까지 동적 UI 흐름을 설계했습니다.",
      link: "/clonecoding/pohmain/index.html"
    }
  ];

  return (
    <section className="clone-section">
      <div className="clone-header">
        <TextAni>
        <h2 className="clone-title"> CLONE CODING</h2>
        </TextAni>
        <div className="clone-desc-top">
          구조와 동작을 이해하고, 실제로 구현했습니다.<br />
          화면 너머의 로직까지 재현하는 데 집중했습니다.
        </div>
      </div>

      <div className="clone-list-container">
        {clones.map((item, index) => (
          <div 
            className="clone-item" 
            key={item.id} 
            
            style={{top: `${110 + index * 10}px`}} 
          > 
            <div className="clone-content">
              
              <div className="clone-img-box">
                <img 
                    src={item.image} 
                    onError={(e) => { e.target.onerror = null; e.target.src = item.imageAlt || "/img/1million.png" }}
                    alt={item.title} 
                    className="clone-img" 
                />
              </div>

              <div className="clone-text-box">
                <div className="clone-text-header">
                    <h3 className="clone-item-title">{item.title}</h3>
                    
                </div>
                
                <p className="clone-item-desc">
                  • {item.desc}<br />
                  
                </p>
                <p className="clone-item-desc">
                  • {item.desc2}
                </p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="clone-view-btn">VIEW PROJECT</a>
              </div>

            </div>
            
          </div>
          
        ))}
        
      </div>
    </section>
  );
}
