import MainContentsItem from './MainContentsItem';
import styled from 'styled-components';

const MainContents = styled.div`
  font-family: 'IropkeBatang';
  padding: 144px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  box-sizing: border-box;
  
  .mainContentsList {
    height: 60vh; width: 31.8%;
    margin-right: 12px;
    margin-left: 12px;
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
      background: url(./images/04-1.jpg) no-repeat 50% 50% / cover;
    }
    &:nth-child(2) .gridInnerImage {
      background: url(./images/04-2.jpg) no-repeat 50% 50% / cover;
    }
    &:nth-child(3) .gridInnerImage {
      background: url(./images/04-3.jpg) no-repeat 50% 50% / cover;
    }
    .bgOverlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow: hidden;

        .overlayContents {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          overflow: hidden;
          padding: 3rem;
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-start;
          justify-content: space-between;
          box-sizing: border-box;

          .contentsTxt {
            transition: all .3s ease;

            span {
              display: block;
              margin-top: 15px;
              position: absolute;
              transform: translateY(0);
              color: #fff;
              font-size: 1.5rem;
              font-weight: 400;
              line-height: 1.5;
              margin: 15px 0 18px 0;
              opacity: 0;
            }
            h1 {
              color: #eee;
              font-family: 'Lato', sans-serif;
              font-size: 80%;
              font-weight: 500;
              letter-spacing: 1px;
              text-transform: uppercase;
              margin-bottom: 0.5rem;
            }
            h2 {
              font-size: 1.75rem;
              text-transform: capitalize;
              line-height: 1.5;
              margin: 0 0 18px 0;
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