import texture1 from "../../images/find_store_texture1.png";
import texture2 from "../../images/find_store_texture2.png";
import picture1 from "../../images/find_store_picture1.jpg";
import picture2 from "../../images/find_store_picture2.jpg";
import title from "../../images/find_store_text1.png";
import description from "../../images/find_store_text2.png";
import CustomButton from "../CustomButton";
import ScrollSpySection from "./ScrollSpySection";

const FindStoreSection = () => {

  return (
    <ScrollSpySection classList={["find-store"]}>
      <div className="inner">
        <img className="texture1" src={texture1} alt="TEXTURE"/>
        <img className="texture2" src={texture2} alt="TEXTURE"/>
        <img className="picture picture1 back-to-position to-right delay-0" src={picture1} alt="PICTURE"/>
        <img className="picture picture2 back-to-position to-right delay-1" src={picture2} alt="PICTURE"/>
        <div className="text-group">
          <img className="title back-to-position to-left delay-0" src={title} alt="TITLE"/>
          <img className="description back-to-position to-left delay-1" src={description} alt="DESCRIPTION"/>
          <div className="more back-to-position to-left delay-2">
            <CustomButton>매장찾기</CustomButton>
          </div>
        </div>
      </div>
    </ScrollSpySection>
  );
};

export default FindStoreSection;