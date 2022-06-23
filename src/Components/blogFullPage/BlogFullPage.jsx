import "./blogFullPage.css"
import Posts from "../../blogData";
import { useLocation } from "react-router-dom";




export default function BlogFullPage() {
    const location = useLocation();
    const path = location.pathname.split('/')[2]-1;
  return (
    <div className='blogFullPage'>
        <div className="blogFullPageWrapper">
          <div className="postTop">
                  <h1>{Posts[path].postTitle}</h1>
          </div>
          <div className="postCenter">
                  <img src={Posts[path ].postImage}/>
          </div>
          <div className="postBottom">
                  <p>{Posts[path].postDiscription}</p>
          </div>
        </div>
    </div>
  )
}
