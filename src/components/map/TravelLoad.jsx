// import React, { useEffect,useState } from "react";


// function TravelLoad( {x,y}) {


//   useEffect(() => {
      
//     const mapContainer = document.getElementById("map");
//     const mapOption = {
//       center: new window.kakao.maps.LatLng(33.450701, 126.570667),
//       level: 3,
//     };
//     const map = new window.kakao.maps.Map(mapContainer, mapOption);
//     const linePath = [
//         new window.kakao.maps.LatLng(33.450705, 126.570677),
//         new window.kakao.maps.LatLng(33.450936, 126.569477),
//         new window.kakao.maps.LatLng(33.450879, 126.56994), 
//         new window.kakao.maps.LatLng(33.451393, 126.570738)
//     ];
    
//     // 지도에 표시할 선을 생성합니다
//     var polyline = new window.kakao.maps.Polyline({
//         path: linePath, // 선을 구성하는 좌표배열 입니다
//         strokeWeight: 5, // 선의 두께 입니다
//         strokeColor: '#FFAE00', // 선의 색깔입니다
//         strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
//         strokeStyle: 'solid' // 선의 스타일입니다
//     });
    
//     // 지도에 선을 표시합니다 
//     polyline.setMap(map);  


  

//     // 마커를 표시할 위치와 title 객체 배열입니다
//     const positions = [
//       {
//         title: "카카오",
//         latlng: new window.kakao.maps.LatLng(33.450705, 126.570677),
//       },
//       {
//         title: "생태연못",
//         latlng: new window.kakao.maps.LatLng(33.450936, 126.569477),
//       },
//       {
//         title: "텃밭",
//         latlng: new window.kakao.maps.LatLng(33.450879, 126.56994),
//       },
//       {
//         title: "근린공원",
//         latlng: new window.kakao.maps.LatLng(33.451393, 126.570738),
//       },
//     ];

//     // 마커 이미지의 이미지 주소입니다
//     const imageSrc =
//       "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

//     for (let i = 0; i < positions.length; i++) {
//       // 마커 이미지의 이미지 크기 입니다
//       const imageSize = new window.kakao.maps.Size(24, 35);

//       // 마커 이미지를 생성합니다
//       const markerImage = new window.kakao.maps.MarkerImage(
//         imageSrc,
//         imageSize
//       );

//       // 마커를 생성합니다
//       const marker = new window.kakao.maps.Marker({
//         map: map, // 마커를 표시할 지도
//         position: positions[i].latlng, // 마커를 표시할 위치
//         title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
//         image: markerImage, // 마커 이미지
//       });
//     }
//   }, []);

//   return <div id="map" style={{ width: "500px", height: "400px" }}></div>;
// }

// export default TravelLoad;

import React, { useEffect } from "react";

function TravelLoad({ x, y }) {
  useEffect(() => {
    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new window.kakao.maps.Map(mapContainer, mapOption);

    // Example usage with x, y coordinates
    const linePath = x.map((coordX, index) => {
      return new window.kakao.maps.LatLng(coordX, y[index]);
    });

    // 지도에 표시할 선을 생성합니다
    var polyline = new window.kakao.maps.Polyline({
      path: linePath, // 선을 구성하는 좌표배열 입니다
      strokeWeight: 5, // 선의 두께 입니다
      strokeColor: "#FFAE00", // 선의 색깔입니다
      strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
      strokeStyle: "solid", // 선의 스타일입니다
    });

    // 지도에 선을 표시합니다
    polyline.setMap(map);

    // 마커 이미지의 이미지 주소입니다
    const imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (let i = 0; i < x.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      const imageSize = new window.kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      const markerImage = new window.kakao.maps.MarkerImage(
        imageSrc,
        imageSize
      );

      // 마커를 생성합니다
      const marker = new window.kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new window.kakao.maps.LatLng(x[i], y[i]), // 마커를 표시할 위치
        title: `Marker ${i + 1}`, // 마커의 타이틀
        image: markerImage, // 마커 이미지
      });
    }
  }, [x, y]);

  return <div id="map" style={{ width: "500px", height: "400px" }}></div>;
}

export default TravelLoad;
