import styled from 'styled-components';

const FooterContents = styled.div`
  background-color: #282828;
  position: relative;
  color: rgba(255, 255, 255, 0.4);
  padding: 40px 0;
  font-size: 0.875rem;
  line-height: 1.8;
  text-align: center;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  text-transform: capitalize;
  
  .txtCenter {
    text-align: left;
    margin-left: 191px;
  }
  p {
    margin-right: 191px;
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