import { NavigateBeforeRounded } from "@material-ui/icons";
import { useEffect, useState } from "react";
import "./about.css";
import Skills from "./skills/Skills";

export default function About() {
  const [skillBtn, setSkillBtn] = useState("none ")
  const [aboutBtn, setAboutBtn] = useState("block")
  const [activeToggleAbout, setActiveToggleAbout] = useState("active")
  const [activeToggleSkill, setActiveToggleSkill] = useState("")
  
  // console.log("this is my skill button+++++",skillBtn);

 

  const showAbout = () => {
    setAboutBtn("block")
    setSkillBtn("none")
    setActiveToggleAbout("active")
    setActiveToggleSkill("")
  }
  const showSkill = () => {
    setSkillBtn("block")
    setAboutBtn("none")
    setActiveToggleAbout("")
    setActiveToggleSkill("active")
  }
 
  return (
    <div className="about" id="about">
      <div className="aboutWrapper">
        <div className="aboutLeft">
          <img src="/assets/person/headerMan.jpeg" />
        </div>
        <div className="aboutRight">
        
          <div className="aboutRightSection">
            <div className="aboutRightBtn">
              <button className={activeToggleAbout} id="about" onClick={showAbout}>About</button>
              <button className={activeToggleSkill} id="skill" onClick={showSkill}>Skills</button>
            </div>
        
            <div className="aboutRightAbout" style={{display : aboutBtn}}>
              <h1>Hi There! I'm <span>Aman</span></h1>
              <p>
                I am professional Front End Web Developer. I create beautiful
                Front End Websites using best practice Accessibility. I enjoy
                turning complex problelms into simple, beautiful and intuitive
                interface design. <br /> <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="aboutRightSkills" style={{display : skillBtn}}>
              <Skills skillName="HTML" skillPercent="90%" />
              <Skills skillName="CSS" skillPercent="70%" />
              <Skills skillName="JS" skillPercent="75%" />
              <Skills skillName="ReactJS" skillPercent="50%" />
              <Skills skillName="Graphic Design" skillPercent="50%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
