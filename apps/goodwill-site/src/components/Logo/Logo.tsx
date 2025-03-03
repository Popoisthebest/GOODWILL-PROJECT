import { useState, useEffect, useRef } from "react";
import blackLogo from "../../assets/logo/GOODWILL-black-logo.svg"; // 블랙 로고
import whiteLogo from "../../assets/logo/GOODWILL-white-logo.svg"; // 화이트 로고
import { headerLogoStyle } from "../Header/Header.style.ts";

const Logo = () => {
    const [logo, setLogo] = useState(blackLogo);
    const logoRef = useRef<HTMLImageElement>(null); // 로고 요소 참조

    useEffect(() => {
        const checkBackground = () => {
            if (!logoRef.current) return;

            let currentElement: HTMLElement | null = logoRef.current;
            let bgColor = "rgba(0, 0, 0, 0)"; // 기본값 (투명)

            // 부모 요소를 계속 탐색하며 배경색이 지정된 요소 찾기
            while (currentElement && bgColor === "rgba(0, 0, 0, 0)") {
                currentElement = currentElement.parentElement;
                if (currentElement) {
                    bgColor = getComputedStyle(currentElement).backgroundColor;
                }
            }

            // 배경색이 투명하면 `document.body`의 배경색 확인
            if (bgColor === "rgba(0, 0, 0, 0)") {
                bgColor = getComputedStyle(document.body).backgroundColor;
            }

            console.log("로고 뒤 배경색:", bgColor);

            const rgb = bgColor.match(/\d+/g)?.map(Number);
            if (rgb) {
                const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
                setLogo(brightness < 128 ? whiteLogo : blackLogo);
            }
        };

        checkBackground();
        window.addEventListener("resize", checkBackground);

        return () => {
            window.removeEventListener("resize", checkBackground);
        };
    }, []);

    return <img ref={logoRef} src={logo} alt="GOODWILL logo" css={headerLogoStyle} />;
};

export default Logo;
