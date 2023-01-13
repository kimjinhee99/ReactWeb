import { useState } from 'react';
import styled from 'styled-components';

const ContactUs = styled.div`
  font-family: 'IropkeBatang';
  padding-top: 144px;
  padding-bottom: 144px;
  padding-right: 12px;
  padding-left: 12px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  box-sizing: border-box;
  max-width: 1520px;
  margin: 0 auto;

  .contactUsLeft {
    position: relative;
    width: 25%;
    
    h1 {
      font-size: 3.5rem;
      font-family: 'Roboto Flex', sans-serif;
      line-height: 1.25;
      font-weight: 700;
      margin-bottom: 3rem;
      text-transform: capitalize;
    }
    p {
      line-height: 1.8;
      font-size: 20px;
      font-weight: 300;
      opacity: 0.6;
    }
  }

  .contactUsRight {
    position: relative;
    width: 66.66666667%;

    .form {
      padding-top: 8px;
      padding-bottom: 12px;
      height: auto;
      display: block;
      text-align: left;

      h1 {
        font-size: 15px;
        font-weight: 600;
        padding-bottom: 8px;
        display: block;
        width: 100%;
      }
      input {
        border-width: 0;
        background-color: #f7f7f7;
        padding: 10px;
        width: 98%; height: 40px;
      }
      input[type=text]:focus {
        border: 1px solid #000;
        border-radius: 0;
      }
      textarea {
        border-width: 0;
        background-color: #f7f7f7;
        padding: 10px;
        width: 98%; height: 300px;
      }
    }
  }

  .contactUsBtn {
    color: #fff;
    width: 98%;
    transition: all .2s ease-in-out;
    background-color: #fe6666;
    display: inline-block;
    padding: 8px 22px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 0.875rem;
    line-height: 24px;
    font-weight: 500;
    letter-spacing: 1px;
    text-align: center;

    &:hover {
      background-color: #444;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, .2);
    }
  }
`;

function MainContactUs() {

  return (
    <ContactUs>
      <div className='contactUsLeft'>
        <h1>contact us</h1>
        <p>User generated content in real-time will have multiple touch points for offshoring, organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
      </div>
      <div className='contactUsRight'>
        <div className='office form'>
          <h1>회사명</h1>
          <input type="text" name="office_name" id="office_name"></input>
        </div>
        <div className='ph form'>
          <h1>연락처</h1>
          <input type="text" name="phone_number" id="phone_number"></input>
        </div>
        <div class="email form">
          <h1>메일주소</h1>
          <input type="text" name="email" id="email"></input>
        </div>
        <div class="quesition form">
          <h1>문의사항</h1>
          <textarea name="txtBox" id="txtBox" cols="30" rows="10"></textarea>
        </div>
        <div class="contactUsBtn"><a href="#">개인정보 동의 후 전송</a></div>
      </div>
    </ContactUs>
  );
}

export default MainContactUs;