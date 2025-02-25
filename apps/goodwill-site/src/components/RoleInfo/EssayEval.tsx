import '../../styles/EssayEval.css'
import { useNavigate } from 'react-router-dom';

const EssayEval = () => {

  const navigate = useNavigate();

  const confirmbtn = () => {
    navigate("/verify")
  }

  return (
    <>
      <div className='start_box'>
        <div className="header">
          <div className="title">논술평가</div>
          <div className="subtitle">Business & Sales 직군</div>
        </div>

        <div className="first_section">
          <div className="section_title">중요 멘트</div>
          <div className="section_content">본문을 입력해 주세요.본문을 입력해 주세요.본문을 입력해 주세요.본문을 입력해 주세요.본문을 입력해 주세요.본문을 입력해 주세요.본문을 입력해 주세요.본문을 입력해 주세요.본문을 입력해 주세요.본문을 입력해 주세요.본문을 입력해 주세요.본문을 입력해 주세요.</div>
        </div>
        
        <div className="second_section">
          <div className="section_title">중요 멘트</div>
          <div className="section_content">&bull; 1번 사항1번 사항1번 사항1번 사항1번 사항1번 사항1번 사항1번 사항</div>
          <div className="section_content">&bull; 2번 사항2번 사항2번 사항2번 사항2번 사항2번 사항2번 사항2번 사항</div>
          <div className="section_content">&bull; 3번 사항3번 사항3번 사항3번 사항</div>
        </div>

        <div className="third_section">
          <div className="section_title">중요 멘트</div>
          <div className="content">
            <div className='gray_box'></div>
            <div className='third_section_content'>본문을 입력해 주세요.본문을 입력해 주세요.본문을 입력해 주세요.본문을 입력해 주세요.본문을 입력해 주세요.본문을 입력해 주세요.본문을 입력해 주세요.본문을 입력해 주세요.본문을 입력해 주세요.본문을 입력해 주세요.본문을 입력해 주세요.본문을 입력해 주세요.</div>
          </div>
        </div>

        <div className="btn_section">
          <button onClick={confirmbtn} className="start_btn">시작하기</button>
        </div>
      </div>
    </>
  )
}

export default EssayEval