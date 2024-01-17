import titleImage from "../../images/visual_title.png";
import CustomButton from "../CustomButton";
import "../../css/section.css";
import cup1 from "../../images/visual_cup1.png";
import text1 from "../../images/visual_cup1_text.png";
import cup2 from "../../images/visual_cup2.png";
import text2 from "../../images/visual_cup2_text.png";
import spoon from "../../images/visual_spoon.png";
import { useEffect } from "react";
import gsap from "gsap";

const VisualSection = () => {
  useEffect(() => {
    const fadeEls = document.querySelectorAll('.visual .fade-in');
    fadeEls.forEach((item,index) => {
      gsap.fromTo(item, {opacity: 0}, {
        delay: (index + 1) * .7,
        opacity: 1
      });
    });
  },[]);
  return (
    <section className="visual">
      <div className="inner">
        <div className="title fade-in">
          <img src={titleImage} alt="STARBUCKS DELIGHTFUL START TO THE YEARS"/>
          <CustomButton colorType="brown">자세히 보기</CustomButton>
        </div>
        <div className="fade-in">
          <img className="cup1 image" src={cup1} alt="NEW OATMEAL LATTE"/>
          <img className="cup1 text" src={text1} alt="오트밀 라떼"/>
        </div>
        <div className="fade-in">
          <img className="cup2 image" src={cup2} alt="NEW STARBUCKS CRAMEL MOCHA"/>
          <img className="cup2 text" src={text2} alt="스타벅스 카라멜 크럼블 모카"/>
        </div>
        <div className="fade-in">
        <img className="spoon" src={spoon} alt="Spoon"/>
        </div>
      </div>
    </section>
  );
}

export default VisualSection;