import { useState } from "react";
import "../../css/footer.css";
import CustomButton from "../CustomButton";
import logo from "../../images/starbucks_logo_only_text.png"

const Footer = () => {

  const [year] = useState(2024);

  return (
    <footer>
      <div className="inner">
        <ul className="menu">
          <li>
            <a className="green" href="#none">개인정보처리방침</a>
          </li>
          <li>
            <a href="#none">영상정보처리기기 운영관리 방침</a>
          </li>
          <li>
            <a href="#none">홈페이지 이용약관</a>
          </li>
          <li>
            <a href="#none">위치정보 이용약관</a>
          </li>
          <li>
            <a href="#none">스타벅스 카드 이용약관</a>
          </li>
          <li>
            <a href="#none">윤리경영 핫라인</a>
          </li>
        </ul>
        <div className="btn-group">
          <CustomButton colorType="white">찾아오시는 길</CustomButton>
          <CustomButton colorType="white">신규입점제의</CustomButton>
          <CustomButton colorType="white">사이트 맵</CustomButton>
        </div>
        <div className="info">
          <span>사업자 등록 번호 201-81-21515</span>
          <span>(주)스타벅스 코리아 대표이사 이석구</span>
          <span>TEL : 02) 3015-1100 / FAX : 02) 3015-1106</span>
          <span>개인정보 책임자 : 강기원</span>
        </div>
        <div className="copyright">
          <p>&copy; <span className="this-year">{year}</span> Starbucks Coffee Company. All Rights Reserved.</p>
          <img className="logo" src={logo} alt="LOGO"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;