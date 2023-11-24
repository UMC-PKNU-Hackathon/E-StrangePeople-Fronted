// import React from 'react';
// import Posting from '../components/Posting';
// import { dummy } from '../postDummy';
// import axios from 'axios';

// export default function Posts({ location, season }) {
//   // location과 season에 따라 필터링된 데이터를 가져옴
//   const filteredData = dummy.articlesPreviewDtos.filter((item) => {
//     // location이 선택되었을 때 해당 location과 일치하는 데이터만 가져옴
//     const isLocationMatch = !location || item.location === location;
//     // season이 선택되었을 때 해당 season과 일치하는 데이터만 가져옴
//     const isSeasonMatch = !season || item.season === season;
//     // location과 season이 모두 일치하는 경우에만 데이터 반환
//     return isLocationMatch && isSeasonMatch;
//   });

//   return (
//     <div>
//       <div className='posts-container' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//         {filteredData.map((item) => {
//           return (
//             <Posting
//               key={item.title} // 반복되는 요소에는 key 속성을 추가하는 것이 좋습니다.
//               title={item.title}
//               thumbnail={item.thumbnail}
//               introduction={item.introduction}
//               createdAt={item.createdAt}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import Posting from '../components/Posting';
import axios from 'axios';

export default function Posts({ location, season }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 서버에서 데이터를 가져오는 API 호출
    axios.get(`http://localhist8080/api/posts`, {
      params: {
        location: location,
        season: season,
      }
    })
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, [location, season]);

  return (
    <div>
      <div className='posts-container' style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {posts.map((item) => (
          <Posting
            key={item.id} // 이 key는 고유해야 합니다. 반복되는 요소에는 고유한 key를 지정하는 것이 좋습니다.
            title={item.title}
            thumbnail={item.thumbnail}
            introduction={item.introduction}
            createdAt={item.createdAt}
          />
        ))}
      </div>
    </div>
  );
}











// import React from 'react';
// import Posting from '../components/Posting';
// import { dummy } from '../postDummy';

// export default function Posts({ location, season, searchQuery }) {
//   // location과 season에 따라 필터링된 데이터를 가져옴
//   const filteredData = dummy.articlesPreviewDtos.filter((item) => {
//     // location이 선택되었을 때 해당 location과 일치하는 데이터만 가져옴
//     const isLocationMatch = !location || item.location === location;
//     // season이 선택되었을 때 해당 season과 일치하는 데이터만 가져옴
//     const isSeasonMatch = !season || item.season === season;
//     // location과 season이 모두 일치하는 경우에만 데이터 반환
//     return isLocationMatch && isSeasonMatch;
//   });

//   return (
//     <div>
//       <div className='posts-container' style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
//         {filteredData
//           .filter(item =>
//             searchQuery &&
//             ((item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
//             (item.introduction && item.introduction.toLowerCase().includes(searchQuery.toLowerCase())))
//           )
//           .map((item) => (
//             <Posting
//               title={item.title}
//               thumbnail={item.thumbnail}
//               introduction={item.introduction}
//               createdAt={item.createdAt}
//             />
//           ))}
//       </div>
//     </div>
//   );
// }

 
// import React from 'react';
// import Post from '../components/Post';
// import { dummy } from '../postdummy';


// export default function Posts() {
//   console.log(dummy.articlesPreviewDtos); // 디버깅을 위한 이 줄을 추가합니다.

//   return (
//     <div>
//       <div className='posts-container'>
//         {dummy.articlesPreviewDtos.map((item, index) => (
//           <Post
//             key={index}
//             title={item.title}
//             thumbnail={item.thumbnail}
//             introduction={item.introduction}
//             createdAt={item.createdAt}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
