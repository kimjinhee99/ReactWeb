import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
<<<<<<< HEAD
import { useState } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
import MainListData from "./MainListData";
import { FaPlus } from "react-icons/fa";

// import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper";

const MainListImage = styled.div`
  font-family: 'IropkeBatang';
<<<<<<< HEAD
  padding: 8vw;
=======
  padding: 144px;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  z-index: 3;

  h1 {
<<<<<<< HEAD
    font-size: 4.2vw;
    font-weight: 700;
    font-family: 'Roboto Flex', sans-serif;
    text-transform: uppercase;
    margin-bottom: 3vw;
    margin-left: 0;
=======
    font-size: 4rem;
    font-weight: 700;
    font-family: 'Roboto Flex', sans-serif;
    text-transform: uppercase;
    margin: 0 47px 3rem;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
    line-height: 1.2;
  }
  .ImageListBox {
    width: 100%;
<<<<<<< HEAD
    box-sizing: border-box;

    .imageList {
      padding-top: 2vw;
      position: relative;
=======
    padding-right: 12px;
    padding-left: 12px;
    box-sizing: border-box;

    .imageList {
      padding-top: 2rem;
      position: relative;
      margin-right: 60px;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786

      .swiper-slide {
        img {
          width: 100%;
        }
      }

      .bgOveray {
        position: absolute;
        top: 0%; left: 0%;
        width: 100%; height: 100%;
        overflow: hidden;
<<<<<<< HEAD

        &:hover .bgOverlayBg {
          position: absolute;
          width: 100%;
          height: 75%;
          background-color: rgba(255,255,255,0.85);
          transition: 1s;
          z-index: 1;
        }
        .bgOverayIcon {
          position: absolute;
          top: 33%; left: 42%;
          z-index: 9;
          a {
            display: block;
            font-size: 1.2vw;
            width: 4vw; height: 4vw;
            line-height: 4.5vw;
=======
        transition: all 0.5s ease;

        &:hover {
          background-color: rgba(255,255,255,0.85);

        }
        .bgOverayIcon {
          position: absolute;
          top: 35%; left: 45%;
          a {
            display: block;
            font-size: 18px;
            width: 68px; height: 68px;
            line-height: 73px;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
            border-radius: 50%;
            color: #fff;
            background-color: rgba(0, 0, 0, 0.7);
            text-align: center;

            transition: transform .3s ease;
            
            &:hover {
            transform: scale(1.1);
            background-color: #fe6666;
            }
          }
<<<<<<< HEAD
=======
         
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
        }
      }
      .imageListTxt {
        position: relative;
<<<<<<< HEAD
        padding: 1vw 0.5vw;
        text-align: center;
        padding-top: 1.5vw;
        padding-right: 3vw;
        padding-left: 3vw;

        h1 {
          font-size: 1.3vw;
=======
        padding: 20px 5px;
        text-align: center;
        padding-top: 1.5rem;
        padding-right: 3rem;
        padding-left: 3rem;

        h1 {
          font-size: 1.25rem;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
          font-weight: 400;
          margin: 0;
        }
        p {
<<<<<<< HEAD
          font-size: 1.2vw;
          line-height: 1.8;
          opacity: 0.6;
          padding-top: 0.5vw;
=======
          font-size: 18px;
          line-height: 1.8;
          opacity: 0.6;
          padding-top: 0.5rem;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
        }
      }
    }
  }
  .swiper-button-prev {
    position: absolute;
<<<<<<< HEAD
    top: 40%; left: -18px;
    text-align: center;
    width: 2.5vw ;height: 2.5vw;
    line-height: 36px;
    font-size: 1.2vw;
=======
    top: 50%; left: -18px;
    text-align: center;
    width: 36px ;height: 36px;
    line-height: 36px;
    font-size: 18px;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
    color: #666;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    z-index: 1;

    transition: all .3s ease;
    &:hover {
      background-color: #fe6666;
      color: #fff;
    }
  }
  .swiper-button-prev::after {
<<<<<<< HEAD
    font-size: 0.8vw;
=======
    font-size: 5px;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
    font-weight: bold;
  }
  .swiper-button-next {
    position: absolute;
<<<<<<< HEAD
    top: 40%; right: -18px;
    text-align: center;
    width: 2.5vw ;height: 2.5vw;
    line-height: 36px;
    font-size: 1.2vw;
=======
    top: 50%; right: -18px;
    text-align: center;
    width: 36px ;height: 36px;
    line-height: 36px;
    font-size: 18px;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
    color: #666;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;

    transition: all .3s ease;
    &:hover {
      background-color: #fe6666;
      color: #fff;
    }
  }
  .swiper-button-next::after {
<<<<<<< HEAD
    font-size: 0.8vw;
    font-weight: bold;
  }
  .swiper-pagination-bullet{
    background-color: #fe6666;
    margin: 2vw 4px 0 4px;
  }
  .swiper {
    position: unset;
    padding-bottom: 5vw;
=======
    font-size: 5px;
    font-weight: bold;
  }
  .swiper-pagination {
  }
  .swiper-pagination-bullet{
    background-color: #fe6666;
    margin: 30px 4px 0 4px;
  }
  .swiper {
    position: unset;
    padding-bottom: 50px;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
  }
`;

function MainImageList() {
<<<<<<< HEAD
=======

>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
  const [data, setData] = useState(MainListData);
  // const {imgUrl, subTitle, title, des} = item;
  const path = process.env.PUBLIC_URL;

  return (
    <MainListImage>
      <h1>branding</h1>
      <div className="ImageListBox">
        <div className='imageList'>
          <Swiper 
            navigation
            modules={[Navigation, Pagination, Autoplay]} 
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            loop={true}
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper">
            {data.map((item) => 
              <SwiperSlide>
                <img src={path + item.imgUrl} alt={item.subTitle} />
                <div className="bgOveray">
                  <div className="bgOverayIcon">
                    <a href="#">{item.brandingIcon}</a>
                  </div>
                  <div className="bgOverlayBg"></div>
                </div>
                <div className="imageListTxt">
                  <h1>{item.title}</h1>
                  <p>{item.des}</p>
                </div>
              </SwiperSlide>)}
          </Swiper>
        </div>
      </div>
    </MainListImage>
  );
}

export default MainImageList;