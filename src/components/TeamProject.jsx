import { useState } from 'react';
import MoreInfoAni from "./svgani/MoreInfoAni.jsx";
import "./cssbox/TeamProject.css";
import TextAni from "./svgani/TextAni.jsx";

export default function TeamProject() {
  const projects = [
    {
      id: '1million',
      image: '/img/1million.png',
      period: '2024.11.26 ~ 2024.12.29',
      team: '6명',
      contributions: [
        { label: 'UX', value: '20%' },
        { label: 'UI', value: '30%' },
        { label: '코딩', value: '50%' },
      ],
      title: "WEBSITE RENEWAL PROJECT '1MILLION'",
      description: [
        [
          "웹사이트 리뉴얼을 목표로 진행한 팀 프로젝트로,",
          "프론트엔드 개발을 중심으로 개발 과정의 모든 UX/UI 설계에 참여했습니다."
        ],
        [
          "화면 설계와 일부 UI 디자인을 맡았으며 주요 화면을 직접 구현했습니다.",
          "다양한 디바이스 환경을 고려해 반응형 레이아웃을 적용했습니다.",
          "사용자 행동에 따른 반응형 인터랙션을 구현해 완성도를 보다 높였습니다."
        ]
      ]
      ,


      linkPlan: 'https://www.figma.com/design/NVNNJxevXpC6TpXoN6YAV0/23.%EC%9E%A5%EC%84%9C%ED%98%84?node-id=1554-5325&t=e4iKN61IgSATVm9C-1',
      linkProject: 'https://1million-nu.vercel.app/',
    },
    {
      id: 'nova',
      image: '/img/nova.png',
      period: '2026.01.02 ~ 2026.01.26',
      team: '7명',
      contributions: [
        { label: 'UX', value: '20%' },
        { label: 'UI', value: '30%' },
        { label: '코딩', value: '50%' },
      ],
      title: "FAN COMMUNITY APP PROJECT 'NOVA'",
      description: [
        [
          "팬 커뮤니티 앱 개발 팀 프로젝트입니다.",
          "프론트엔드 개발을 중심으로 개발 과정의 모든 UX/UI 설계에 참여했습니다."
        ],
        [
          "기획서 작성과 서비스 전반에 사용되는 배너 디자인에도 참여했습니다.",
          "기본 레이아웃과 와이어프레임을 설계해 화면 구조와 흐름을 정리했습니다.",
          "앱 내 모든 구현점 및 채팅 기능과 가챠 시스템을 로직 설계부터 화면 구현까지 직접 구현했습니다."
        ]
      ],

      linkPlan: 'https://www.figma.com/design/NVNNJxevXpC6TpXoN6YAV0/23.%EC%9E%A5%EC%84%9C%ED%98%84?node-id=1554-933&t=e4iKN61IgSATVm9C-1',
      linkProject: 'https://tubi-app.vercel.app/',
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section className="team-section">

      <div className="team-more-info">
        <MoreInfoAni className="more-info-icon" />
      </div>

      <div className="team-header">
        <TextAni>
          <h2 className="team-title">TEAM PROJECT</h2>
        </TextAni>
        <div className="team-desc-top">
          팀 안에서의 역할과 책임을 명확히 합니다.<br />
          협업 과정 또한 결과의 일부라고 생각합니다.
        </div>
      </div>

      {/* 왼쪽 버튼 */}
      <button
        className={`nav-arrow left ${activeIndex > 0 ? 'active' : 'disabled'}`}
        onClick={() => activeIndex > 0 && setActiveIndex(activeIndex - 1)}
        disabled={activeIndex === 0}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
          <ellipse cx="24.9608" cy="25" rx="24.9608" ry="25" fill="currentColor" />
          <path d="M38.7444 26.1171C39.5674 26.1171 40.2346 25.45 40.2346 24.627C40.2346 23.8039 39.5674 23.1368 38.7444 23.1368V24.627V26.1171ZM10.1221 23.5732C9.5401 24.1552 9.5401 25.0987 10.1221 25.6807L19.6056 35.1642C20.1876 35.7462 21.1311 35.7462 21.7131 35.1642C22.295 34.5823 22.295 33.6387 21.7131 33.0568L13.2832 24.627L21.7131 16.1971C22.295 15.6152 22.295 14.6716 21.7131 14.0897C21.1311 13.5077 20.1876 13.5077 19.6056 14.0897L10.1221 23.5732ZM38.7444 24.627V23.1368H11.1758V24.627V26.1171H38.7444V24.627Z" fill="currentColor" />
        </svg>
      </button>

      <div className="team-content-wrapper">
        <div className="project-display">

          <div className="project-image-box">
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="project-phone-img"
            />
          </div>

          <div className="project-info-box">
            <div className="info-grid">
              <div className="info-label">기간</div>
              <div className="info-value">{activeProject.period}</div>

              <div className="info-label">인원</div>
              <div className="info-value">{activeProject.team}</div>

              <div className="info-label">기여도</div>
              <div className="info-value contribution-list">
                {activeProject.contributions.map((item, i) => (
                  <span key={i}>
                    {item.label} {item.value}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="project-title">{activeProject.title}</h3>

            <div className="project-description">
              {activeProject.description.map((paragraph, i) => (
                <p key={i}>
                  {paragraph.map((line, j) => (
                    <span key={j}>
                      {line}
                      {j !== paragraph.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              ))}
            </div>

            <div className="action-buttons">
              <a href={activeProject.linkPlan} className="team-btn" target="_blank" rel="noopener noreferrer">VIEW PLAN</a>
              <a href={activeProject.linkProject} className="team-btn">VIEW PROJECT</a>
            </div>
          </div>
        </div>

        <img src="/img/teamproject-chars.svg" alt="" className="team-char" />
      </div>

      {/* 오른쪽 버튼 */}
      <button
        className={`nav-arrow right ${activeIndex < projects.length - 1 ? 'active' : 'disabled'}`}
        onClick={() => activeIndex < projects.length - 1 && setActiveIndex(activeIndex + 1)}
        disabled={activeIndex === projects.length - 1}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
          <ellipse cx="24.9608" cy="25" rx="24.9608" ry="25" transform="matrix(-1 0 0 1 49.9219 0)" fill="currentColor" />
          <path d="M11.1775 26.1171C10.3545 26.1171 9.68727 25.45 9.68727 24.627C9.68727 23.8039 10.3545 23.1368 11.1775 23.1368V24.627V26.1171ZM39.7998 23.5732C40.3818 24.1552 40.3818 25.0987 39.7998 25.6807L30.3163 35.1642C29.7343 35.7462 28.7908 35.7462 28.2088 35.1642C27.6269 34.5823 27.6269 33.6387 28.2088 33.0568L36.6386 24.627L28.2088 16.1971C27.6269 15.6152 27.6269 14.6716 28.2088 14.0897C28.7908 13.5077 29.7343 13.5077 30.3163 14.0897L39.7998 23.5732ZM11.1775 24.627V23.1368H38.7461V24.627V26.1171H11.1775V24.627Z" fill="currentColor" />
        </svg>
      </button>

    </section>
  );
}
