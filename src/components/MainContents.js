import React, { useState } from 'react';
import MainContentsList from './MainContentsList';
import maincontentsData from './maincontentsData';
import '../assets/css/mainContents.css';

function MainContents() {
  const [data, setData] = useState(maincontentsData);

  return (
    <div>
      <MainContentsList data={data} />
    </div>
  );
}

export default MainContents;