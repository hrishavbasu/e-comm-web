import React, { useState } from "react";
import Slider from "react-slick";
import {FaArrowRight, FaArrowLeft} from "react-icons/fa";
import {Rectangle_1, Rectangle_2, Rectangle_3, Rectangle_4, Rectangle_5} from '../../assets/index';
import './Carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const images  = [Rectangle_1, Rectangle_2, Rectangle_3, Rectangle_4, Rectangle_5]

function Carousel() {

  return (
    <div className="container">
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
            <img src={Rectangle_1} alt={Rectangle_1} />
        </SwiperSlide>

        <SwiperSlide>
            <img src={Rectangle_2} alt={Rectangle_1} />
        </SwiperSlide>

        <SwiperSlide>
            <img src={Rectangle_3} alt={Rectangle_1} />
        </SwiperSlide>

        <SwiperSlide>
            <img src={Rectangle_4} alt={Rectangle_1} />
        </SwiperSlide>

        <SwiperSlide>
            <img src={Rectangle_5} alt={Rectangle_1} />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <FaArrowLeft className="left"/>
          </div>
          <div className="swiper-button-next slider-arrow">
            <FaArrowRight className="right"/>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      </div>
  );
}

export default Carousel;