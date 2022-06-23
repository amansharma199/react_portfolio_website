import BlogCard from "./BlogCard/BlogCard";
import "./blogs.css";
import Posts from "./../../../src/blogData";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <div className="blogs">
      <div className="blogsWrapper">
        <div className="blogsHeading">
          <h1>My Blogs</h1>
          <p>Latest News</p>
        </div>
        <div className="blogsCardSection">
          {Posts.map((d) => (
            <Link to={`/post/${d.id}`}><BlogCard key={d.id} post={d} /></Link>
          ))}
        </div>
      </div>
    </div>
  );
}
