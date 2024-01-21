import { useEffect, useRef } from "react";
import floating3 from "../../images/floating3.png";
import productImage from "../../images/season_product_image.png";
import seasonProductText1 from "../../images/season_product_text1.png";
import seasonProductText2 from "../../images/season_product_text2.png";
import CustomButton from "../CustomButton";

const SeasonProductSection = () => {

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const top = sectionRef.current?.offsetTop;
      const scrollPosition = window.scrollY;
      if(scrollPosition + 400 >= (top??-1)) {
        sectionRef.current?.classList.add("show");
      }else {
        sectionRef.current?.classList.remove("show");
      }
    };
    window.addEventListener("scroll",handleScroll);
  },[]);

  return (
    <section ref={sectionRef} className="season-product scroll-spy">
      <div className="inner">
        <img className="floating floating3" src={floating3} alt="Icon"/>
        <img className="product back-to-position to-right delay-0" src={productImage} alt="PRODUCT"/>
        <div className="text-group">
          <img className="title back-to-position to-left delay-1" src={seasonProductText1} alt="Icon"/>
          <img className="description back-to-position to-left delay-2" src={seasonProductText2} alt="DESCRIPTION"/>
          <div className="more back-to-position to-left delay-3">
            <CustomButton>자세히 보기</CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonProductSection;