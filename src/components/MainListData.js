import { FaPlus, FaPlay, FaRegClone } from "react-icons/fa";

const MainListData = [
  {
    id: 1,
    brandingIcon: <FaPlus />,
    imgUrl: '/images/05-1.jpg',
    title: '단일 이미지',
    subTitle: '단일 이미지',
    des: '위대한 일은 언제나 다른 사람과 협력해야만 이뤄낼 수 있습니다.',
  },
  {
    id: 2,
    brandingIcon: <FaRegClone />,
    imgUrl: '/images/05-2.jpg',
    title: '다중 이미지',
    subTitle: '다중 이미지',
    des: '위대한 일은 언제나 다른 사람과 협력해야만 이뤄낼 수 있습니다.',
  },
  {
    id: 3,
    brandingIcon: <FaPlay />,
    imgUrl: '/images/05-3.jpg',
    title: '영상 플레이',
    subTitle: '영상 플레이',
    des: '위대한 일은 언제나 다른 사람과 협력해야만 이뤄낼 수 있습니다.',
  }
]

export default MainListData;