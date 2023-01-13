import {useState} from 'react';
import MainPartnersData from './MainPartnersData';
import { Swiper, SwiperSlide } from "swiper/react";
import styled from 'styled-components';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

const PartnersMain = styled.div`
  padding: 144px;
  background-color: rgb(248, 249, 250);
  box-sizing: border-box;
  position: relative;
  
  h1 {
    padding-right: 12px;
    padding-left: 12px;
    font-size: 4rem;
    font-family: 'Roboto Flex', sans-serif;
    font-weight: 700;
    margin-bottom: 3rem;
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
      width: 169.5px;
      margin-right: 20px;
      float: left;

      img {
        width: 100%;
      }
    }
  }
  .swiper-button-prev {
    position: absolute;
    top: 62%; left: 130px;
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
  .swiper-button-prev::after {
    font-size: 5px;
    font-weight: bold;
  }
  .swiper-button-next {
    position: absolute;
    top: 62%; right: 130px;
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
    margin-bottom: 90px;
  }
  .swiper-pagination-bullet{
    background-color: #fe6666;
    margin: 30px 4px 0 4px;
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