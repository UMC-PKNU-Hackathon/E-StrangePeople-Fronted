import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import GoogleLoginButton from './components/login/GoogleLoginButton';
import Search from "./pages/search";
import SearchResult from "./pages/searchResult";
import Post from "./components/post/Post";
// import Comment from "./components/post/Comment";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/GoogleLoginButton" element={<GoogleLoginButton />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
