/*global kakao*/ 
import React, { useEffect, useRef } from 'react'

const {kakao} = window;

const KakaoMap=()=>{

  useEffect(()=>{
    const container = document.getElementById('kakaoMap');

    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);

    const markerPosition  = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488); 
    const marker = new kakao.maps.Marker({
      position: markerPosition
  });
  // marker.setMap(map);
    }, [])

    return (
        <>
        <div id="kakaoMap" class="kakaoMap" style={{
          height: '50vh'

        }}></div>
        </>
    )
}

export default KakaoMap;