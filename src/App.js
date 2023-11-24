import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/search";
import SearchResult from "./pages/searchResult";
import Post from "./components/post/Post";
import Comment from "./components/post/Comment";
import ReadPost from "./components/post/ReadPost";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/post" element={<Post />} />
          <Route path="/post-1" element={<ReadPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
