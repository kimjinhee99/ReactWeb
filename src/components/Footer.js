import styled from 'styled-components';

const FooterContents = styled.div`
  background-color: #282828;
  position: relative;
  color: rgba(255, 255, 255, 0.4);
<<<<<<< HEAD
  padding: 3vw 0;
  font-size: 0.9vw;
=======
  padding: 40px 0;
  font-size: 0.875rem;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
  line-height: 1.8;
  text-align: center;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  text-transform: capitalize;
  
  .txtCenter {
    text-align: left;
<<<<<<< HEAD
    margin-left: 7.5vw;
  }
  p {
    margin-right: 7.5vw;
=======
    margin-left: 191px;
  }
  p {
    margin-right: 191px;
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
  }
`;

function Footer(props) {
  return (
    <FooterContents>
      <div className='txtCenter'>
        <p>copyrights &copy; 2021 all rights reserved by dyami.</p>
        <p>terms of use / privacy policy</p>
      </div>
      <p>from.yami@gmail.com . 1234-5678</p>
    </FooterContents>
  );
}

export default Footer;