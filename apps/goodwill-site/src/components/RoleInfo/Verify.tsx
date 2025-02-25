import { useNavigate } from 'react-router-dom'
import '../../styles/Verify.css'

const Verify = () => {

  const navigate = useNavigate();

  const startbtn = () => {
    navigate('/evalcontent')
  }

  return (
    <>
      <div className="main_box">
        <div className="first_child">
          <div className="sub_text">GOODWILL Corp.</div>
          <div className="sub_text">논술 평가 수험자 인증 절차</div>
        </div>
        <div className="sec_child">
          <div className="sec_child_text">신원확인</div>
          <input className='sec_child_ipb' placeholder='수험번호' type="text" />
        </div>
          <button onClick={startbtn} className="start_btn">시작하기</button>
      </div>
    </>
  )
}

export default Verify