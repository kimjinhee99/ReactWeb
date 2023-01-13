import MainListItem from "./MainListItem";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function MainList({data}) {
  const path = process.env.PUBLIC_URL;

  return (
      <>
      {data.map(item => <MainListItem key={item.id} item={item} />)}
      </>
  );
}

export default MainList;