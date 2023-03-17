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
          <div className="imageBg"></div>
        </div>
      </div>
    </div>
  );
}

export default MainContentsItem;