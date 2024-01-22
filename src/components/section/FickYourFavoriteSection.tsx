import title from "../../images/favorite_text1.png";
import description from "../../images/favorite_text2.png";
import CustomButton from "../CustomButton";
import ScrollSpySection from "./ScrollSpySection";

const FickYourFavoriteSection = () => {

  return (
    <ScrollSpySection classList={["pick-your-favorite"]}>
      <div className="inner">
        <div className="text-group">
          <img className="title back-to-position to-right delay-0" src={title} alt="TITLE"/>
          <img className="description back-to-position to-right delay-1" src={description} alt="DESCRIPTION"/>
          <div className="more back-to-position to-right delay-2">
            <CustomButton colorType="white">자세히 보기</CustomButton>
          </div>
        </div>
      </div>
    </ScrollSpySection>
  );
}

export default FickYourFavoriteSection;