import { useNavigate } from 'react-router-dom'
import '../../styles/Verify.css'
import { useState } from 'react';

const Verify = () => {

  // 수험번호 목록 state
  const [examNumbers] = useState<string[]>(['12e34',]);
  const [inputNumber, setInputNumber] = useState<string>(''); 

  //input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputNumber(e.target.value);
  };

  //btn
  const navigate = useNavigate();

  const startbtn = () => {
    if (examNumbers.includes(inputNumber)) {
      alert('확인되었습니다.');
      navigate('/evalcontent')
    } else {
      alert('수험번호가 일치하지 않습니다.');
    }

  }

  return (
    <>
      <div className="main_box">
        <div className="first_child">
          <div className="sub_text2">GOODWILL Corp.</div>
          <div className="sub_text2">논술 평가 수험자 인증 절차</div>
        </div>
        <div className="sec_child">
          <div className="sec_child_text">신원확인</div>
          <input value={inputNumber} onChange={handleInputChange} className='sec_child_ipb' placeholder='수험번호' type="text" />
        </div>
          <button onClick={startbtn} className="start_btn">시작하기</button>
      </div>
    </>
  )
}

export default Verify