import styled from "styled-components";
import MapData from './MapData';
import { useState } from "react";
import { FaMapMarkerAlt, FaRegEnvelope, FaRegClock, FaHeadphonesAlt } from "react-icons/fa";

const Map = styled.div`
  font-family: 'IropkeBatang';
  background-color: rgb(248, 249, 250);
  box-sizing: border-box;
  
  .MapIcon {
    display: flex;
    flex-wrap: nowrap;
    flex: 0 0 auto;
    align-items: stretch;

    .iconBox {
      padding: 6vw;
      width: 25%;
      position: relative;
      display: flex;
      flex: 0 0 auto;
      flex-direction: column;
      align-items: center;
      text-align: center;
      box-sizing: border-box;

      &:nth-child(2) {
        background-color: rgba(33, 37, 41,0.04);
      }
      &:nth-child(3) {
        background-color: rgba(33, 37, 41,0.08);
      }
      &:nth-child(4) {
        background-color: rgba(33, 37, 41,0.11);
      }
      span {
        display: block;
        width: 7.5vw; height: 6vw;
        color: #fe6666;
        margin-bottom: 1.5vw;
        padding: 0 0.75vw;
      }
      .symbolMapIcon {
        font-size: 4.5vw;
        font-weight: bold;
      }
      .mapIconTxt {
        flex-basis: 0;
        flex-grow: 1;
        padding: 0;

        h1 {
          font-weight: 600;
          color: #333;
          font-size: 1.8vw;
          line-height: 1.5;
          text-transform: uppercase;
        }
        p {
          font-size: 1.2vw;
          font-weight: 400;
          line-height: 1.8;
          margin-top: 0.3vw;
          text-transform: capitalize;
        }
      }
    }
  }
`;


function MainMap() {
  const [data, setData] = useState(MapData);

  return (
    <Map>
      <div className="MapIcon">
        <div className="iconBox">
          <span className="symbolMapIcon"><FaMapMarkerAlt /></span>
          <div className="mapIconTxt">
            <h1>address</h1>
            <p>795 folsom ave, suite 600</p>
            <p>san francisco, ca 94107</p>
          </div>
        </div>
        <div className="iconBox">
          <span className="symbolMapIcon"><FaRegEnvelope /></span>
          <div className="mapIconTxt">
            <h1>email</h1>
            <p>from.yami@gmail.com</p>
          </div>
        </div>
        <div className="iconBox">
          <span className="symbolMapIcon"><FaRegClock /></span>
          <div className="mapIconTxt">
            <h1>work time</h1>
            <p>sun - thu | 07:00 - 23:00 hours</p>
            <p>fri - sat | 08:00 - 01:00 hours</p>
          </div>
        </div>
        <div className="iconBox">
          <span className="symbolMapIcon"><FaHeadphonesAlt /></span>
          <div className="mapIconTxt">
            <h1>call</h1>
            <p>mobile: +62-111-222-333</p>
            <p>fax: (+62)-11-4752-1433</p>
          </div>
        </div>
      </div>
    </Map>
  );
}

export default MainMap;