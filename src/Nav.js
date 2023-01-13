import "./assets/css/reset.css";
import styled from "styled-components";
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper";


const Header = styled.div`
  position: relative;
  height: 100vh; width: 100%;
  z-index: 99;

    .bannerImg01 {
      background-image: url(./images/banner01.jpg);
      height: 100vh;
      z-index: -1;
      padding-right: 12px;
      padding-left: 12px;
    }
    .bannerImg02 {
      background-image: url(./images/banner02.jpg);
      height: 100vh;
      z-index: -1;
      padding-right: 12px;
      padding-left: 12px;
    }
    .bannerTxt {
      color: #f7f7f7;
    }
`;

// const bannerList = [
//   {id: 1, Url: "./images/banner01.jpg", alt: "banner01", Title:"df", txtTitle: "당신이 원한다면당신을 날 수도 있다."},
//   {id: 1, Url: "./images/banner02.jpg", alt: "banner02", Title:"df"},
// ]

function Nav() {
  // const path = process.env.PUBLIC_URL;

  return (
      <Header>
        <Swiper
          loop={true}
          autoplay={{
            delay: 6000,
          }}
          navigation
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
          > 
            <SwiperSlide>
              <div className="bannerImg01">
                <div className="bannerTxt bannerTxt01">
                  <h1>당신이 원한다면<br />
                      당신을 날수도 있다.<br />
                      자신을 믿어라.</h1>
                  <p>인생에서 가장 좋아하는 것을 하는데는 돈이 필요하지 않다.<br />
                      즉, 우리 모두가 가진 가장 귀중한 자산은 시간이다.</p>
                  <div className="bannerBtn">
                    <a href="#">more view</a>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="bannerImg02">
                <div className="bannerTxt bannerTxt2">
                  <h1>누군가를 위해<br />
                      당신의 삶을<br />
                      버리지 마세요.</h1>
                  <p>인생에서 가장 좋아하는 것을 하는데는 돈이 필요하지 않다.<br />
                      즉, 우리 모두가 가진 가장 귀중한 자산은 시간이다.</p>
                  <div className="bannerBtn">
                    <a href="#">more view</a>
                  </div>
                </div>
              </div>
              </SwiperSlide>

          {/* {bannerList.map( (img) => 
            <SwiperSlide key={img.id}>
              <img src={path + img.Url} alt={img.Title} />
              <div className="bannerTxt">
                <h1>{img.txtTitle}</h1>
                <p>{img.des}</p>
              </div>
              </SwiperSlide>)} */}
        </Swiper>
      </Header>
  );
}

export default Nav;