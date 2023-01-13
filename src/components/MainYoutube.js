import React, { useState } from 'react';
import mainYoutubeData from './mainYoutubeData';
import MainYoutubeList from './MainYoutubeList';
import styled from 'styled-components';
import Youtube from 'react-youtube';

const YoutubeMain = styled.div`
  font-family: 'IropkeBatang';
  padding: 144px;
  text-align: center;

  .youtubeVideo {
    width: 100%;
    padding: 0 12px;
    position: relative;

    .serviceVideo {
      width: 100%; height: 800px;
      padding-left: 12px;
      padding-right: 12px;
      video {
        width: 100%; height: 800px;
        display: block;
        position: absolute;
      }
    }
  }
  .youtubeIntroduce {
    margin-top: 12rem;
    margin-left: 47px;
    margin-right: 47px;
    padding-left: 12px;
    padding-right: 12px;
    text-align: left;

    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    box-sizing: border-box;

    .introduceBox {
      width: 25%;
      position: relative;
      display: flex;
      flex-direction: column;
      align-self: stretch;
      gap: 1rem;
      text-transform: capitalize;
      padding: 0 12px;
      box-sizing: border-box;

      h2 {
        font-size: 28px;
        line-height: 1.5;
        margin: 0 0 18px 0;
      }
      p {
        line-height: 1.8;
        opacity: 0.8;
        font-size: 18px;
      }
    }
  }
`;

function MainYoutube(props) {
  const [data,setData] = useState(mainYoutubeData);
  
  return (
    <YoutubeMain>
      <div className='youtubeVideo'>
        <div className='serviceVideo'>
          <Youtube
          videoId="XWORPuAuJmc"
          opts={{
            width: '100%',
            height: '800px',
            playerVars: {
              autoplay: 1,
            },
          }}
          />
        </div>
      </div>
      <div className='youtubeIntroduce'>
        <MainYoutubeList data={data} />
      </div>
    </YoutubeMain>
  );
}

export default MainYoutube;