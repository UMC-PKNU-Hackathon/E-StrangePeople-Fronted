<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css'
=======

>>>>>>> forMerge1
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import GoogleLoginButton from './components/login/GoogleLoginButton';
import Search from "./pages/search";
import SearchResult from "./pages/searchResult";
import Post from "./components/post/Post";
<<<<<<< HEAD
// import Comment from "./components/post/Comment";

=======
import Comment from "./components/post/Comment";
import PostPage from "./pages/postPage"
import ReadPage from "./pages/readPage";
>>>>>>> forMerge1


function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/GoogleLoginButton" element={<GoogleLoginButton />} />
=======
    <div className="root-wrap">

      <BrowserRouter>
      
        <Routes>
>>>>>>> forMerge1
          <Route path="/search" element={<Search />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/post" element={<PostPage/>} />
          <Route path="/post-1" element={<ReadPage/>} />
        </Routes>
      </BrowserRouter>

<<<<<<< HEAD
=======

>>>>>>> forMerge1
    </div>
  );
}

export default App;
