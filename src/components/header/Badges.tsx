import badge1 from "../../images/badge1.jpg";
import badge2 from "../../images/badge2.jpg";

const Badges = () => {
  return (
    <div className="badges">
      <div className="badge">
        <img src={badge1} alt="Badge"/>
      </div>
      <div className="badge">
        <img src={badge2} alt="Badge"/>
      </div>
    </div>
  );
};

export default Badges;