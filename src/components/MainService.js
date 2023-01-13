import styled from 'styled-components';

const ServiceMain = styled.div`
  font-family: 'IropkeBatang';
  padding: 144px;
  padding-right: 204px;
  padding-left: 204px;
  box-sizing: border-box;
  text-align: center;

  h1 {
    padding-right: 12px;
    padding-left: 12px;
    margin-bottom: 3rem;
    line-height: 1.2;
    font-family: 'Roboto Flex', sans-serif;
    font-weight: 700;
    font-size: calc(1.475rem + 1.7vw);
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

      &:nth-child(1) a {
        background-color: #fe6666;
        color: #fff;
        border-radius: 5px;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
      }
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
      font-size: 18px;
      font-size: 400;
      padding: 24px 0;
      display: block;
    }
  }
  .mainServiceBox {
    position: relative;
    padding: 20px 0 0;
    margin-top: 1.5rem;
    box-sizing: border-box;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    img {
      width: 50%;
    }
    .colLeft {
      width: 25%;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-content: center;

      .serviceTxt {
        flex-grow: 1;
        text-align: right;
        margin-top: 3rem;

        &:nth-child(1) {
          margin-top: 0;
        }
        h1 {
          color: #333;
          font-family: 'IropkeBatang';
          font-size: 28px;
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: normal;
          margin: 0;
          padding: 0;
        }
        p {
          font-size: 18px;
          line-height: 1.8;
          margin-top: 0.5rem;
          opacity: 0.7;
          padding: 0;
        }
      }
    }
    .colRight {
      width: 25%;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      text-align: left;

      .serviceTxt {
        flex-grow: 1;
        margin-top: 3rem;

        &:nth-child(1) {
          margin-top: 0;
        }
        h1 {
          color: #333;
          font-family: 'IropkeBatang';
          font-size: 28px;
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: normal;
          margin: 0;
          padding: 0;
        }
        p {
          font-size: 18px;
          line-height: 1.8;
          margin-top: 0.5rem;
          opacity: 0.7;
          padding: 0;
        }
      }
    }
  }
`;

function MainService(props) {
  return (
    <ServiceMain>
      <h1>service</h1>
      <div className='mainTap'>
        <p><a href="#">탭메뉴01</a></p>
        <p><a href="#">탭메뉴02</a></p>
      </div>
      <div className='mainServiceBox'>
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
        <img src={"./images/camera.png"} alt="camera" />
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