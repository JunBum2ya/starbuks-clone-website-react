import React, { useRef, useEffect, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Swiper 스타일 import
import { noticeData } from '../../data/data';
import CustomButton from '../CustomButton';
import promotionImage1 from '../../images/promotion_slide1.jpg';
import promotionImage2 from '../../images/promotion_slide2.jpg';
import promotionImage3 from '../../images/promotion_slide3.jpg';
import promotionImage4 from '../../images/promotion_slide4.jpg';
import promotionImage5 from '../../images/promotion_slide5.jpg';
import MaterialIcon from '../MaterialIcon';

const NoticeSection = () => {
  return (
    <section className="notice">
      <div className="notice-line">
        <div className="bg-left"></div>
        <div className="bg-right"></div>
        <div className="inner">
          <div className="inner__left">
            <h2>공지사항</h2>
            <Swiper className="swiper-container" direction="vertical" autoplay={{delay: 3000, disableOnInteraction: false}} loop={true} modules={[Autoplay]}>
              {
                noticeData.map((notice,index) => <SwiperSlide key={index}><a href="#none">{notice}</a></SwiperSlide>)
              }
            </Swiper>
            <a className="notice-line__more" href="#none">
              <div className="material-icons">add_circle</div>
            </a>
          </div>
          <div className="inner__right">
            <h2>스타벅스 프로모션</h2>
            <div className="toggle-promotion">
              <div className="material-icons">add_circle</div>
            </div>
          </div>
        </div>
      </div>
      <div className="promotion">
        <PromotionSwiper/>
      </div>
    </section>
  );
};

const PromotionSwiper = () => {
  return (
    <>
      <Swiper className="swiper-container"
        slidesPerView={3} 
        spaceBetween={10} 
        centeredSlides={true} 
        loop={true} 
        autoplay={{delay: 5000, disableOnInteraction: false}} 
        modules={[Pagination,Autoplay,Navigation]}
        navigation={{
          prevEl: ".promotion .swiper-prev",
          nextEl: ".promotion .swiper-next"
        }}
        pagination={{
          el: ".promotion .swiper-pagination"
        }}
        >
        <SwiperSlide>
          <img src={promotionImage1} alt="2024년 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!!"/>
          <CustomButton>자세히 보기</CustomButton>
        </SwiperSlide>
        <SwiperSlide>
          <img src={promotionImage2} alt="2024년 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!!"/>
          <CustomButton>자세히 보기</CustomButton>
        </SwiperSlide>
        <SwiperSlide>
          <img src={promotionImage3} alt="2024년 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!!"/>
          <CustomButton>자세히 보기</CustomButton>
        </SwiperSlide>
        <SwiperSlide>
          <img src={promotionImage4} alt="2024년 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!!"/>
          <CustomButton>자세히 보기</CustomButton>
        </SwiperSlide>
        <SwiperSlide>
          <img src={promotionImage5} alt="2024년 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!!"/>
          <CustomButton>자세히 보기</CustomButton>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination"></div>
      <div className="swiper-prev">
        <MaterialIcon>arrow_back</MaterialIcon>
      </div>
      <div className="swiper-next">
        <MaterialIcon>arrow_forward</MaterialIcon>
      </div>
    </>
  );
};

export default NoticeSection;