import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "@emotion/styled";

import { useNavigate } from "react-router-dom";

// 미디어 쿼리를 위한 브레이크포인트 정의
const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1200px",
};

const LandingSection = styled.div`
  position: relative;
  width: 100%;
  height: 130vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const TopContentWrapper = styled(motion.div)`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  padding: 20px;

  position: relative;
  flex-direction: column;
  z-index: 10;
  top: 200px;

  @media (max-width: ${breakpoints.tablet}) {
    top: 100px;
    height: 20vh;
  }

  @media (max-width: ${breakpoints.mobile}) {
    top: 50px;
    padding: 10px;
  }
`;

const TopTitle1 = styled.h1`
  font-size: 128px;
  font-family: "Aeonik TRIAL";
  font-weight: 400;
  font-weight: bold;
  color: black;
  text-align: right;
  line-height: 110%;
  letter-spacing: -3.2px;
  transform: translateX(-250px);
  margin-bottom: 70px;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 100px;
    transform: translateX(-150px);
  }

  @media (max-width: ${breakpoints.laptop}) {
    font-size: 80px;
    transform: translateX(-100px);
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 60px;
    transform: translateX(-50px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 36px;
    transform: translateX(-20px);
    letter-spacing: -1.5px;
  }
`;

const TopTitle2 = styled.h2`
  font-size: 128px;
  font-family: "Aeonik TRIAL";
  font-weight: 400;
  font-weight: bold;
  color: black;
  text-align: left;
  line-height: 110%;
  letter-spacing: -3.2px;
  transform: translateX(100px) translateY(-200px);

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 100px;
    transform: translateX(80px) translateY(-150px);
  }

  @media (max-width: ${breakpoints.laptop}) {
    font-size: 80px;
    transform: translateX(60px) translateY(-120px);
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 60px;
    transform: translateX(40px) translateY(-80px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 36px;
    transform: translateX(20px) translateY(-50px);
    letter-spacing: -1.5px;
  }
`;

const MainContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;
  padding: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    height: auto;
    flex-direction: column;
    padding: 1rem;
  }
`;

const SVGContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
`;

const VideoContainer = styled(motion.div)`
  position: absolute;
  left: 10%;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1000;
  transform: translateY(200px);

  @media (max-width: ${breakpoints.tablet}) {
    position: relative;
    left: 0;
    width: 90% !important;
    margin: 0 auto;
    transform: translateY(100px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    transform: translateY(50px);
    border-radius: 8px;
  }
`;

const TextSection = styled(motion.div)`
  position: absolute;
  right: 10%;
  z-index: 6;
  width: 40%;
  text-align: left;

  @media (max-width: ${breakpoints.laptop}) {
    width: 45%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    position: relative;
    right: 0;
    width: 90%;
    margin: 250px auto 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin: 150px auto 0;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
  transform: translateY(70px);

  @media (max-width: ${breakpoints.tablet}) {
    transform: translateY(0);
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.875rem;
  }
`;

const ButtonContainer = styled(motion.div)`
  position: absolute;
  right: 39%;
  bottom: 20%;
  z-index: 50;
  top: 400px;

  @media (max-width: ${breakpoints.laptop}) {
    right: 35%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    position: relative;
    right: auto;
    bottom: auto;
    top: auto;
    margin: 50px auto;
    text-align: center;
    width: 100%;
  }
`;

const BetterWorldLanding: React.FC = () => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [pathData, setPathData] = useState<string | null>(null);
  const [viewBox, setViewBox] = useState<string>("0 0 500 500");
  const [isMobile, setIsMobile] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    // 반응형을 위한 윈도우 크기 감지
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    fetch("assets/img/Vector 1.svg")
      .then((response) => response.text())
      .then((svgText) => {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgText, "image/svg+xml");

        const firstPath = svgDoc.querySelector("path");
        const svgElement = svgDoc.querySelector("svg");

        if (firstPath && svgElement) {
          setPathData(firstPath.getAttribute("d"));

          const viewBoxAttr = svgElement.getAttribute("viewBox");
          if (viewBoxAttr) {
            setViewBox(viewBoxAttr);
          }
        }
      })
      .catch((error) => console.error("Error fetching SVG:", error));
  }, []);

  const AboutButton: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate(); // 페이지 이동을 위한 훅

    const isMobile = window.innerWidth <= 768;

    const handleMouseEnter = () => {
      if (!isMobile) setIsHovered(true);
    };

    const handleMouseLeave = () => {
      if (!isMobile) setIsHovered(false);
    };

    const handleTouchStart = () => {
      if (isMobile) {
        setIsHovered(true);
        setTimeout(() => setIsHovered(false), 500);
      }
    };

    const handleClick = () => {
      navigate("/about"); // About 페이지로 이동
    };

    return (
      <div
        style={{ display: "inline-block", position: "relative", zIndex: 50 }}
      >
        <motion.button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? "8px 16px" : "12px 24px",
            backgroundColor: "white",
            borderRadius: "9999px",
            border: "none",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            position: "relative",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: isMobile ? "16px" : "18px",
            zIndex: 50,
            width: "180px",
            height: "50px",
            overflow: "hidden",
          }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onClick={handleClick} // 클릭 시 페이지 이동
        >
          {/* 점을 배경 원으로 활용 */}
          <motion.div
            initial={{
              width: 8,
              height: 8,
              backgroundColor: "#000",
              borderRadius: "50%",
              left: "20px", // 초기 위치를 왼쪽으로 설정
              top: "50%",
              transform: "translateY(-50%)",
            }}
            animate={{
              width: isHovered ? "400px" : 8,
              height: isHovered ? "400px" : 8,
              left: isHovered ? "-50%" : "20px", // hover 시 중앙으로 이동
              backgroundColor: isHovered ? "rgba(5, 48, 140, 1)" : "#000",
              borderRadius: isHovered ? "9999px" : "50%",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            style={{
              position: "absolute",
              zIndex: 51,
              transformOrigin: "center",
              top: "50%",
            }}
          />

          {/* 텍스트 */}
          <motion.span
            animate={{
              color: isHovered ? "#ffffff" : "#000000",
              x: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.2 }}
            style={{
              position: "relative",
              zIndex: 52,
              whiteSpace: "nowrap",
            }}
          >
            ABOUT US
          </motion.span>

          {/* 화살표 애니메이션 */}
          <motion.div
            initial={{
              x: 20,
              opacity: 0,
              width: 0,
            }}
            animate={{
              x: isHovered ? 0 : 20,
              opacity: isHovered ? 1 : 0,
              width: isHovered ? "auto" : 0,
            }}
            transition={{ duration: 0.2 }}
            style={{
              marginLeft: isHovered ? "12px" : "0px",
              display: "flex",
              alignItems: "center",
              zIndex: 52,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "#ffffff" }}
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.button>
      </div>
    );
  };

  // 스크롤 애니메이션을 위한 값 계산
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 20%", "end end"],
  });

  // 모바일과 데스크탑을 위한 다른 애니메이션 값
  const pathLength = useTransform(scrollYProgress, [0, 3], [0, 3]);

  const videoWidth = useTransform(
    scrollYProgress,
    [0.6, 1],
    isMobile ? ["90%", "90%"] : ["35%", "80%"]
  );

  const videoHeight = useTransform(
    scrollYProgress,
    [0.6, 1],
    isMobile ? ["40px", "40vh"] : ["40px", "75vh"]
  );

  // 공통 애니메이션 컨트롤러
  const elementOpacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);
  const elementX = useTransform(
    scrollYProgress,
    [0.5, 1],
    isMobile ? ["0%", "-5%"] : ["0%", "-20%"]
  );

  const topContentInitialX = useTransform(
    scrollYProgress,
    [0, 0.85],
    isMobile ? ["0%", "5%"] : ["0%", "10%"]
  );

  const videoY = useTransform(
    scrollYProgress,
    [0.6, 0.7, 1],
    isMobile ? [100, 100, 140] : [200, 200, 360]
  );
  
  // 동영상이 커졌는지 확인하는 값 (예: 스크롤 프로그레스가 0.85 이상일 때)
  const isVideoFullSize = useTransform(
    scrollYProgress,
    (value) => value >= 0.85
  );

  // 동영상 크기 변화 감지 및 재생 제어
  useEffect(() => {
    const unsubscribe = isVideoFullSize.onChange((isFullSize) => {
      if (videoRef.current) {
        if (isFullSize && videoReady) {
          videoRef.current.play().catch(err => {
            console.error("비디오 재생 실패:", err);
          });
        } else {
          videoRef.current.pause();
        }
      }
    });

    return unsubscribe;
  }, [isVideoFullSize, videoReady]);

  return (
    <LandingSection ref={ref}>
      <SVGContainer>
        {pathData && (
          <motion.svg
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            <motion.path
              d={pathData}
              fill="none"
              stroke="rgba(151, 164, 213, 1)"
              strokeWidth={isMobile ? "10" : "20"}
              initial={{ pathLength: 0 }}
              style={{ pathLength }}
            />
          </motion.svg>
        )}
      </SVGContainer>

      <TopContentWrapper
        style={{
          x: topContentInitialX,
          opacity: elementOpacity,
        }}
      >
        <TopTitle1>Better World</TopTitle1>
        <TopTitle2>Brighter Tomorrow</TopTitle2>
      </TopContentWrapper>

      <MainContentWrapper>
        <VideoContainer
          style={{
            width: videoWidth,
            height: videoHeight,
            y: videoY,
          }}
        >
          <motion.video
            ref={videoRef}
            src={""}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            muted
            loop
            playsInline // 모바일에서 인라인 재생을 위해 추가
            preload="auto"
            onLoadedData={() => setVideoReady(true)}
          />
        </VideoContainer>

        <TextSection style={{ opacity: elementOpacity, x: elementX }}>
          <Description>
            GOODWILL(KE)은 Establishing a student-led company that cares for
            people and society(사람과 사회를 위한 학생 주도의 기업 운영)를 통해
            Better World, Brighter Tomorrow(더 나은 세상, 더 나은 내일)를 만들어
            가고 있습니다. 이를 바탕으로 GOODWILL만의 문화를 형성하고 능동적
            기업 운영을 통해 2015년부터 대전대신고 내에서 꾸준히 최고의 실적을
            도출해 내며 끊임없이 발전과 변화를 꾀하고 있습니다.
          </Description>
        </TextSection>

        <ButtonContainer style={{ opacity: elementOpacity, x: elementX }}>
          <AboutButton />
        </ButtonContainer>
      </MainContentWrapper>
    </LandingSection>
  );
};

export default BetterWorldLanding;