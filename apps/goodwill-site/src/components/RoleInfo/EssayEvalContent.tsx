import { useState, useEffect, useRef } from 'react'
import '../../styles/EssayEvalContent.css'
import { useNavigate } from 'react-router-dom';

const EssayEvalContent = () => {
  // const [time, setTime] = useState(20 * 60);
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const [entries, setEntries] = useState<{ text: string; text1: string; }[]>([]); // 객체 타입을 명시적으로 지정


  //progress bar

  const scrollableRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    if (progress < 75) {
      setProgress(progress + 25);
      setEntries([...entries, { text, text1 }]);
      setText('');
      setText1('');
      if (scrollableRef.current) {
        scrollableRef.current.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (progress == 75) {
      console.log(entries)
      navigate('/evalend')
    }
  }

  const title_text = () => {
    if (progress < 10) {
      return `1. 제시문을 읽고 문항에 답하시오.`
    } else if (progress < 30) {
      return `2. 제시문을 읽고 문항에 답하시오.`
    } else if (progress < 60) {
      return `3. 제시문을 읽고 문항에 답하시오.`
    } else {
      return `4. 제시문을 읽고 문항에 답하시오.`
    }
  }

  const sub_text = () => {
    if (progress < 10) {
      return `현재 ‘플렉스(flex) 해버렸지 뭐야~’라는 말은 젊은 세대라면 누구나 아는 문구이다. 국내에서는 유명 래퍼 염따가 한 음악방송에 출연해 고가의 가방과 차를자랑하며 처음 사용했던 단어이지만, flex의 본래 뜻은 ‘구부리다’라는 의미를갖고 있다. MZ 세대 사이에서는 플렉스(flex)는 자랑을 하기 위해 고액을 지불하면서 명품을 사는 하나의 소비 형태가 되었다. 한 설문조사에 따르면, 실제로 플렉스 소비에 대해 긍정적으로 인식하는 젊은 2030 세대 중 반 이상(54.6%)이 플렉스 소비를 하는 이유로 ‘자기만족이 중요하기 때문’이라 응답하였다. 또한 사회적 계층, 정체성 형성이나 상징적 소비가 젊은 세대들이 플렉스 소비를 하는 대표적인 이유들이다. MZ세대의 성향이 플렉스 소비에 심취한 이유로 경제적 어려움으로 인한젊은 세대의 불안한 심리도 있다는 분석이 여러 존재한다. 이러한 상황 속에서여러 기업들은 플렉스 욕구를 불러일으키는 마케팅을 진행하고 있다. 대표적으로 루이비통, 슈프림처럼 유명 명품 제품들이 협업하여 의류의 디자인에 브랜드의 로고를 크게 각인하여 플렉스 소비를 유도하며 매출이 크게 상승하고있는 것을 볼 수 있다.`
    } else if (progress < 30) {
      return `2025년 현재 기업의 사회적 책임과 이에 대한 구체적인 행동을 기대하는 소비자가 점차 늘어나고 있다. ESG는 환경(Environment), 사회(Social), 지배구조(Governance)를 일컫는 개념으로 ‘ESG 경영’이란 장기적인 관점에서 친환경및 사회적 책임경영과 투명경영을 통해 지속가능한 발전을 추구하는 것이다.싱가포르, 태국, 베트남, 말레이시아, 인도네시아 등 동남아 10개국이 모인 아세안은 인구 약 6억명에 3조 3500억 달러의 경제 규모에 달한다. 이를 바탕으로 아세안 지역은 급속한 경제성장으로 인해 ESG 중심지로 떠오르고 있다. 싱가포르는 지속가능한 금융과 탄소 서비스, 인도네시아와 태국 및 베트남은 전기차 시장, 필리핀은 상장사들이 자사의 온실가스배출량을 의무적으로 공시하도록 하고 있다. 이들보다 경제 규모가 작은 캄보디아와 라오스는 개발 자금을조달하기 위해 지속가능한 채권을 점점 더 많이 발행하고 있다. 이렇게 현재 아세안 지역에서는 ESG 열풍이 불고 있다. 이러한 과정 속에서 각 아세안 국가들 사이에 있는 여러 제도의 차이점과 경제적 격차로 인해 각 국가간의 복잡한 사회구조나 경제적 구조를 고려해야 한다. 또한,하지만, 아세안 국가들은 ESG 경영을 실현에 있어 ESG 활동 인식 결여와 역량 부족, 높은 비용 등이 문제로 지목되고 있다. 특히 아세안 국가들이 환경문제와 경제적 불평등, 빈곤, 역량강화, 경제개혁 등의 문제에 대응해야 하는 과제가 상존하기 때문이다. 또한, 단기적인 ESG 경영 투자 비용 증가와 장기적인 지속가능성 확보 사이의 역설을 개발이 시급한 대부분의 아세안 국가들에게는 크나 큰 문제점으로 다가오고 있다.`
    } else if (progress < 60) {
      return `팝업스토어(Pop-up Store)는 떴다가 사라지는 인터넷의 ‘팝업(Pop-up) 창’과비슷해 붙여진 명칭으로, 팝업토어 마케팅이란 신규 브랜드를 론칭하거나 브랜드 메시지를 확실하게 전달하고자 할 때 자주 사용되는 마케팅 기법이다. 기업들은 대부분 오프라인의 형태로 팝업스토어를 운영하며 소비자들에게 브랜드 경험을 제공하고, 인지도를 높이고 있다. 또한 팝업스토어는 정해진 기간동안 일회성으로 운영되기 때문에 비교적 적은 비용으로 시장 선호도를 미리파악할 수 있으며, 동시에 브랜드 정체성을 전달할 수 있다는 것이 장점이다. 최근에는 경험과 재미를 추구하는 MZ세대의 트렌드에 맞춰 팝업스토어가 단순한 마케팅 기법을 넘어 ‘이색 경험’으로써 각광받고 있다. 특히 백화점과 같은 종합 쇼핑물이 공간적 특성을 효과적으로 활용하여 팝업스토어 시행에 앞장서고 있다. 이 과정에서 팝업스토어를 구성하는 기업에선 단기적으로 구성하는 팝업스토어를 통해 소비자들의 높은 관심을 유도해 소비자들의 소비 심리를 자극하고 있다. 또한, 팝업스토어를 특색 있게 차별화하여 진행하며 브랜드 차별화 전략을 시행하며 각광받고 있다. 하지만, 무분별하게 찍어내는 듯한 양산형 팝업스토어의 대거 등장으로 소비자들이 대부분 팝업스토어가 진부하고 지루해졌다고 평가하고 있다. 대부분의 팝업스토어들의 구성이 비슷하고 겉모습에 혹해 들어가보면 막상별 다를 게 없다는 문제가 지속적으로 발생하고 있다. 또한 팝업스토어는 단기적으로 진행하고 사라지는 것이기 때문에 소비자들이 원하는 방향성대로 피드백 받아 운영하는 것이 매우 힘들다. 이러한 특성 때문에 단기적인 행사 느낌으로 낭비처럼 인식되며 발전하지 않는 듯한 발상을 소비자들이 하게 되면서 문제가 되고 있다.`
    } else {
      return `최근 프로토타이핑 디자인 협업툴인 피그마(Figma)가 ‘피그마 AI’라는 생성형AI 기능을 발표하자마자 그 기능을 비활성화했다. 피그마 AI는 자연어 프롬포트만으로 높은 수준의 UI화면을 즉시 생성해 주는 획기적인 기능이다. 사용자가 원하는 프롬포트를 입력하면 AI가 적절한 이미지와 구성요소를 갖추어 디자인을 하고, 사용한 언어를 다른 언어로 번역까지 실행한다. 그러나 발표 즉시 피그마 AI의 디자인이 애플의 날씨 앱 디자인을 모방했다는 주장이 발생했고, 저작권 문제로 인해 서둘러 기능을 비활성화했지만 비난을 피하지는 못했다. 또한 다른 디자인 AI 툴로 Autodesk의 Dreamcatcher는 디자이너가 특정 프로젝트 요구사항에 따라 디자이너 옵션을 생성할 수 있도록 지원하는 AI기반 도구이다. 머신러닝 알고리즘을 활용해 디자인 옵션을 빠르게 생성하는개념 디자이너 도구로, 건축가와 디자이너가 짧은 시간 안에 광범위한 가능성을 탐색할 수 있다는 장점이 있다. 이렇게 디자인과 관련해 AI 성성형 툴이 지속적으로 발전하고 개발되고 있는 현재 윤리적인 문제점도 존재한다. 기존 디자이너들의 디자인 작품을 모방하는 것이나 AI 디자인 툴을 활용해 대회나 영리적 목적을 달성하는 사람들이 늘어나고 있다.`
    }
  }

  const Question1 = () => {
    if (progress < 10) {
      return `위 제시문을 참고하여 소비자들이 플렉스 소비를 하는 이유를 기업의마케팅, 소비자의 심리와 관련하여 논리적으로 자신의 생각을 서술하시오.`
    } else if (progress < 30) {
      return `위 제시문을 참고하여 ESG 경영을 단기적 투자 비용 증가와 장기적 지속가능성 확보 사이의 역설을 고민하는 아세안 국가들의 입장을 통해 자신의 생각과 근거를 논리적으로 작성하시오.`
    } else if (progress < 60) {
      return `위 제시문을 참고하여 팝업스토어를 소비 심리, 마케팅 전략, 단기적 특성에 입각하여 자신의 생각을 논리적으로 주장하여 작성하시오.`
    } else {
      return `위 제시문을 참고하여 디자인 관련 AI툴의 지속적인 개발과 발전에 대한 자신의 생각을 논리적으로 작성하시오.`
    }
  }

  const Question2 = () => {
    if (progress < 10) {
      return `위 제시문을 참고하여 플렉스 소비를 유도하는 기업의 입장에서 최소한의 비용으로 최대한의 플렉스 소비 유도 효과를 도출해낼 수 있도록 하는 효과적인 방안을 논리적으로 작성하시오.`
    } else if (progress < 30) {
      return `위 제시문을 참고하여 ESG 경영을 아세안 지역에 도입하는 데 있어 문제점을 분석하여 설명하고 이를 간파하여 ESG 경영활동을 실현할 수 있게끔 하기 위한 방안을 조직 변화와 실제 운영 효율성을 고려하여 작성하시오.`
    } else if (progress < 60) {
      return `위 제시문을 참고하여 팝업스토어 구성의 진부함과 경쟁 과열, 단기적 특성으로 인한 낭비의 문제점을 인식하고 이를 해결할 수 있도록 실질적 문제 해결 방안을 작성하시오.`
    } else {
      return `위 제시문을 참고하여 디자이너들에게 도움이 될 수 있도록 하는 디자인 AI 툴을 효과적으로 발전시키고 사용할 방안에 대해 착안하여 창의적으로 작성하시오.`
    }
  }

  // 타이머
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  // const formatTime = (seconds: number): string => {
  //   const min = Math.floor(seconds / 60);
  //   const sec = seconds % 60;
  //   return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  // };

  const totalTime = 20 * 60; // 20분 -> 초 단위
  const [timeLeft, setTimeLeft] = useState(totalTime); // 타이머 시간
  const [isCompleted, setIsCompleted] = useState(false); // 타이머 완료 여부

  // 타이머 설정: 매초마다 시간이 감소
  useEffect(() => {
    if (timeLeft > 0 && !isCompleted) {
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval); // 타이머 종료 시 클리어
    } else if (timeLeft === 0 && !isCompleted) {
      setIsCompleted(true); // 타이머가 0에 도달하면 완료 처리
    }
  }, [timeLeft, isCompleted]);

  // 타이머를 MM:SS 형식으로 변환
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  // 원의 진행률 계산 (타이머 진행 비율)
  const process = (timeLeft / totalTime) * 100;

  const circleCircumference = 2 * Math.PI * 100; // 반지름 90px일 때 원의 둘레


  return (
    <div className='wrapper'>
      <div className='timer'>
      <div className="circle-container">

      <svg className="circle" width="220" height="220" viewBox="0 0 220 220">
          <circle className="background" cx="110" cy="110" r="100" strokeWidth="5" fill="none" />
          
          <circle
            className={`foreground ${isCompleted ? 'completed' : ''}`}
            cx="110"
            cy="110"
            r="100"
            strokeWidth="6"
            strokeDasharray={circleCircumference} // 원의 둘레
            strokeDashoffset={isCompleted ? 0 : circleCircumference - (circleCircumference * process) / 100} // 점차적으로 채워짐
            fill="none"
          />
        </svg>
        <div className='timer_text'>{isCompleted ? '00:00' : formatTime(timeLeft)}</div>
      </div>
      </div>
      <div className="main_content">
        <div className="content-re">
          <div className="progress_bar">
            <div className="progress_text">{progress}%</div>
            <div className="progress_bar_detail">
              <div style={{ width: `${progress}%` }} className="progress_bar_filled"></div>
            </div>
          </div>
          <div ref={scrollableRef} className="progress_content">
            <div className="text_box">
              <div className="main_text">논술평가</div>
              <div className="sub_text">Business & Sales 직군</div>
            </div>
            <div className="main_content_box">
              <div className="title_text">{title_text()}</div>
              <div className="presenta">{sub_text()}</div>
              <div className="section_form">
                <div className="question">[문항 1]</div>
                <div className="question_content">{Question1()}</div>
                <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder='내용을 입력해 주세요.' className="solution_input" />
                <div className="text_many">{text.length}</div>
              </div>
              <div className="section_form">
                <div className="question">[문항2]</div>
                <div className="question_content">{Question2()}</div>
                <textarea value={text1} onChange={(e) => setText1(e.target.value)} placeholder='내용을 입력해 주세요.' className="solution_input" />
                <div className="text_many">{text1.length}</div>
              </div>

              <button onClick={handleButtonClick} className="next_btn">다음</button>
              <div className="warn_text">다음 버튼을 누르면 수정할 수 없습니다.</div>
              <div className="blank"></div>
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