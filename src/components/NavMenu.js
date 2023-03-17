import styled from "styled-components";
import {BrowserRouter, Link, Route, Routes,useNavigate } from 'react-router-dom';
import About from "./About";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Board from "./Board";
import Contact from "./Contact";
import Element from "./Element";
import Shop from "./Shop";
import { useEffect, useState } from "react";


const Nav = styled.div`
  font-family: 'IropkeBatang';
  background-color: transparent;
  color: #eee;
  position: fixed;
  top: 0;
  margin: 0 auto;
  width: 100%;
  z-index: 9999;
  &.scroll-text {
    background-color: #fff;
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
  }
  &.scroll-text .gnb li a, &.scroll-text .registory li a {
    color: #000;
  }
  &.scroll-text .container h1 {
    display: none;
  }
  &.scroll-text .container h2 {
    display: block;
  }

  .container {
    width: 85%; height: 5vw;
    margin: 0 auto;

    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    position: relative;
  }
  .container h1 {
    margin-right: 2.8vw;
    position: relative;
    a{
      display: flex;
      align-items: center;
      height: 2vw;
    }
  }
  .container h1 img {
    height: 2.2vw;
    display: block;
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
  }
  .container h2 {
    display: none;
    margin-right: 2.8vw;
    position: relative;
    a {
      display: flex;
      align-items: center;
      height: 2vw;
    }
  }
  .container h2 img {
    height: 2.2vw;
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
  }
  .gnb {
    display: flex;
    align-items: center;
    margin-right: auto;
    flex-wrap: wrap;
  }
  .gnb li {
    position: relative;
  }
  .gnb li a, .registory li a {
    font-size: 1.2vw;
    font-weight: 500;
    color: #f7f7f7;
    line-height: 22px;
    letter-spacing: 1px;
    text-transform: uppercase;
    display: block;
    padding: 1vw;
  }
  .gnb li a:hover, .registory li a:hover {
    background-color: #fe6666;
  }
  .sub_menu {
    display: none;
    width: 14vw;
    position: absolute;
    top: 100%; left: 0;
    background-color: #fff;
    border: 1px solid #eee;
    transition: .3s ease;
  }
  .sub_menu li a {
    display: block;
    color: #666;
    padding-top: 1vw;
    padding-bottom: 1vw;
    font-weight: 500;
    font-size: 1.1vw;
    transition: all .2s ease-in-out;
  }
  .sub_menu li a:hover {
    background-color: #f9f9f9;
    padding-left: 1vw;
    color: #fe6666;
  }
  .gnb li:hover .sub_menu {
    display: block;
  }
  .registory {
    display: block;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: auto;
  }
`;

const path = process.env.PUBLIC_URL;

function NavMenu(props) {

// 스크롤 이벤트
const [scrollPosition, setScrollPosition] = useState(0);

const updateScroll = () => {
  setScrollPosition(window.scrollY || document.documentElement.scrollTop);
};
useEffect(() => {
  window.addEventListener('scroll',updateScroll);
},[]);

  return (
    <>
    <BrowserRouter>
    <Nav className={scrollPosition > 100 ? "scroll-text" : "scrolled-text"}>
      <div className="container">
        <h1><a href="#"><img src={path + "/images/logo-dark.png"} alt="white_logo" /></a></h1>
        <h2><a href="#"><img src={path + "/images/logo.png"} alt="black_logo" /></a></h2>
      
        <ul className="gnb">
          <li>
            <Link to="/about">about</Link>
            <ul class="sub_menu">
              <li><a href="#">clean</a></li>
              <li><a href="#">simple</a></li>
              <li><a href="#">wide</a></li>
              <li><a href="#">history</a></li>
              <li><a href="#">stormap</a></li>
            </ul>
          </li>
          <li>
          <Link to="/service">service</Link>
            <ul class="sub_menu">
              <li><a href="#">clean</a></li>
              <li><a href="#">simple</a></li>
              <li><a href="#">wide</a></li>
              <li><a href="#">grid</a></li>
            </ul>
          </li>
          <li>
          <Link to="/portfolio">portfolio</Link>
            <ul class="sub_menu">
              <li><a href="#">photo</a></li>
              <li><a href="#">album</a></li>
              <li><a href="#">video</a></li>
              <li><a href="#">popup</a></li>
            </ul>
          </li>
          <li>
          <Link to="/board">board</Link>
            <ul class="sub_menu">
              <li><a href="#">news</a></li>
              <li><a href="#">gallery</a></li>
              <li><a href="#">webzine</a></li>
              <li><a href="#">schedule</a></li>
            </ul>
          </li>
          <li>
          <Link to="/contact">contact</Link>
            <ul class="sub_menu">
              <li><a href="#">clean</a></li>
              <li><a href="#">simple</a></li>
              <li><a href="#">wide</a></li>
              <li><a href="#">faq</a></li>
              <li><a href="#">1:1qna</a></li>
            </ul>
          </li>
          <li>
          <Link to="/element">element</Link>
            <ul class="sub_menu">
              <li><a href="#">grid</a></li>
              <li><a href="#">section</a></li>
              <li><a href="#">typography</a></li>
              <li><a href="#">buttons</a></li>
              <li><a href="#">iconbox</a></li>
              <li><a href="#">tabs & accordions</a></li>
              <li><a href="#">chart & progress</a></li>
              <li><a href="#">footer style</a></li>
              <li><a href="#">board output</a></li>
            </ul>
          </li>
          <li><Link to="/shop">shop</Link></li>
        </ul>
        <ul class="registory">
            <li><a href="#">login</a></li>
            <li><a href="#">join</a></li>       
        </ul>
      </div>
    </Nav>

    {/* 화면에 보이는 영역 */}
    <Routes>
      <Route path="/about" element={ <About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/board" element={<Board />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/element" element={<Element />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default NavMenu;