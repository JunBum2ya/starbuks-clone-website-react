import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../images/awards_slide1.jpg";
import image2 from "../../images/awards_slide2.jpg";
import image3 from "../../images/awards_slide3.jpg";
import image4 from "../../images/awards_slide4.jpg";
import image5 from "../../images/awards_slide5.jpg";
import image6 from "../../images/awards_slide6.jpg";
import image7 from "../../images/awards_slide7.jpg";
import image8 from "../../images/awards_slide8.jpg";
import image9 from "../../images/awards_slide9.jpg";
import image10 from "../../images/awards_slide10.jpg";
import { Autoplay, Navigation } from "swiper/modules";
import MaterialIcon from "../MaterialIcon";

const AwardsSection = () => {
  return (
    <section className="awards">
      <div className="inner">
        <Swiper className="swiper-container" 
          spaceBetween={30}
          slidesPerView={5} 
          loop={true} 
          autoplay={{delay: 5000, disableOnInteraction: false}} 
          modules={[Autoplay,Navigation]}
          navigation={{
            prevEl: ".awards .swiper-prev",
            nextEl: ".awards .swiper-next"
          }}
          >
          <SwiperSlide>
            <img src={image1} alt="IMAGE"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="IMAGE"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="IMAGE"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image4} alt="IMAGE"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image5} alt="IMAGE"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image6} alt="IMAGE"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image7} alt="IMAGE"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image8} alt="IMAGE"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image9} alt="IMAGE"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image10} alt="IMAGE"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image1} alt="IMAGE"/>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-prev">
          <MaterialIcon>arrow_back</MaterialIcon>
        </div>
        <div className="swiper-next">
          <MaterialIcon>arrow_forward</MaterialIcon>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;