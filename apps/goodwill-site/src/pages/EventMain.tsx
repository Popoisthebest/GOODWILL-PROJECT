import "../styles/EventMain.css";
import aws from "../icons/aws.svg";
import google from "../icons/google.svg";
import microsoft from "../icons/microsoft.svg";
import ksf from "../icons/ksf.svg";
import sparta from "../icons/sparta.svg"
import startup from "../icons/startup.svg"
import he from "../icons/he.svg"
import React, { useState, useRef, useEffect } from 'react';

const EventMain = () => {

  return (
    <div className="main_box">
      <div className="first_content">
        <div className="first_content_title">GOODWILL<br />EVENT</div>
        <div className="first_content_subtitle">함께하는 특별한 경험 🚀</div>
        <div className="first_content_subtitlemini">
          Goodwill에서는 학생 참여형 행사를 통해 다양한 경험과 기회를 제공합니다.<br />
          실전 창업 프로젝트, 디자인 챌린지, 네트워킹 등 흥미로운 프로그램을 만나보세요.
        </div>
        <div className="first_content_subtitle1">GOODWILL 파트너스 👬</div>
        <div className="partners_images">
          <img className="google" src={google} alt="" />
          <img className="microsoft" src={microsoft} alt="" />
          <img className="aws" src={aws} alt="" />
          <img className="ksf" src={ksf} alt="" />
        </div>
        <div className="join_btn">GOODWILL CONCERT 신청하기</div>
      </div>

      <div className="main_content"></div>

      <div className="last_content">
        <img className="content_iiiiii" src={he} alt="" />
        <img className="content_iiiiii" src={sparta} alt="" />
        <img className="content_iiiiii" src={startup} alt="" />
      </div>
    </div>
  );
};

export default EventMain;
