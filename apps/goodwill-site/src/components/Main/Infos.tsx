import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom'; 

type FooterProps = {
  className?: string;
};

const Footer: React.FC<FooterProps> = ({ className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/article'); // 버튼 클릭 시 /article 페이지로 이동
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <FooterContainer className={className}>
      <ContentWrapper>
        <LeftSection>
          <Address>
            <AddressLine>대전광역시</AddressLine>
            <AddressLine>서구</AddressLine>
            <AddressLine>오량길 98,</AddressLine>
            <AddressLine>대전대신고등학교</AddressLine>
          </Address>
        </LeftSection>

        <CenterSection>
          <ContactInfo>
            <Title>CEO</Title>
            <Name>고승한</Name>
            <ContactDetail>M. 010-4294-1083</ContactDetail>
            <ContactDetail>E. s.h.putrats@wearegoodwill.kro.kr</ContactDetail>
          </ContactInfo>

          <ContactInfo>
            <Title>COO</Title>
            <Name>이현서</Name>
            <ContactDetail>M. 010-2933-2845</ContactDetail>
            <ContactDetail>E. gw.hs@wearegoodwill.kro.kr</ContactDetail>
          </ContactInfo>
        </CenterSection>

        <RightSection>
          <SectionTitle>Discover more</SectionTitle>
          <BrandName>About GOODWILL</BrandName>
          
          <ButtonsContainer onClick={handleClick}>
            <ArticleButton>GO TO GOODWILL'S ARTICLE</ArticleButton>
            <InstagramLink
            href="https://www.instagram.com/wearegoodwill/?__pwa=1" 
            target="_blank" 
            rel="noopener noreferrer"
            >
              <DiagonalArrowIcon 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M7 17L17 7" 
                  stroke="black" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M7 7H17V17" 
                  stroke="black" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </DiagonalArrowIcon>
              GOODWILL Instagram
            </InstagramLink>
          </ButtonsContainer>
        </RightSection>
      </ContentWrapper>

      <BottomSection>
        <Copyright>© 2025 GOODWILL Corp. All rights reserved.</Copyright>
        
        <ScrollTopButton onClick={scrollToTop}>
          <ArrowIconSVG 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 18L12 6"
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M6 12L12 6L18 12" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </ArrowIconSVG>
        </ScrollTopButton>
      </BottomSection>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 100px 50px 30px 50px;
  font-family: 'Pretendard', sans-serif;
  position: relative;
  background-color: #fff;
  color: #000;
  width: 85vw;
  min-height: 600px;

  @media (max-width: 1200px) {
    padding: 80px 40px;
    width: 90vw;
  }

  @media (max-width: 768px) {
    padding: 60px 30px;
    width: 95vw;
  }

  @media (max-width: 480px) {
    padding: 40px 20px;
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  
  @media (max-width: 1024px) {
    gap: 50px;
  }
`;

const DiagonalArrowIcon = styled.svg`
  margin-right: 10px;
  width: 32px;
  height: 32px;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  min-width: 200px;

  @media (max-width: 1024px) {
    flex: 100%;
    order: 1;
  }
`;

const Address = styled.div`
  font-size: 24px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const AddressLine = styled.p`
  margin: 0;
`;

const CenterSection = styled.div`
  flex: 1;
  min-width: 200px;

  @media (max-width: 1024px) {
    flex: 100%;
    order: 2;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 5px 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Name = styled.p`
  font-size: 24px;
  margin: 0 0 5px 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const ContactDetail = styled.p`
  font-size: 24px;
  margin: 0 0 5px 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const RightSection = styled.div`
  flex: 1.5;
  min-width: 300px;

  @media (max-width: 1024px) {
    flex: 100%;
    order: 3;
  }
`;

const SectionTitle = styled.h2`
  font-size: 68px;
  font-weight: bold;
  margin: 0 0 10px 0;

  @media (max-width: 1200px) {
    font-size: 56px;
  }

  @media (max-width: 768px) {
    font-size: 42px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const BrandName = styled.h2`
  font-size: 68px;
  font-weight: bold;
  margin: 0 0 20px 0;

  @media (max-width: 1200px) {
    font-size: 56px;
  }

  @media (max-width: 768px) {
    font-size: 42px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ArticleButton = styled.button`
  border: 1px solid #000;
  background: none;
  padding: 15px 20px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  width: 100%;
  max-width: 350px;
  border-radius: 5px;
  text-align: left;
  &:hover {
    background-color: #000;
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 12px 16px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 10px 12px;
    max-width: 100%;
  }
`;

const InstagramLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 28px;
  text-decoration: none;
  color: #000;
  margin-top: 10px;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: auto;
  position: relative;
`;

const Copyright = styled.div`
  font-size: 24px;
  margin-top: 100px;

  @media (max-width: 1024px) {
    margin-top: 80px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 60px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-top: 40px;
  }
`;

const ScrollTopButton = styled.button`
  position: fixed;
  z-index: 2;
  bottom: 0;
  right: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  transform: translateY(-50px) translateX(-50px);
  &:hover {
    background-color: #333;
  }

  @media (max-width: 1024px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

const ArrowIconSVG = styled.svg`
  width: 60px;
  height: 70px;

  @media (max-width: 1024px) {
    width: 50px;
    height: 60px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 50px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 40px;
  }
`;

export default Footer;