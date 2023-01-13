import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import MainListData from "./MainListData";
import { FaPlus } from "react-icons/fa";

// import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper";

const MainListImage = styled.div`
  font-family: 'IropkeBatang';
  padding: 144px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  z-index: 3;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    font-family: 'Roboto Flex', sans-serif;
    text-transform: uppercase;
    margin: 0 47px 3rem;
    line-height: 1.2;
  }
  .ImageListBox {
    width: 100%;
    padding-right: 12px;
    padding-left: 12px;
    box-sizing: border-box;

    .imageList {
      padding-top: 2rem;
      position: relative;
      margin-right: 60px;

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
        padding: 20px 5px;
        text-align: center;
        padding-top: 1.5rem;
        padding-right: 3rem;
        padding-left: 3rem;

        h1 {
          font-size: 1.25rem;
          font-weight: 400;
          margin: 0;
        }
        p {
          font-size: 18px;
          line-height: 1.8;
          opacity: 0.6;
          padding-top: 0.5rem;
        }
      }
    }
  }
  .swiper-button-prev {
    position: absolute;
    top: 50%; left: -18px;
    text-align: center;
    width: 36px ;height: 36px;
    line-height: 36px;
    font-size: 18px;
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
    font-size: 5px;
    font-weight: bold;
  }
  .swiper-button-next {
    position: absolute;
    top: 50%; right: -18px;
    text-align: center;
    width: 36px ;height: 36px;
    line-height: 36px;
    font-size: 18px;
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