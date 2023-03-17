import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { useState } from "react";
import MainListData from "./MainListData";
import { FaPlus } from "react-icons/fa";

// import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper";

const MainListImage = styled.div`
  font-family: 'IropkeBatang';
  padding: 8vw;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  z-index: 3;

  h1 {
    font-size: 4.2vw;
    font-weight: 700;
    font-family: 'Roboto Flex', sans-serif;
    text-transform: uppercase;
    margin-bottom: 3vw;
    margin-left: 0;
    line-height: 1.2;
  }
  .ImageListBox {
    width: 100%;
    box-sizing: border-box;

    .imageList {
      padding-top: 2vw;
      position: relative;

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
        }
      }
      .imageListTxt {
        position: relative;
        padding: 1vw 0.5vw;
        text-align: center;
        padding-top: 1.5vw;
        padding-right: 3vw;
        padding-left: 3vw;

        h1 {
          font-size: 1.3vw;
          font-weight: 400;
          margin: 0;
        }
        p {
          font-size: 1.2vw;
          line-height: 1.8;
          opacity: 0.6;
          padding-top: 0.5vw;
        }
      }
    }
  }
  .swiper-button-prev {
    position: absolute;
    top: 40%; left: -18px;
    text-align: center;
    width: 2.5vw ;height: 2.5vw;
    line-height: 36px;
    font-size: 1.2vw;
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
    font-size: 0.8vw;
    font-weight: bold;
  }
  .swiper-button-next {
    position: absolute;
    top: 40%; right: -18px;
    text-align: center;
    width: 2.5vw ;height: 2.5vw;
    line-height: 36px;
    font-size: 1.2vw;
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
  }
`;

function MainImageList() {
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