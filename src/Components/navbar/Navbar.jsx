import { Menu } from "@material-ui/icons";
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isNavExpand, setIsNavExpand] = useState(false);

  {
    window.addEventListener("scroll", function () {
      var navbar = document.getElementById("navbar");
         navbar.classList.toggle("sticky", window.scrollY >= 0);
    });
  }

  const expandNavbar = () => {
    setIsNavExpand(!isNavExpand);
  };


  const NavItems = document.getElementsByClassName("navbarLi");
  for (let i = 0; i < NavItems.length; i++) {
    NavItems[i].addEventListener("click", ()=>{
      setIsNavExpand(false)
    })
  }

  return (
    <div className="navbar" id="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">Aman Sharma</div>
        <div
          className={isNavExpand ? "navbarRight expandNavbar" : "navbarRight"}
        >
          <ul className="navbarUl">
            <a href="/"><li className="navbarLi">Home</li></a>
            <a href="#about"><li className="navbarLi">About</li></a>
            <a href="#service"><li className="navbarLi">Service</li></a>
            <a href="#work"><li className="navbarLi">Work</li></a>
            <a href="https://drive.google.com/file/d/1VrFlKMuuTyVbJ_PdJz6by3lIxeSKAcSk/view?usp=sharing" target="_blank"><li className="navbarLi">Resume</li></a>
            <a href="#contact"><li className="navbarLi">Contact</li></a>
          </ul>
        </div>
        <div className="burgerDiv" onClick={expandNavbar}>
          <Menu className="burger" />
        </div>
      </div>
    </div>
  );
}
