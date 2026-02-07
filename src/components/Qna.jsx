import React, { useState } from 'react';
import './cssbox/Qna.css';
import TextAni from "./svgani/TextAni.jsx";

const Qna = () => {
  const qnaData = [
    {
      id: 1,
      question: "UX 디자이너인데,\n왜 마케팅까지 하나요?",
      char: "/img/Qna-char-1.svg",
      answer:
        "UX는 사용자의 행동을 설계하는 일이라고 생각합니다.\n 항상 결과가 실제 성과로 이어지는 지점까지 확인합니다."
    },
    {
      id: 2,
      question: "디자인만 하는\n디자이너와 무엇이 다른가요?",
      char: "/img/Qna-char-2.svg",
      answer:
        "레이아웃과 인터렉션을 직접 구현해 설계 의도가 \n구현 단계에서 흐려지지 않도록 합니다."
    },
    {
      id: 3,
      question: "SNS 경험이\nUX와 정말 연결되나요?",
      char: "/img/Qna-char-3.svg",
      answer:
        "사용자 반응 데이터를 통해 UX 설계가 행동으로 \n이어지는방식을 검증해왔습니다."
    }
  ];

  const [flippedCards, setFlippedCards] = useState({});
  const [startAnimation, setStartAnimation] = React.useState(false);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setStartAnimation(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCardClick = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="qna-section" ref={sectionRef}>
      <div className="qna-container">
        <TextAni>
        <h2 className="qna-title">QUESTIONS <br className="tablet-br" /> & ANSWERED</h2>
        </TextAni>
        <p className="qna-subtitle">
          작업 과정에서 자주 마주한 질문들입니다.
          <br />
          결과로 검증해온 답변입니다.
        </p>

        <div className={`qna-cards-grid ${startAnimation ? 'start-animation' : ''}`}>
          {qnaData.map((item) => (
            <div
              key={item.id}
              className={`qna-card ${flippedCards[item.id] ? 'is-flipped' : ''}`}
              onClick={() => handleCardClick(item.id)}
            >
              <div className="qna-card-inner">
                
                <div className="qna-card-front">
                  <div className="qna-card-frame qna-front-frame">
                    <img
                      src="/img/qna-card.svg"
                      alt="card pattern"
                      className="qna-front-img"
                    />
                    <div className="qna-front-content">
                    </div>
                  </div>
                </div>

                <div className="qna-card-back">
                  <div className="qna-card-frame qna-back-frame">
                    <div className="qna-card-top">
                      <span className="qna-q-icon">Q.</span>
                      <p className="qna-question">{item.question}</p>
                    </div>

                    <div className="qna-char-box">
                      <img
                        src={item.char}
                        alt="character"
                        className="qna-char-img"
                      />
                    </div>

                    <div className="qna-card-bottom">
                      <p className="qna-answer">{item.answer}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qna;
