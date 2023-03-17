import MainContentsItem from './MainContentsItem';
import styled from 'styled-components';

import contentImg1 from '../assets/images/04-1.jpg';
import contentImg2 from '../assets/images/04-2.jpg';
import contentImg3 from '../assets/images/04-3.jpg';

const MainContents = styled.div`
  font-family: 'IropkeBatang';
<<<<<<< HEAD
  padding: 7vw;
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-around;
  box-sizing: border-box;
  
  .mainContentsList {
    height: 60vh;
    width: 32%;
    margin-right: 0.5vw;
    margin-left: 0.5vw;
=======
  padding: 144px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  box-sizing: border-box;
  
  .mainContentsList {
    height: 60vh; width: 31.8%;
    margin-right: 12px;
    margin-left: 12px;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
    box-sizing: border-box;
    position: relative;
    overflow: hidden;

    .gridImage {
      width: 100%; height:100%;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      transition: background-size .3s ease;
      -moz-transition: background-size .3s ease;
      -web-kit-transition: background-size .3s ease;

      &:hover .gridInnerImage {
      -webkit-animation: kenburns 20s ease-out both;
      animation: kenburns 20s ease-out both;
      }

      @-webkit-keyframes kenburns {
        0% {
          -webkit-transform: scale(1) translate(0, 0);
          transform: scale(1) translate(0, 0);
          -webkit-transform-origin: 84% 84%;
          transform-origin: 84% 84%;
        }

        100% {
          -webkit-transform: scale(1.25) translate(20px, 15px);
          transform: scale(1.25) translate(20px, 15px);
          -webkit-transform-origin: right bottom;
          transform-origin: right bottom;
        }
      }

      @keyframes kenburns {
        0% {
          -webkit-transform: scale(1) translate(0, 0);
          transform: scale(1) translate(0, 0);
          -webkit-transform-origin: 84% 84%;
          transform-origin: 84% 84%;
        }

        100% {
          -webkit-transform: scale(1.25) translate(20px, 15px);
          transform: scale(1.25) translate(20px, 15px);
          -webkit-transform-origin: right bottom;
          transform-origin: right bottom;
        }
      }
    }
    .gridInnerImage {
      position: absolute;
      left: 0; top: 0;
      width: 100%; height: 100%;
      box-sizing: border-box;
    }
    &:nth-child(1) .gridInnerImage {
      background: url(${contentImg1}) no-repeat 50% 50% / cover;
    }
    &:nth-child(2) .gridInnerImage {
      background: url(${contentImg2}) no-repeat 50% 50% / cover;
    }
    &:nth-child(3) .gridInnerImage {
      background: url(${contentImg3}) no-repeat 50% 50% / cover;
    }
    .bgOverlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow: hidden;
<<<<<<< HEAD
        
        .imageBg {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,0.2);
          z-index: 1;
        }
=======
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786

        .overlayContents {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          overflow: hidden;
<<<<<<< HEAD
          padding: 3vw;
=======
          padding: 3rem;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-start;
          justify-content: space-between;
          box-sizing: border-box;
<<<<<<< HEAD
          z-index: 9;
=======
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786

          .contentsTxt {
            transition: all .3s ease;

            span {
              display: block;
<<<<<<< HEAD
              margin-top: 1vw;
              position: absolute;
              transform: translateY(0);
              color: #fff;
              font-size: 1.5vw;
=======
              margin-top: 15px;
              position: absolute;
              transform: translateY(0);
              color: #fff;
              font-size: 1.5rem;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
              font-weight: 400;
              line-height: 1.5;
              margin: 15px 0 18px 0;
              opacity: 0;
<<<<<<< HEAD
              cursor: pointer;
=======
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
            }
            h1 {
              color: #eee;
              font-family: 'Lato', sans-serif;
<<<<<<< HEAD
              font-size: 1vw;
=======
              font-size: 80%;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
              font-weight: 500;
              letter-spacing: 1px;
              text-transform: uppercase;
              margin-bottom: 0.5rem;
            }
            h2 {
<<<<<<< HEAD
              font-size: 2.5vw;
              font-weight: 700;
              text-transform: capitalize;
              line-height: 1.5;
              margin: 0 0 1.2vw 0;
=======
              font-size: 1.75rem;
              text-transform: capitalize;
              line-height: 1.5;
              margin: 0 0 18px 0;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
              color: #fe6666;
            }
          }
          &:hover .contentsTxt {
            transform: translateY(-45px);
          }
          &:hover .contentsTxt span {
            display: block;
            opacity: 1;
            transition: all .3s ease;
          }
          &:hover .gridImage{
            background-size: 110%;
          }
        }
      }

  }
  
`;

function MainContentsList({data}) {
  return (
    <MainContents>
        { data.map(item => <MainContentsItem key={item.id} item={item} />)}
    </MainContents>
  );
}

export default MainContentsList;