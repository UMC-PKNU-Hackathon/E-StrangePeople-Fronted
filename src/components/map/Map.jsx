import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Map = () => {
  const mapRef = useRef(null);
  const markers = [];
  const [searchedPlace, setSearchedPlace] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=4694ce49f0ef2e3c93a7af1b0c0267a7&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
        level: 3,
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOption);
      mapRef.current = map;

      // 지도에 클릭 이벤트 등록
      window.kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
        const latlng = mouseEvent.latLng;

        // 기존 마커들 지도에서 제거
        markers.forEach((existingMarker) => {
          existingMarker.setMap(null);
        });

        // 새로운 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: latlng,
        });

        // 마커 지도에 표시
        marker.setMap(map);

        // 마커를 배열에 추가
        markers.push(marker);
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;

    if (map && searchedPlace) {
      // 장소 검색 서비스 생성
      const ps = new window.kakao.maps.services.Places();

      // 검색할 장소명 입력
      const keyword = searchedPlace;

      // 장소 검색 요청
      ps.keywordSearch(keyword, (data, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          // 검색 결과에서 첫 번째 장소의 좌표를 얻어옴
          const placeLatLng = new window.kakao.maps.LatLng(data[0].y, data[0].x);

          // 검색된 장소로 지도 이동
          map.setCenter(placeLatLng);

          // 기존 마커들 지도에서 제거
          markers.forEach((existingMarker) => {
            existingMarker.setMap(null);
          });
        }
      });
    }
  }, [searchedPlace]);

  return (
    <div>
        <input
          type="text"
          placeholder="장소를 검색하세요"
          onChange={(e) => setSearchedPlace(e.target.value)}
        />
      <Box id="map" style={{ width: "780px", height: "875px" }}></Box>
    </div>
  );
};
const Box = styled.div `
width: 100%;
height: 100%;

`

export default Map;

