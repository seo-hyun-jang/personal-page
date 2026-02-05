import "./cssbox/PersonalProject.css";
import TextAni from "./svgani/textani.jsx";

export default function PersonalProject() {
  const project = {
    image: '/img/travus.png', 
    period: '2023.10.10 ~ 2023.11.20',
    team: '1명',
    contributions: [
      { label: '기획', value: '100%' },
      { label: '디자인', value: '100%' },
      { label: '개발', value: '100%' },
    ],
    title: "TRAVEL PLANNER APP PROJECT 'TRAVUS'", 
    description: `TRAVIUS는 여행 계획과 실행 과정을 하나의 흐름으로 연결하는 서비스를 목표로 한 프로젝트입니다.
UX와 UI 전반을 직접 설계하며, 기획 단계부터 화면 구조와 인터페이스까지 책임지고 진행했습니다.

여행 준비 과정에서 발생하는 정보 탐색과 선택 부담을 문제로 정의하고,
사용자 여정을 기준으로 기능과 화면 흐름을 설계했습니다.
각 단계에서 필요한 정보가 자연스럽게 이어지도록 UI 구조를 구성하며,
사용자가 고민하지 않고 다음 행동으로 넘어갈 수 있는 경험을 만드는 데 집중했습니다.`,
    linkPlan: '#',
    linkProject: '#',
  };

  return (
    <section className="personal-section">
      <div className="personal-header">
        <TextAni>
        <h2 className="personal-title">PERSONAL PROJECT</h2>
        </TextAni>
        <div className="personal-desc-top">
          모든 선택에는 근거가 필요하다고 생각합니다.<br />
          디자인도 마찬가지로, 설명 가능한 결과를 목표로 합니다.
        </div>
      </div>

      <div className="personal-content-wrapper">
        <div className="personal-project-display">
          {}
          <div className="personal-image-box">
            <img 
              src={project.image}
              alt={project.title} 
              className="personal-phone-img" 
            />
          </div>

          {}
          <div className="personal-info-box">
            
            {}
            <div className="personal-char-container">
               <img src="/img/personal-char.svg" alt="" className="personal-char-img" />
            </div>

            <h3 className="personal-project-title">{project.title}</h3>

            <div className="personal-project-description">
              {project.description}
            </div>
            
            <div className="action-buttons">
              <a href={project.linkPlan} className="team-btn">VIEW PLAN</a>
              <a href={project.linkProject} className="team-btn">VIEW PROJECT</a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
