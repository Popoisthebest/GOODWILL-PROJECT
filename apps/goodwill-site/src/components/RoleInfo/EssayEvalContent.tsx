import { useState, useEffect } from 'react'
import '../../styles/EssayEvalContent.css'

const EssayEvalContent = () => {
  const [time, setTime] = useState(20 * 60);
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const formatTime = (seconds: number): string => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <div className='wrapper'>
      <div className='timer'>
        <div className='timer_text'>{formatTime(time)}</div>
      </div>
      <div className="main_content">
        <div className="content">
          <div className="progress_bar">
            <div className="progress_text">0%</div>
            <div className="progress_bar_detail"></div>
          </div>
          <div className="progress_content">
            <div className="text_box">
              <div className="main_text">논술평가</div>
              <div className="sub_text">Business & Sales 직군</div>
            </div>
            <div className="main_content_box">
              <div className="title_text">1. 제시문을 읽고 문항에 답하시오.</div>
              <div className="presenta">현재 ‘플렉스(flex) 해버렸지 뭐야~’라는 말은 젊은 세대라면 누구나 아는 문구이다. 국내에서는 유명 래퍼 염따가 한 음악방송에 출연해 고가의 가방과 차를자랑하며 처음 사용했던 단어이지만, flex의 본래 뜻은 ‘구부리다’라는 의미를갖고 있다. MZ 세대 사이에서는 플렉스(flex)는 자랑을 하기 위해 고액을 지불하면서 명품을 사는 하나의 소비 형태가 되었다. 한 설문조사에 따르면, 실제로 플렉스 소비에 대해 긍정적으로 인식하는 젊은 2030 세대 중 반 이상(54.6%)이 플렉스 소비를 하는 이유로 ‘자기만족이 중요하기 때문’이라 응답하였다. 또한 사회적 계층, 정체성 형성이나 상징적 소비가 젊은 세대들이 플렉스 소비를 하는 대표적인 이유들이다. MZ세대의 성향이 플렉스 소비에 심취한 이유로 경제적 어려움으로 인한젊은 세대의 불안한 심리도 있다는 분석이 여러 존재한다. 이러한 상황 속에서여러 기업들은 플렉스 욕구를 불러일으키는 마케팅을 진행하고 있다. 대표적으로 루이비통, 슈프림처럼 유명 명품 제품들이 협업하여 의류의 디자인에 브랜드의 로고를 크게 각인하여 플렉스 소비를 유도하며 매출이 크게 상승하고있는 것을 볼 수 있다.</div>
              <div className="section_form">
                <div className="question">[문항1]</div>
                <div className="question_content">위 제시문을 참고하여 소비자들이 플렉스 소비를 하는 이유를 기업의마케팅, 소비자의 심리와 관련하여 논리적으로 자신의 생각을 서술하시오.</div>
                <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder='내용을 입력해 주세요.' className="solution_input" />
                <div className="text_many">{text.length}</div>
              </div>
              <div className="section_form">
                <div className="question">[문항2]</div>
                <div className="question_content">위 제시문을 참고하여 플렉스 소비를 유도하는 기업의 입장에서 최소한의 비용으로 최대한의 플렉스 소비 유도 효과를 도출해낼 수 있도록 하는 효과적인 방안을 논리적으로 작성하시오.</div>
                <textarea value={text1} onChange={(e) => setText1(e.target.value)} placeholder='내용을 입력해 주세요.' className="solution_input" />
                <div className="text_many">{text1.length}</div>
              </div>

              <button className="next_btn">다음</button>
            </div>
          </div>
        </div>
      </div>
      <div className="memo_section">
        <textarea className='memo_textarea' name="" id=""></textarea>
      </div>
    </div>
  )
}

export default EssayEvalContent