import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import image1 from "../assests/images/background.jpg";

import "./CSS/home.css";

function Home() {
  return (
    <>
      <div className="components">
        <div className="left_components">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={image1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image1} alt="" />
            </SwiperSlide>
            <div className="autoplay-progress" slot="container-end"></div>
          </Swiper>
        </div>

        <div className="right_components">
          <div className="text">
            <div>Let’s Connect</div>
            <div>Illuminating the <span>ENTREPRENEUR</span> in you.</div>
          </div>
          <button>
            <div className="button_text">
              ENROLL
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
