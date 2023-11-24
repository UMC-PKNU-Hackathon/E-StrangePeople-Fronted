//입력할떄
import React, { useEffect, useRef, useState } from 'react';

<<<<<<< HEAD
function Map() {
=======
const Map = ({ onCoordinatesUpdate }) => {
>>>>>>> 33af846f7e9f0b7b2946c36ebcb51dae4a2cb56a
  const mapRef = useRef(null);
  const markers = [];
  const [searchedPlace, setSearchedPlace] = useState([]);

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

      window.kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
        const latlng = mouseEvent.latLng;

        let geocoder = new window.kakao.maps.services.Geocoder();
        let coord = new window.kakao.maps.LatLng(mouseEvent.latLng.Ma, mouseEvent.latLng.La);

        geocoder.coord2Address(coord.getLng(), coord.getLat(), function (result, status) {
          if (status === window.kakao.maps.services.Status.OK) {
            const arr = { ...result };
            const _arr = arr[0].address.region_2depth_name;
            console.log(_arr);
            console.log(result);
            console.log(typeof mouseEvent.latLng.Ma, typeof mouseEvent.latLng.La);
            onCoordinatesUpdate({
              latitude: mouseEvent.latLng.Ma,
              longitude: mouseEvent.latLng.La,
            });
          }
        });

        markers.forEach((existingMarker) => {
          existingMarker.setMap(null);
        });

        const marker = new window.kakao.maps.Marker({
          position: latlng,
        });

        marker.setMap(map);
        markers.push(marker);
      });

      // 컴포넌트가 언마운트 될 때 이벤트 제거
      return () => {
        window.kakao.maps.event.clearListeners(map, 'click');
      };
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [onCoordinatesUpdate, searchedPlace]);

  useEffect(() => {
    const map = mapRef.current;

<<<<<<< HEAD
    if (searchedPlace) {
      // 장소 검색 서비스 생성
=======
    if (map && searchedPlace) {
>>>>>>> 33af846f7e9f0b7b2946c36ebcb51dae4a2cb56a
      const ps = new window.kakao.maps.services.Places();
      const keyword = searchedPlace;

      ps.keywordSearch(keyword, (data, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const placeLatLng = new window.kakao.maps.LatLng(data[0].y, data[0].x);

          map.setCenter(placeLatLng);

          markers.forEach((existingMarker) => {
            existingMarker.setMap(null);
          });
        }
      });
    }
  }, [searchedPlace]);

  return (
    <div>
<<<<<<< HEAD
      <div>
        <input
          type="text"
          placeholder="장소를 검색하세요"
          onChange={(e) => setSearchedPlace(e.target.value)}
        />
      </div>
      <div id="map" style={{ width: '500px', height: '400px' }}></div>
    </div>
  );
}
=======
      <input
        type="text"
        placeholder="장소를 검색하세요"
        onChange={(e) => setSearchedPlace(e.target.value)}
      />
      <Box id="map" style={{ width: '780px', height: '875px' }}></Box>
    </div>
  );
};

const Box = styled.div`
  width: 100%;
  height: 100%;
`;
>>>>>>> 33af846f7e9f0b7b2946c36ebcb51dae4a2cb56a

export default Map;