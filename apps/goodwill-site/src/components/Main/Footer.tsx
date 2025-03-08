import React from "react";
import { css } from "@emotion/react";

const Container = css`
  background: #181818;
  color: white;
  padding: 40px;
  text-align: center;
`;

const Title = css`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Subtitle = css`
  font-size: 14px;
  margin-bottom: 24px;
`;

const ProgressContainer = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 14px;
  margin-top: 16px;
`;

const ProgressBar = css`
  width: 100px;
  height: 2px;
  background: gray;
  margin-left: 8px;
  position: relative;
  &:after {
    content: "";
    width: 30px;
    height: 2px;
    background: blue;
    position: absolute;
    left: 0;
  }
`;

const FooterContainer = css`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background: #f9fafb;
  color: #1f2937;
  font-size: 14px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ContactInfo = css`
  margin-bottom: 20px;
`;

const Newsletter = css`
  text-align: right;
`;

const ButtonBox = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 16px;
`;

const LinkButton = css`
  display: inline-block;
  padding: 8px 16px;
  border: 1px solid #1f2937;
  border-radius: 8px;
  text-decoration: none;
  color: #1f2937;
  font-weight: 500;
  margin-top: 8px;
`;

const GoodwillSection: React.FC = () => {
  return (
    <div css={Container}>
      <p css={Subtitle}>KEEP SCROLLING TO LEARN MORE</p>
      <h2 css={Title}>WE ARE GOODWILL</h2>
      <div css={ProgressContainer}>
        Next Page <span css={ProgressBar}></span> →
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer css={FooterContainer}>

      <div css={ContactInfo}>
        <p>대전광역시 서구 오량1길 98, 대전대신고등학교</p>
        <p><strong>CEO</strong> 고승한</p>
        <p>M. 010-4294-1083</p>
        <p>E. s.h.putrats@wearegoodwill.kro.kr</p>
        <p><strong>COO</strong> 이현서</p>
        <p>M. 010-2933-2845</p>
        <p>E. gw.hs@wearegoodwill.kro.kr</p>
      </div>
      <div css={Newsletter}>
        <h2>Check out our newsletter</h2>
        <div css={ButtonBox}>
          <a href="#" css={LinkButton}>GO TO GOODWILL’S ARTICLE</a>
          <a href="#" css={LinkButton}>↗ GOODWILL Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

