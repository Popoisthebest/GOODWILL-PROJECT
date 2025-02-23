import { useState, useEffect } from 'react'
import '../../styles/EssayEvalContent.css'

const EssayEvalContent = () => {
  const [time, setTime] = useState(20 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const formatTime = (seconds:number) : string => {
    const min = Math.floor(seconds/60);
    const sec = seconds % 60;
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <div className='wrapper'>
      <div className='timer'>
        <div className='timer_text'>{formatTime(time)}</div>
      </div>
      <div className="main_content">
        <div className="progress_bar">
          0%
        </div>
        <div className="progress_content">
          논술평가
        </div>
      </div>
      <div className="memo_section">
        <textarea name="" id=""></textarea>
      </div>
    </div>
  )
}

export default EssayEvalContent