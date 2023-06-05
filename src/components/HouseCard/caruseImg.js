import React from "react";
// Import Swiper React components
// import uy1 from "..//../assets/img/uy1.jpg";
// import uy2 from "..//../assets/img/uy2.jpg";
// import uy3 from "..//../assets/img/x62.jpg";
// import uy4 from "..//../assets/img/x6.jpg";
// import uy5 from "..//../assets/img/house.jpg";
// import uy6 from "..//../assets/img/x61.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

import { Pagination, Navigation, EffectCube } from "swiper";

export default function CaruselTmg({photo}) {
  const { urls } = photo;

  const img = [urls.small, urls.raw, urls.regular, urls.small_s3];
  return (
    <>
      <Swiper
        
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        navigation={true}
        modules={[Pagination, Navigation, EffectCube]}
        className="mySwiper"
      
      >
        { img.slice(0, 4).map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt='uylarning rasmi' className="imgs"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

