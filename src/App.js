
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Search from "./pages/search";
// import SearchResult from "./pages/searchResult";
// import Post from "./components/post/Post";
// import Comment from "./components/post/Comment";

// function App() {
//   return (
//     <div className="root-wrap">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/search" element={<Search />} />
//           <Route path="/search/:query" element={<SearchResult />} />
//           <Route path="/post" element={<Post />} />
//         </Routes>
//       </BrowserRouter>

//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/search";
import SearchResult from "./pages/searchResult";
import Post from "./components/post/Post";
import Comment from "./components/post/Comment";
<<<<<<< HEAD
import PostPage from "./pages/postPage";
import Map from "./components/map/Map";
=======
import ReadPost from "./components/post/ReadPost";
>>>>>>> 91fba812f21ce2d2788c62c4e7a0ed41f7b5c996

function App() {
  return (
    <div className="root-wrap">
<<<<<<< HEAD
      <PostPage></PostPage>
      {/* <Map></Map> */}
=======
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/post" element={<Post />} />
          <Route path="/post-1" element={<ReadPost />} />
        </Routes>
      </BrowserRouter>
>>>>>>> 91fba812f21ce2d2788c62c4e7a0ed41f7b5c996

    </div>
  );
}

export default App;

