// 리셋.css
import "./assets/css/reset.css";
// 폰트.css
import "./assets/css/fonts.css";

import NavMenu from './components/NavMenu';
import BannerSwiper from './components/BannerSwiper';
import MainIntro from "./components/MainIntro";
import MainContents from "./components/MainContents";
import MainService from "./components/MainService";
import MainYoutube from "./components/MainYoutube";
import MainImageList from "./components/MainImageList";
import MainPartners from "./components/MainPartners";
import MainContactUs from "./components/MainContactUs";
import MainMap from "./components/MainMap";
import KakaoMap from "./components/KakaoMap";
import Footer from "./components/Footer";

import {BrowserRouter, Link, Route, Routes,useNavigate } from 'react-router-dom';


function Main(props) {
  return (
    <div>
      {/* nav - 상단 메뉴 */}
      <NavMenu />
      {/* header - 스와이퍼 배너 */}
      <BannerSwiper />
      {/* main_intro */}
      <MainIntro />
      {/* main_contents */}
      <MainContents />
      {/* main_service */}
      <MainService />
      {/* main_youtube */}
      <MainYoutube />
      {/* main_image_list */}
      <MainImageList />
      {/* main_partners */}
      <MainPartners />
      {/* MainContactUs */}
      <MainContactUs />
      {/* main_map */}
      <MainMap />
      {/* kakaomap */}
      <KakaoMap />
      {/* footer */}
      <Footer />  
    </div>
  );
}

export default Main;