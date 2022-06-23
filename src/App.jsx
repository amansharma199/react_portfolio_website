import Home from "./pages/home/Home";
import "./app.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Posts from "./pages/posts/Posts";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/post/:id" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
