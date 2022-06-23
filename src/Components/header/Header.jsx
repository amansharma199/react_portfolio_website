
import { ExpandMore } from "@material-ui/icons";
import "./header.css";

export default function Header() {
  return (
    <div className="header" id="home">
      <div className="headerWrapper">
        <div className="headerText">I Am <span>Web Developer.</span></div>
        <div className="headerIcon"><a href="#about"><ExpandMore fontSize="large"/></a></div>
      </div>
    </div>
  );
}
