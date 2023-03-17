import React, { useState } from 'react';
import mainYoutubeData from './mainYoutubeData';
import MainYoutubeList from './MainYoutubeList';
import styled from 'styled-components';
import Youtube from 'react-youtube';

const YoutubeMain = styled.div`
  font-family: 'IropkeBatang';
  padding: 8vw;
  text-align: center;

  .youtubeVideo {
    width: 100%;
    position: relative;

    .serviceVideo {
      width: 100%;
      video {
        width: 100%;
        display: block;
        position: absolute;
      }
    }
  }
  .youtubeIntroduce {
    margin-top: 12vw;
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
      padding: 0 1vw;
      box-sizing: border-box;

      h1 {
        font-size: 1.3vw;
      }

      h2 {
        font-size: 1.8vw;
        line-height: 1.5;
        margin: 0 0 1vw 0;
      }
      p {
        line-height: 1.8;
        opacity: 0.6;
        font-size: 1.2vw;
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