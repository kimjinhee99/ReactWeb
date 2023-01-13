import styled from 'styled-components';
import MainYoutubeItem from './MainYoutubeItem';


function MainYoutubeList({data}) {
  return (
    <>
      { data.map(item => 
      <MainYoutubeItem key={item.id} item={item} />)}
    </>
  );
}

export default MainYoutubeList;