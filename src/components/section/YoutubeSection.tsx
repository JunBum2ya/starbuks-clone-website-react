import floating1 from "../../images/floating1.png";
import floating2 from "../../images/floating2.png";

const YoutbueSection = () => {
  return (
    <section className="youtube">
      <div className="youtube__area">
        <div></div>
      </div>
      <div className="youtube__cover">
        <div className="inner">
          <img className="floating floating1" src={floating1} alt="Icon"/>
          <img className="floating floating2" src={floating2} alt="Icon"/>
        </div>
      </div>
    </section>
  );
};

export default YoutbueSection;

