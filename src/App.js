
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
import ReadPost from "./components/post/ReadPost";
import Map from "./components/map/Map";
import PostPage from "./pages/postPage";
import GoogleLoginButton from "./components/login/GoogleLoginButton";

function App() {
  return (
    <div className="root-wrap">

      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<GoogleLoginButton />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/post" element={<Post />} />
          <Route path="/post-1" element={<ReadPost />} />
        </Routes>
      </BrowserRouter>
      {/* <Map></Map> */}
      {/* <PostPage></PostPage> */}
      

    </div>
  );
}

export default App;

