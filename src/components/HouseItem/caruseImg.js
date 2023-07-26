import React from "react";
// Import Swiper React components
import uy1 from "..//../assets/img/uy1.jpg";
import uy2 from "..//../assets/img/uy2.jpg";
import uy3 from "..//../assets/img/x62.jpg";
import uy4 from "..//../assets/img/x6.jpg";
import uy5 from "..//../assets/img/house.jpg";
import uy6 from "..//../assets/img/x61.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function CaruselTmg({photo}) {
  const {urls} = photo;
  console.log(urls, 'carusel');
  const img = [uy1];
  return (
    <>
      <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      
      >
        { img.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt='uylarning rasmi' className="imgs"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

