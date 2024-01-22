import CustomButton from "../CustomButton";

import frontImage from "../../images/reserve_store_medal_front.png";
import backIamge from "../../images/reserve_store_medal_back.png";

const ReserveStoreSection = () => {
  return (
    <section className="reserve-store">
      <div className="inner">
        <div className="medal">
          <div className="front">
            <img src={frontImage} alt="R"/>
          </div>
          <div className="back">
            <img src={backIamge} alt="R"/>
            <CustomButton>매장안내</CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReserveStoreSection;