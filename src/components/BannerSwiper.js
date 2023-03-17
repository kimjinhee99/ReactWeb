import styled from "styled-components";
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper";

import bannerImg01 from '../assets/images/banner01.jpg';
import bannerImg02 from '../assets/images/banner02.jpg';
<<<<<<< HEAD
=======

>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
const path = process.env.PUBLIC_URL;

const Header = styled.div`
  position: relative;
  height: 100vh; width: 100%;
  z-index: 99;

    .bannerImg01 {
      background: url(${bannerImg01}), no-repeat 50% / cover;
      height: 100vh;
<<<<<<< HEAD
      z-index: 1;
      position: relative;

      .bannerBg {
        height: 100%; width: 100%;
        background-color: rgba(0,0,0,0.5);
        opacity: 0.5;
        position: absolute;
        top: 0;
        z-index: -1;
      }
=======
      z-index: -1;
      padding-right: 12px;
      padding-left: 12px;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
    }
    .bannerImg02 {
      background: url(${bannerImg02}) no-repeat 50% / cover;
      height: 100vh;
<<<<<<< HEAD
      z-index: 1;
      position: relative;

      .bannerBg {
        height: 100%; width: 100%;
        background-color: rgba(0,0,0,0.5);
        opacity: 0.8;
        position: absolute;
        top: 0;
        z-index: -1;
      }
      .bannerTxt {
        padding-right: 10vw;
      }
=======
      z-index: -1;
      padding-right: 12px;
      padding-left: 12px;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
    }
    .bannerTxt {
      height: 100%;
      color: #f7f7f7;
      font-family: 'IropkeBatang';
      font-weight: 300;
      text-align: center;
      display: flex;
      flex-flow: column;
      justify-content: center;
      margin: 0 auto;
<<<<<<< HEAD
      z-index: 99;
=======
      max-width: 600px;
      z-index: 20;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
      box-sizing: border-box;
    }
    .bannerImg02 {
      display: flex;
      justify-content: flex-end;
<<<<<<< HEAD
    }
    .bannerTxt h1 {
      font-size: 3.7vw;
      font-weight: 400;
      letter-spacing: 2px;
      line-height: 1.25;
      opacity: 0;
    }
    .bannerTxt p {
      font-size: 1.5vw;
      margin-top: 2vw;
      margin-bottom: 0.8vw;
      line-height: 1.6;
    }
    .bannerTxt01 {
      h1 {
        opacity: 0;
        transition: 2s;
        transform: translateY(-5vw);
        }
      p {
        opacity: 0;
        transition: 1.7s;
        transform: translateY(-5vw);
        }
      .bannerBtn {
        opacity: 0;
        transition: 1.3s;
        transform: translateY(-5vw);
        }
=======
      padding-right: 192px;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
    }
    .bannerTxt02 {
      text-align: left;
      margin: 0;
<<<<<<< HEAD
      h1 {
        opacity: 0;
        transition: 1.3s;
        transform: translateY(5vw);
      }
      p {
        opacity: 0;
        transition: 1.7s;
        transform: translateY(5vw);
      }
      .bannerBtn {
        opacity: 0;
        transition: 2s;
        transform: translateY(5vw);
      }
    }
    .bannerBtn {
      margin-top: 3vw;
      box-sizing: border-box;
      transition-delay: 1s;
    }
    .bannerBtn a {
      border: 2px solid #fff;
      font-size: 1.2vw;
      font-weight: 300;
      line-height: 30px;
      border-radius: 3px;
      padding: 0.8vw 2.8vw;
      text-transform: uppercase;
      transition: all .3s ease-in-out;
    }
    .bannerBtn a:hover {
=======
    }
    .bannerTxt h1 {
      font-size: 56px;
      font-weight: 400;
      letter-spacing: 2px;
      line-height: 1.25;
    }
    .bannerTxt p {
      font-size: 24px;
      margin-top: 30px;
      margin-bottom: 10px;
      line-height: 1.6;
    }
    .bannerBtn {
      margin-top: 3rem;
      box-sizing: border-box;
    }
    .bannerBtn a {
      border: 2px solid #fff;
      font-size: 1rem;
      font-weight: 300;
      line-height: 30px;
      border-radius: 3px;
      padding: 10px 26px;
      padding-right: 3rem;
      padding-left: 3rem;
      text-transform: uppercase;
      transition: all .3s ease-in-out;
    }
    .bannerBtn:hover a {
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
      background-color: #fff;
      color: #333;
    }
    .swiper-button-prev {
<<<<<<< HEAD
      width: 3.5vw; height: 3.5vw;
=======
      width: 52px; height: 52px;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
      position: absolute;
      top: 50%; left: 0;
      cursor: pointer;
      background-color: rgba(0,0,0,0.3);
      border-radius: 0 3px 0 3px;
      line-height: 50px;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 700;
      text-align: center;
      z-index: 10;

      transition: all .3s ease-in-out;
    }
    .swiper-button-prev::after {
<<<<<<< HEAD
      font-size: 1.3vw;
    }
    .swiper-button-next {
      width: 3.5vw; height: 3.5vw;
=======
      font-size: 20px;
    }
    .swiper-button-next {
      width: 52px; height: 52px;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
      position: absolute;
      top: 50%; right: 0;
      cursor: pointer;
      background-color: rgba(0,0,0,0.3);
      border-radius: 3px 0 0 3px;
      line-height: 50px;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 700;
      text-align: center;
      z-index: 10;

      transition: all .3s ease-in-out;
    }
    .swiper-button-next::after {
<<<<<<< HEAD
      font-size: 1.3vw;
=======
      font-size: 20px;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
    }
    .swiper-button-prev:hover {
      background-color: rgba(0,0,0,0.6);
    }
    .swiper-button-next:hover {
      background-color: rgba(0,0,0,0.6);
    }
<<<<<<< HEAD
    .swiper-slide.swiper-slide-active {
      .bannerTxt h1 {
        opacity: 1;
        transition-delay: 1s;
        transform: translateY(0);
      }
      .bannerTxt p {
        opacity: 1;
        transition-delay: 1s;
        transform: translateY(0);
      }
      .bannerBtn {
        opacity: 1;
        transition-delay: 1s;
        transform: translateY(0);
      }
    }
=======
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
`;

// const bannerList = [
//   {id: 1, Url: "./images/banner01.jpg", alt: "banner01", Title:"df", txtTitle: "당신이 원한다면당신을 날 수도 있다."},
//   {id: 1, Url: "./images/banner02.jpg", alt: "banner02", Title:"df"},
// ]

function BannerSwiper() {
  // const path = process.env.PUBLIC_URL;

  return (
      <Header>
        <Swiper
<<<<<<< HEAD
=======
          cssMode={true}
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
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
<<<<<<< HEAD
                <div className="bannerBg"></div>
=======
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
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
<<<<<<< HEAD
                <div className="bannerBg"></div>
=======
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
                <div className="bannerTxt bannerTxt02">
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

export default BannerSwiper;