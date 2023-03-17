import styled from 'styled-components';
import { FaArrowRight } from "react-icons/fa";
<<<<<<< HEAD
=======
import { useEffect, useState, useRef } from 'react';
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786

function MainIntro(props) {
  const path = process.env.PUBLIC_URL;

  const Main = styled.div`
    position: relative;
    background-color: #fff;
    font-family: 'IropkeBatang';

    .main_intro {
<<<<<<< HEAD
      padding: 8vw;

      .main_intro1{
        padding-right: 0.5vw;
        padding-left: 0.5vw;
=======
      padding: 144px;

      .main_intro1 {
        padding-right: 12px;
        padding-left: 12px;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;

        img {
          max-width: 50%;
<<<<<<< HEAD
          padding-right: 0.5vw;
          padding-left: 0.5vw;
=======
          padding-right: 12px;
          padding-left: 12px;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
        }
        .intro_txt_box {
          text-align: left;
          width: 41.66666667%;
<<<<<<< HEAD
          padding: 3vw;
          box-sizing: border-box;

          h1 {
            font-size: 3.5vw;
            font-family: 'Roboto Flex', sans-serif;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 1.7vw;
            line-height: 1.2;
          }
          p {
            font-size: 1.2vw;
            line-height: 1.8;
            margin-bottom: 1vw;
=======
          padding: 3rem;
          box-sizing: border-box;

          h1 {
            font-size: 3.5rem;
            font-family: 'Roboto Flex', sans-serif;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 1.5rem;
            line-height: 1.2;
          }
          p {
            font-size: 18px;
            line-height: 1.8;
            margin-bottom: 1rem;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
          }
        }
      }

      .main_intro2 {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row-reverse;
        justify-content: space-between;
<<<<<<< HEAD
        padding-top: 13vw;
=======
        padding-top: 12rem;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786

        .main_intro_grid {
          position: relative;
          width: 50%;
          margin: 0;
<<<<<<< HEAD
          padding: 0 0.5vw 0;
=======
          padding: 0 12px 0;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786

          .img_grid {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            margin-left: -1px;
            margin-right: -1px;
            margin-bottom: -2px;
            overflow: hidden;
<<<<<<< HEAD
            height: 41.5vw;
=======
            height: 809px;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786

            a {
              width: 50%; height: auto;
              overflow: hidden;
              display: block;
              padding-left: 1px;
              padding-right: 1px;
              padding-bottom: 2px;
              box-sizing: border-box;
              max-width: 100%;
            }
            a:nth-child(1) {
              position: absolute;
              left: 0; top: 0;
            }
            a:nth-child(2) {
              position: absolute;
              left: 50%; top: 0;
            }
            a:nth-child(3) {
              position: absolute;
              left: 0; top: 50%;
            }
            a:nth-child(4) {
              position: absolute;
              left: 50%; top: 50%;
            }
            img {
              height: auto;
              width: 100%;
              box-sizing: border-box;
              overflow: hidden;
            }
          }
        }
        .intro_txt_box {
          text-align: left;
<<<<<<< HEAD
          padding: 3.5vw;
=======
          padding: 3rem;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
          width: 41.66666667%;
          box-sizing: border-box;

          h1 {
<<<<<<< HEAD
            font-size: 3.5vw;
            font-family: 'Roboto Flex', sans-serif;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 1.5vw;
            line-height: 1.2;
          }
          p {
            font-size: 1.2vw;
            line-height: 1.8;
            margin-bottom: 1vw;
=======
            font-size: 3.5rem;
            font-family: 'Roboto Flex', sans-serif;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 1.5rem;
            line-height: 1.2;
          }
          p {
            font-size: 18px;
            line-height: 1.8;
            margin-bottom: 1rem;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
          }
        }
      }

      .main_intro3 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        position: relative;
<<<<<<< HEAD
        padding-top: 13vw;

        img {
          width: 40vw;
=======
        padding-top: 12rem;

        img {
          width: 783.5px;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
        }
        .intro_txt_box {
          text-align: left;
          width: 41.66666667%;
<<<<<<< HEAD
          padding: 0 3vw;
          box-sizing: border-box;

          h1 {
            font-size: 3.5vw;
            font-family: 'Roboto Flex', sans-serif;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 1.5vw;
            line-height: 1.2;
          }
          p {
            font-size: 1.2vw;
            line-height: 1.8;
            margin-bottom: 1vw;
=======
          padding: 0 3rem;
          box-sizing: border-box;

          h1 {
            font-size: 3.5rem;
            font-family: 'Roboto Flex', sans-serif;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 1.5rem;
            line-height: 1.2;
          }
          p {
            font-size: 18px;
            line-height: 1.8;
            margin-bottom: 1rem;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
          }
        }
      }
    }
    .main_intro_btn {
<<<<<<< HEAD
      margin-top: 3vw;
      margin-left: 0.5vw;
=======
      margin-top: 3rem;
      margin-left: 0.5rem;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
      box-sizing: border-box;

      transition: all 0.2s ease-in-out;
      a {
        overflow: hidden;

        border: 1px solid #444;
        background-color: transparent;
        color: #333;
<<<<<<< HEAD
        padding: 0.7vw 3vw;
        font-size: 1vw;
=======
        padding: 8px 26px;
        padding-left: 3rem;
        padding-right: 3rem;
        font-size: 1rem;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
        line-height: 30px;
        text-align: center;
        position: relative;
        display: inline-block;
        transition: all 0.3s ease;

<<<<<<< HEAD
        &:hover {
          background-color: #444;
          transition: all .3s ease;
        }
        &:hover span:nth-child(1) {
          transform: translateX(-19px);
          display: inline-block;
          position: relative;
          color: #fff;
          text-shadow: 1px 1px 1px rgb(0, 0, 0 / 20%);
        }

=======
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
        span {
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          line-height: 30px;

          transition: all 0.3s ease;
        }
        .arrowIcon {
          position: absolute;
<<<<<<< HEAD
          width: 2.5vw; height: 5vw;
          background-color: rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          right: -5vw; top: -1px;
          line-height: 3.7vw;
=======
          width: 38px; height: 49px;
          background-color: rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          right: -38px; top: -1px;
          line-height: 49px;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786

          .arrowRight {
            width: 12px;
          }
        }
      }
      span:nth-child(1) {
        transition: all 0.3s ease;
      }
<<<<<<< HEAD
      
      
    }
    .main_intro_btn a:hover .arrowIcon {
=======
      &:hover span:nth-child(1) {
        transform: translateX(-19px);
        display: inline-block;
        position: relative;
        color: #fff;
        text-shadow: 1px 1px 1px rgb(0, 0, 0 / 20%);
      }
      &:hover a {
        background-color: #444;
        transition: all .3s ease;
      }
    }
    .main_intro_btn:hover .arrowIcon {
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
      background-color: rgba(0, 0, 0, 0.1);
      color: #fff;
      text-shadow: 1px 1px 1px rgb(0, 0, 0 / 20%);
      right: -1px;

      transition: all 0.3s ease;
    }
  `;

<<<<<<< HEAD
  return (
    <Main>
      <div className="main_intro">
        <article className="main_intro1">
=======

  return (
    <Main>
      <div className="main_intro">
        <article className='main_intro1'>
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
          <img src={path + "/images/01.jpg"} alt="intro1" />
          <div className='intro_txt_box'>
            <h1>branding</h1>
            <p>삶 전체에 있어 일이란 큰 비중을 차지한다. 진정으로 만족스러운 삶을 살기 위해서는 위대한 작업이라고 납득할 수 있는 일을 해야 한다. 진정으로 만족스러운 삶을 살기 위해서는 위대한 작업이라고 납득할 수 있는 일을 해야 한다.
            그리고 위대한 작업을 해내는 유일한 방법은 자신의 일을 사랑하는 것이다.</p>
            <div class="main_intro_btn">
              <a href="#">
                <span>자세히 보기</span>
                <span className='arrowIcon'><FaArrowRight className='arrowRight'/></span>
              </a>
            </div>   
          </div>
        </article>

        <article className='main_intro2'>
          <div className='main_intro_grid'>
            <div className='img_grid'>
              <a href="#"><img src={path + "/images/02-1.jpg"} alt="grid1" /></a>
              <a href="#"> <img src={path + "/images/02-2.jpg"} alt="grid2" /></a>
              <a href="#"><img src={path + "/images/02-3.jpg"} alt="grid3" /></a>
              <a href="#"><img src={path + "/images/02-4.jpg"} alt="grid4" /></a>
            </div> 
          </div>
          <div className='intro_txt_box'>
            <h1>branding</h1>
            <p>삶 전체에 있어 일이란 큰 비중을 차지한다. 진정으로 만족스러운 삶을 살기 위해서는 위대한 작업이라고 납득할 수 있는 일을 해야 한다. 진정으로 만족스러운 삶을 살기 위해서는 위대한 작업이라고 납득할 수 있는 일을 해야 한다.
            그리고 위대한 작업을 해내는 유일한 방법은 자신의 일을 사랑하는 것이다.</p>
            <div class="main_intro_btn">
              <a href="#">
              <span>자세히 보기</span>
              <span className='arrowIcon'><FaArrowRight className='arrowRight'/></span>
              </a>
            </div>
          </div>
        </article>

        <article className='main_intro3'>
          <img src={path + "/images/03.jpg"} alt="intro3" />
          <div className='intro_txt_box'>
            <h1>branding</h1>
            <p>삶 전체에 있어 일이란 큰 비중을 차지한다. 진정으로 만족스러운 삶을 살기 위해서는 위대한 작업이라고 납득할 수 있는 일을 해야 한다. 진정으로 만족스러운 삶을 살기 위해서는 위대한 작업이라고 납득할 수 있는 일을 해야 한다.
            그리고 위대한 작업을 해내는 유일한 방법은 자신의 일을 사랑하는 것이다.</p>
            <p>직관을 따르는 일이야말로 가장 중요하다.
            당신의 가슴, 그리고 직관이야말로 당신이 진정으로 원하는 것을 잘 알고 있다.
            다른 것은 부차적이다.</p>
            <div class="main_intro_btn">
              <a href="#">
              <span>자세히 보기</span>
              <span className='arrowIcon'><FaArrowRight className='arrowRight'/></span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </Main>
  );
}

export default MainIntro;