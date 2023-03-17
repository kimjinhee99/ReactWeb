import styled from 'styled-components';

const ServiceMain = styled.div`
  font-family: 'IropkeBatang';
<<<<<<< HEAD
  padding: 8vw;
=======
  padding: 144px;
  padding-right: 204px;
  padding-left: 204px;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
  box-sizing: border-box;
  text-align: center;

  h1 {
<<<<<<< HEAD
    margin-bottom: 3.5vw;
    line-height: 1.2;
    font-family: 'Roboto Flex', sans-serif;
    font-weight: 700;
    font-size: 4vw;
=======
    padding-right: 12px;
    padding-left: 12px;
    margin-bottom: 3rem;
    line-height: 1.2;
    font-family: 'Roboto Flex', sans-serif;
    font-weight: 700;
    font-size: calc(1.475rem + 1.7vw);
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  .mainTap {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    height: auto;

    p {
      float: left;
      flex-grow: 1;
      width: 100%;
      box-sizing: border-box;
      height: auto; width: auto;

<<<<<<< HEAD
      button {
        font-family: 'IropkeBatang';
        border: none;
        color: #000;
        height: auto; width: 100%;
        line-height: 1;
        font-size: 1.2vw;
        font-size: 400;
        padding: 1.5vw 0;
        display: block;
        cursor: pointer;

        &.active {
          background-color: #fe6666;
          color: #fff;
          border-radius: 5px;
          box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
        }
      }

=======
      &:nth-child(1) a {
        background-color: #fe6666;
        color: #fff;
        border-radius: 5px;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
      }
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
      &:hover a {
        background-color: #fe6666;
        color: #fff;
        border-radius: 5px;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
      }
    }
    a {
      color: #000;
      height: auto; width: 100%;
      line-height: 1;
<<<<<<< HEAD
      font-size: 1.2vw;
      font-size: 400;
      padding: 1.5vw 0;
=======
      font-size: 18px;
      font-size: 400;
      padding: 24px 0;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
      display: block;
    }
  }
  .mainServiceBox {
    position: relative;
<<<<<<< HEAD
    padding: 1vw 0 0;
    margin-top: 1.5vw;
=======
    padding: 20px 0 0;
    margin-top: 1.5rem;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
    box-sizing: border-box;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
<<<<<<< HEAD
    transition: 1s;
    opacity: 0;

    &.active {
      opacity: 1;
      transition: 1s;
    }
    &.active img {
      transform: translateY(0);
      transition: 1s;
      transition-delay: 2s;
    }
    img {
      width: 50%;
      transition: 1s;
      transform: translateY(8vw);
    }
    .colLeft {
      width: 24%;
=======
    img {
      width: 50%;
    }
    .colLeft {
      width: 25%;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-content: center;

      .serviceTxt {
        flex-grow: 1;
        text-align: right;
<<<<<<< HEAD
        margin-top: 3vw;
=======
        margin-top: 3rem;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786

        &:nth-child(1) {
          margin-top: 0;
        }
        h1 {
          color: #333;
          font-family: 'IropkeBatang';
<<<<<<< HEAD
          font-size: 1.8vw;
=======
          font-size: 28px;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: normal;
          margin: 0;
          padding: 0;
        }
        p {
<<<<<<< HEAD
          font-size: 1.2vw;
=======
          font-size: 18px;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
          line-height: 1.8;
          margin-top: 0.5rem;
          opacity: 0.7;
          padding: 0;
        }
      }
    }
    .colRight {
<<<<<<< HEAD
      width: 24%;
=======
      width: 25%;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      text-align: left;

      .serviceTxt {
        flex-grow: 1;
<<<<<<< HEAD
        margin-top: 3vw;
=======
        margin-top: 3rem;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786

        &:nth-child(1) {
          margin-top: 0;
        }
        h1 {
          color: #333;
          font-family: 'IropkeBatang';
<<<<<<< HEAD
          font-size: 1.8vw;
=======
          font-size: 28px;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: normal;
          margin: 0;
          padding: 0;
        }
        p {
<<<<<<< HEAD
          font-size: 1.2vw;
          line-height: 1.8;
          margin-top: 0.5vw;
=======
          font-size: 18px;
          line-height: 1.8;
          margin-top: 0.5rem;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
          opacity: 0.7;
          padding: 0;
        }
      }
    }
  }
`;

function MainService(props) {

  const path = process.env.PUBLIC_URL;

<<<<<<< HEAD
  function tap02 () {
    const camera = document.querySelector('.mainServiceBox');
    const tap01 = document.querySelector('.tap01');
    const tap02 = document.querySelector('.tap02');
  
    camera.style.display = 'none';
    camera.classList.remove('active');
    tap01.classList.remove('active');
    tap02.classList.add('active');

  }
  function tap01 () {
    const camera = document.querySelector('.mainServiceBox');
    const tap01 = document.querySelector('.tap01');
    const tap02 = document.querySelector('.tap02');

    camera.style.display = 'flex';
    camera.classList.add('active');
    tap02.classList.remove('active');
    tap01.classList.add('active');
  }

=======
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
  return (
    <ServiceMain>
      <h1>service</h1>
      <div className='mainTap'>
<<<<<<< HEAD
        <p><button className='tap01 active' onClick={tap01}>탭메뉴01</button></p>
        <p><button className='tap02' onClick={tap02}>탭메뉴02</button></p>
      </div>
      <div className='mainServiceBox active'>
=======
        <p><a href="#">탭메뉴01</a></p>
        <p><a href="#">탭메뉴02</a></p>
      </div>
      <div className='mainServiceBox'>
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
        <div className='colLeft'>
          <div className='serviceTxt'>
            <h1>전략</h1>
            <p>진정으로 만족스러운 삶을 살기 위해서는 위대한 작업이라고 납득할 수 있는 일을 해야 한다.</p>
          </div>
          <div className='serviceTxt'>
            <h1>마케팅</h1>
            <p>진정으로 만족스러운 삶을 살기 위해서는 위대한 작업이라고 납득할 수 있는 일을 해야 한다.</p>
          </div>
          <div className='serviceTxt'>
            <h1>퍼블리싱</h1>
            <p>진정으로 만족스러운 삶을 살기 위해서는 위대한 작업이라고 납득할 수 있는 일을 해야 한다.</p>
          </div>
        </div>
<<<<<<< HEAD
        <img src={path + "/images/camera.png"} alt="camera" />
=======
        <img src={path +"/images/camera.png"} alt="camera" />
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
        <div className='colRight'>
          <div className='serviceTxt'>
            <h1>디자인</h1>
            <p>진정으로 만족스러운 삶을 살기 위해서는 위대한 작업이라고 납득할 수 있는 일을 해야 한다.</p>
          </div>
          <div className='serviceTxt'>
            <h1>설계</h1>
            <p>진정으로 만족스러운 삶을 살기 위해서는 위대한 작업이라고 납득할 수 있는 일을 해야 한다.</p>
          </div>
          <div className='serviceTxt'>
            <h1>프로그램</h1>
            <p>진정으로 만족스러운 삶을 살기 위해서는 위대한 작업이라고 납득할 수 있는 일을 해야 한다.</p>
          </div>
        </div>
      </div>
    </ServiceMain>
  );
}

export default MainService;