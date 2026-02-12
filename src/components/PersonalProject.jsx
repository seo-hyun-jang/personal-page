import "./cssbox/PersonalProject.css";
import TextAni from "./svgani/TextAni.jsx";

export default function PersonalProject() {
  const project = {
    image: '/img/travus.png',
    title: "TRAVEL PLANNER APP PROJECT 'TRAVUS'",
    description: [["TRAVUS는 여행 준비부터 실행까지의 과정을 하나의 흐름으로 연결하는 AI 기반 여행 플래너 서비스입니다.", "기획부터 UX·UI 설계까지 전 과정을 단독으로 진행했습니다."],
    ["여행 준비 단계의 정보 탐색·선택 피로를 문제로 정의하고, 사용자 여정 중심으로 화면 흐름을 재구성했습니다.", "각 단계에서 필요한 정보만 자연스럽게 이어지도록 설계해,", "사용자가 고민 없이 다음 행동으로 이동할 수 있는 경험을 만드는 데 집중했습니다."]],
    linkPlan: 'https://www.figma.com/design/NVNNJxevXpC6TpXoN6YAV0/23.%EC%9E%A5%EC%84%9C%ED%98%84?node-id=1556-17795&t=e4iKN61IgSATVm9C-1',
    linkProject: 'https://www.figma.com/design/NVNNJxevXpC6TpXoN6YAV0/23.%EC%9E%A5%EC%84%9C%ED%98%84?node-id=0-1&t=e4iKN61IgSATVm9C-1',
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
          <div className="personal-image-box">
            <img
              src={project.image}
              alt={project.title}
              className="personal-phone-img"
            />
          </div>

          <div className="personal-info-box">
            <div className="personal-char-container">
              <img src="/img/personal-char.svg" alt="" className="personal-char-img" />
            </div>

            <h3 className="personal-project-title">{project.title}</h3>

            <div className="personal-project-description"> {project.description.map((paragraph, i) => (<p key={i}> {paragraph.map((line, j) => (<span key={j}> {line} {j !== paragraph.length - 1 && <br />} </span>))} </p>))} </div>

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
