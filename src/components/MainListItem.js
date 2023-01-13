import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function MainListItem({item}) {
  const {imgUrl, subTitle, title, des} = item;
  const path = process.env.PUBLIC_URL;

  return (
    <>

          <img src={path + imgUrl} alt={subTitle} />
          <div className="bgOveray">
          </div>
          <div className="imageListTxt">
            <h1>{title}</h1>
            <p>{des}</p>
          </div>

    </>
  );
}

export default MainListItem;