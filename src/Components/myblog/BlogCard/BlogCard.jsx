import { Person, Comment, RemoveRedEye } from "@material-ui/icons";
import "./blogcard.css";

export default function BlogCard({ post }) {
  return (
    <div className="blogcard">
      <div className="blogcardTop">
        <img src={post.postImage} />
      </div>
      <div className="blogcardCenter">
        <h1>{post.postTitle}</h1>
        <div className="authorDetail">
          <div className="authorflex">
            <Person className="blogIcon" />
            <span className="blogAuthorText">{post.postAuthor}</span>
          </div>
          <div className="authorflex">
            <Comment className="blogIcon" />
            <span className="blogAuthorText">{post.postComment}</span>
          </div>
          <div className="authorflex">
            <RemoveRedEye className="blogIcon" />
            <span className="blogAuthorText">{post.postViews}</span>
          </div>
        </div>
        <div className="blogDiscription">{post.postDiscription}</div>
      </div>
    </div>
  );
}
