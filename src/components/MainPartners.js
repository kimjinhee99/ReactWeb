import {useState} from 'react';
import MainPartnersData from './MainPartnersData';
import { Swiper, SwiperSlide } from "swiper/react";
import styled from 'styled-components';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

const PartnersMain = styled.div`
  padding: 8vw;
  background-color: rgb(248, 249, 250);
  box-sizing: border-box;
  position: relative;
  
  h1 {
    font-size: 4.3vw;
    font-family: 'Roboto Flex', sans-serif;
    font-weight: 700;
    margin-bottom: 3vw;
    line-height: 1.2;
    text-transform: capitalize;
  }
  .mySwiper {
    box-sizing: border-box;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;

    position: unset;
    overflow: hidden;
    
    a {
      width: 9vw;
      float: left;

      img {
        width: 100%;
      }
    }
  }
  .swiper-button-prev {
    position: absolute;
    top: 62%; left: 7vw;
    text-align: center;
    width: 2.2vw ;height: 2.2vw;
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
  .swiper-button-prev::after {
    font-size: 0.6vw;
    font-weight: bold;
  }
  .swiper-button-next {
    position: absolute;
    top: 62%; right: 7vw;
    text-align: center;
    width: 2.2vw ;height: 2.2vw;
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
    font-size: 0.6vw;
    font-weight: bold;
  }
  .swiper-pagination {
    margin-bottom: 5vw;
  }
  .swiper-pagination-bullet{
    background-color: #fe6666;
  }
`;

function MainPartners() {
  const [data, setData] = useState(MainPartnersData);
  const path = process.env.PUBLIC_URL;

  return (
    <PartnersMain>
      <h1>partners</h1>
      <Swiper
        navigation
        slidesPerView={8}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {data.map((item) => 
          <SwiperSlide>
            <a href="#">
              <img src={path + item.imgUrl} alt={item.id} />
              </a>
          </SwiperSlide>
        )}
      </Swiper>
    </PartnersMain>
  );
}

export default MainPartners;