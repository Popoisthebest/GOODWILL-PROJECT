import React from 'react';
import styled from '@emotion/styled';

// Define types for our props
type FooterProps = {
  className?: string;
};

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <FooterContainer className={className}>
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
        
        <ButtonsContainer>
          <ArticleButton>GO TO GOODWILL'S ARTICLE</ArticleButton>
          <InstagramLink>
            <ArrowIcon>↗</ArrowIcon>
            GOODWILL Instagram
          </InstagramLink>
        </ButtonsContainer>
      </RightSection>

      <Copyright>© 2025 GOODWILL Corp. All rights reserved.</Copyright>

      <ScrollTopButton>
        <ArrowUp>↑</ArrowUp>
      </ScrollTopButton>
    </FooterContainer>
  );
};


const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  padding: 100px;
  font-family: 'Arial', sans-serif;
  position: relative;
  background-color: #fff;
  color: #000;
`;

const LeftSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 30px;
`;

const Address = styled.div`
  font-size: 24px;
  line-height: 1.5;
`;

const AddressLine = styled.p`
  margin: 0;
`;

const CenterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 30px;
`;

const ContactInfo = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 8px 0;
`;

const Name = styled.p`
  font-size: 24px;
  margin: 0 0 8px 0;
`;

const ContactDetail = styled.p`
  font-size: 24px;
  margin: 0 0 4px 0;
`;

const RightSection = styled.div`
  flex: 1.5;
  min-width: 300px;
`;

const SectionTitle = styled.h2`
  font-size: 68px;
  font-weight: bold;
  margin: 0 0 8px 0;
`;

const BrandName = styled.h2`
  font-size: 68px;
  font-weight: bold;
  margin: 0 0 30px 0;
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
`;

const InstagramLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 28px;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  margin-top: 10px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ArrowIcon = styled.span`
  margin-right: 10px;
  font-size: 32px;
`;

const Copyright = styled.div`
  width: 100%;
  font-size: 24px;
  margin-top: 40px;
`;

const ScrollTopButton = styled.button`
  position: absolute;
  bottom: 40px;
  right: 60px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #555;
  }
`;

const ArrowUp = styled.span`
  font-size: 40px;
`;

export default Footer;