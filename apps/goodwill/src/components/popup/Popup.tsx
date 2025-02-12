import { useState, useEffect } from "react";
import "/src/styles/popup.css";

const Popup = ({ imageUrl }: { imageUrl: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hidePopup = localStorage.getItem("hidePopup");
    if (!hidePopup) {
      setIsVisible(true);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  const hideForToday = () => {
    localStorage.setItem("hidePopup", new Date().toISOString().split("T")[0]);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <img src={imageUrl} alt="Popup Image" className="popup-image" />
        <div className="popup-buttons">
          <button onClick={hideForToday}>오늘 하루 안 보기</button>
          <button onClick={closePopup}>닫기</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
