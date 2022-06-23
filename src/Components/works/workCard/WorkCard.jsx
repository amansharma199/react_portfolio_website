import { Search } from "@material-ui/icons"
import "./workcard.css"

export default function WorkCard(props) {
  return (
    <div className='workCard'>
            <div className="workHoverItems">
                <div className="workHoverBG">
                  <Search className="searchIcon"/>
                  <h4>{props.projectTitle}</h4>
                </div>
            </div>
            <div className="workItems">
                <img src={props.Cardimg}/>
            </div>
    </div>
  )
}
