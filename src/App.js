import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/search";
import SearchResult from "./pages/searchResult";
import Post from "./components/post/Post";
import Comment from "./components/post/Comment";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
