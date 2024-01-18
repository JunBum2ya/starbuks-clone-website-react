import reserveLogo from "../../images/reserve_logo.png";
import reserveText from "../../images/reserve_text.png";
import reserveImage from "../../images/reserve_image.png";
import CustomButton from "../CustomButton";

const ReserveCoffeeSection = () => {
  return (
    <section className="reserve-coffee scroll-spy">
      <div className="inner">
        <img className="reserve-logo back-to-position to-right delay-0" src={reserveLogo} alt="RESERVE-LOGO"/>
        <div className="text-group">
          <img className="description back-to-position to-right delay-1" src={reserveText} alt="RESERVE-TEXT"/>
          <div className="more back-to-position to-right delay-2">
            <CustomButton colorType="gold">자세히 보기</CustomButton>
          </div>
        </div>
        <img className="product back-to-position to-left delay-3" src={reserveImage} alt="RESERVE-IMAGE"/>
      </div>
    </section>
  );
};

export default ReserveCoffeeSection;