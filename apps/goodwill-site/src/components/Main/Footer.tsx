import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";

// AboutFooter container with overflow control
const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: white;
  padding: 2rem 0;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  box-sizing: border-box;
  margin: calc(-50vw + 50%);
  width: 100vw;
  
`;

// Inner container to control content positioning
const InnerContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 5%;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 4%;
  }

  @media (max-width: 480px) {
    padding: 0 3%;
  }
`;

// Top section with "KEEP SCROLLING" text
const ScrollPrompt = styled.div`
  font-size: 0.75rem;
  letter-spacing: 1px;
  position: relative;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.65rem;
    margin-bottom: 1.2rem;
  }

  p {
    margin: 0;
  }
`;

// Main heading
const BrandHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  margin: 0 0 3rem 0;
  letter-spacing: 1px;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
    margin: 0 0 2.5rem 0;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin: 0 0 2rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin: 0 0 1.5rem 0;
  }
`;

// Next page navigation - 주석 처리된 부분도 반응형으로 수정
/*
const NextPageNav = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 2rem;
  right: 5%;

  @media (max-width: 768px) {
    top: 1.5rem;
    right: 4%;
  }

  @media (max-width: 480px) {
    top: 1rem;
    right: 3%;
  }
`;

// Next page text
const NextPageText = styled.span`
  margin-right: 50px;

  @media (max-width: 768px) {
    margin-right: 30px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    margin-right: 15px;
    font-size: 0.8rem;
  }
`;

// Progress bar container
const ProgressBarContainer = styled.div`
  width: 180px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.2);
  margin-right: 1rem;
  position: relative;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 120px;
    height: 3px;
    margin-right: 0.8rem;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 2px;
    margin-right: 0.5rem;
  }
`;

// Progress bar fill with transition
interface ProgressBarFillProps {
  progress: number;
}

const ProgressBarFill = styled.div<ProgressBarFillProps>`
  height: 100%;
  width: ${props => `${props.progress}%`};
  background-color: #3b82f6;
  transition: width ${props => props.progress >= 100 ? '0.3s' : '3s'} ease-out;
`;

// Arrow icon
const ArrowIcon = styled.span`
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
*/

// Plus sign buttons
const PlusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 1rem;
  }
`;

const PlusButton = styled.div`
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

interface FooterProps {
  className?: string;
  onNavigateNext?: () => void;
  nextPageUrl?: string;
}

const Footer: React.FC<FooterProps> = ({
  className,
  onNavigateNext,
  // nextPageUrl = '/team-and-culture'
}) => {
  const [progress, setProgress] = useState(0);
  const [isBottomReached, setIsBottomReached] = useState(false);
  const [isOverscrolling, setIsOverscrolling] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 페이지 이동 함수
  const navigateToNextPage = () => {
    if (onNavigateNext) {
      onNavigateNext();
    } else {
      // window.location.href = nextPageUrl;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 위치 계산
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
      );

      // 페이지 하단에 도달했는지 확인
      const reachedBottom = scrollTop + windowHeight >= documentHeight - 10;

      if (reachedBottom && !isBottomReached) {
        setIsBottomReached(true);
        // 하단에 도달하면 3초 동안 바를 채움
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        // 프로그레스 바 초기화
        setProgress(0);

        // 3초 동안 서서히 100%까지 채움
        const startTime = Date.now();
        const duration = 3000; // 3초

        const animateProgress = () => {
          const currentTime = Date.now();
          const elapsed = currentTime - startTime;
          const newProgress = Math.min((elapsed / duration) * 100, 100);

          setProgress(newProgress);

          if (newProgress < 100) {
            requestAnimationFrame(animateProgress);
          } else if (newProgress >= 100) {
            // 100%에 도달하면 다음 페이지로 이동
            timeoutRef.current = setTimeout(() => {
              navigateToNextPage();
            }, 300);
          }
        };

        requestAnimationFrame(animateProgress);
      } else if (!reachedBottom && isBottomReached) {
        // 바닥에서 벗어나면 상태 초기화
        setIsBottomReached(false);
        setProgress(0);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      }

      // 오버스크롤 감지 (하단에 도달한 상태에서 더 스크롤 하려는 시도)
      if (reachedBottom) {
        // 마지막 스크롤 위치와 현재 스크롤 위치를 비교
        const isAttemptingOverscroll =
          scrollTop + windowHeight >= documentHeight;

        if (isAttemptingOverscroll) {
          setIsOverscrolling(true);
          // 오버스크롤 시 더 빠르게 진행
          setProgress(Math.min(progress + 5, 100));

          if (progress >= 100) {
            navigateToNextPage();
          }
        } else {
          setIsOverscrolling(false);
        }
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 터치 이벤트로 오버스크롤 감지 (모바일)
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
      );

      // 바닥에 도달한 상태에서 위로 스와이프하는 경우
      if (
        scrollTop + windowHeight >= documentHeight - 10 &&
        touchY < touchStartY
      ) {
        setIsOverscrolling(true);
        // 스와이프 거리에 비례하여 프로그레스 바 채움
        const swipeDistance = touchStartY - touchY;
        const additionalProgress = Math.min((swipeDistance / 50) * 10, 30); // 최대 30% 추가

        setProgress(Math.min(progress + additionalProgress, 100));

        if (progress >= 100) {
          navigateToNextPage();
        }
      }
    };

    const handleTouchEnd = () => {
      setIsOverscrolling(false);
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    // 클린업 함수
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isBottomReached, isOverscrolling, onNavigateNext, progress]);

  return (
    <FooterContainer className={className}>
      <InnerContainer>
        <ScrollPrompt>
          <p>KEEP SCROLLING</p>
          <p>TO LEARN MORE</p>
        </ScrollPrompt>

        <BrandHeading>WE ARE GOODWILL</BrandHeading>

        {/*<NextPageNav>*/}
        {/*  <NextPageText>Next Page</NextPageText>*/}
        {/*  <ProgressBarContainer>*/}
        {/*    <ProgressBarFill progress={progress} />*/}
        {/*  </ProgressBarContainer>*/}
        {/*  <ArrowIcon>→</ArrowIcon>*/}
        {/*</NextPageNav>*/}

        <PlusContainer>
          <PlusButton>+</PlusButton>
          <PlusButton>+</PlusButton>
          <PlusButton>+</PlusButton>
          <PlusButton>+</PlusButton>
          <PlusButton>+</PlusButton>
        </PlusContainer>
      </InnerContainer>
    </FooterContainer>
  );
};

export default Footer;