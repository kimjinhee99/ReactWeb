import { FaArrowRight } from "react-icons/fa";

function MainContentsItem({item}) {

  const {imgUrl, title, subTitle} = item;
  const path = process.env.PUBLIC_URL;

  return (
    <div className='mainContentsList'>
      <div className='gridImage'>
        <div className="gridInnerImage"></div>
        <div className='bgOverlay'>
          <div className="overlayContents">
            <div className='contentsTxt'>
              <h1>{title}</h1>
              <h2>{subTitle}</h2>
              <span><FaArrowRight /></span>
            </div>
          </div>
<<<<<<< HEAD
          <div className="imageBg"></div>
=======
>>>>>>> e58a4d8f5dc3e62ff571b47805b483d853888786
        </div>
      </div>
    </div>
  );
}

export default MainContentsItem;