import CustomButton from "../CustomButton";

const RewardsSection = () => {
  return (
    <section className="rewards">
      <div className="bg-left"></div>
      <div className="bg-right"></div>
      <div className="inner">
        <div className="btn-group">
          <CustomButton colorType="reverse" classList={["sign-up"]}>회원가입</CustomButton>
          <CustomButton classList={["sign-in"]}>로그인</CustomButton>
          <CustomButton classList={["gift"]}>e-Gift 선물하기</CustomButton>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;