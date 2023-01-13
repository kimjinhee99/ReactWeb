
function MainYoutubeItem({item}) {
  const {num, title, des} = item;

  return (
    <div className='introduceBox'>
      <h1>0{num}</h1>
      <h2>{title}</h2>
      <p>{des}</p>
    </div>
  );
}

export default MainYoutubeItem;