import { useEffect, useRef } from "react";
import title from "../../images/favorite_text1.png";
import description from "../../images/favorite_text2.png";
import CustomButton from "../CustomButton";

const FickYourFavoriteSection = () => {

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
    }
    window.addEventListener("scroll",handleScroll);
  },[]);

  return (
    <section className="pick-your-favorite scroll-spy" ref={sectionRef}>
      <div className="inner">
        <div className="text-group">
          <img className="title back-to-position to-right delay-0" src={title} alt="TITLE"/>
          <img className="description back-to-position to-right delay-1" src={description} alt="DESCRIPTION"/>
          <div className="more back-to-position to-right delay-2">
            <CustomButton colorType="white">자세히 보기</CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FickYourFavoriteSection;