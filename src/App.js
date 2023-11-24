import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/search";
import SearchResult from "./pages/searchResult";
import Post from "./components/post/Post";
import Comment from "./components/post/Comment";
import PostPage from "./pages/postPage"
import ReadPage from "./pages/readPage";
import Map from "./components/map/Map";


function App() {
  return (
    <div className="root-wrap">

      {/* <BrowserRouter>
      
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/post" element={<PostPage/>} />
          <Route path="/post-1" element={<ReadPage/>} />
        </Routes>
      </BrowserRouter> */}
    <Map></Map>

    </div>
  );
}

export default App;
