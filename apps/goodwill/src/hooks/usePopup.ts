import { useState, useEffect } from "react";

export const usePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hidePopupDate = localStorage.getItem("hidePopup");
    const today = new Date().toISOString().split("T")[0];

    if (hidePopupDate !== today) {
      setIsVisible(true);
    }
  }, []);

  const hideForToday = () => {
    localStorage.setItem("hidePopup", new Date().toISOString().split("T")[0]);
    setIsVisible(false);
  };

  return { isVisible, hideForToday, setIsVisible };
};
