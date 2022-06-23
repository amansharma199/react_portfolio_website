import "./work.css";
import WorkCard from "./workCard/WorkCard";

export default function Work() {
  return (
    <div className="work" id="work">
      <div className="workWrapper">
        <div className="workHeading">
          <h1>Recent Works</h1>
          <p>Latest Projects</p>
        </div>
        <div className="workSection">
          <a href="https://bespoke-hummingbird-f261d9.netlify.app/" target="_blank">
            <WorkCard Cardimg="/assets/project/facebook-clone.png" projectTitle="FaceBook-Clone"/>
          </a>
          <a href="https://amansharma199.github.io/portfolio1/" target="_blank">
            <WorkCard Cardimg="/assets/project/portfolio-html-css-js.png" projectTitle="HTML CSS JS Protfolio"/>
          </a>
          <a href="https://amansharma199.github.io/amanonlineshop/" target="_blank">
            <WorkCard Cardimg="/assets/project/shop-landing-website.png" projectTitle="Shop Landing Website"/>
          </a>
          <a href="https://amansharma199.github.io/lovecalculator/" target="_blank">
            <WorkCard Cardimg="/assets/project/love-calculator.png" projectTitle="Love Calculator"/>
          </a>
          <a href="#" target="_blank">
            <WorkCard Cardimg="/assets/post/5.jpeg" />
          </a>
          <a href="#" target="_blank">
            <WorkCard Cardimg="/assets/post/6.jpeg" />
          </a>
        </div>
      </div>
    </div>
  );
}
