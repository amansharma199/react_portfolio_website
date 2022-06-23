import ServicesCard from "./serviceCard/ServicesCard";
import "./Services.css";

export default function Services() {
  return (
    <div className="service" id="service">
      <div className="serviceWrapper">
        <div className="serviceHeading">
          <h1>My Services</h1>
          <p>Awesome Features</p>
        </div>
        <div className="serviceCardSection">
          <ServicesCard
            serviceIcon="fas fa-laptop-code"
            serviceName="Development"
            serviceDiscription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />

          <ServicesCard
            serviceIcon="fas fa-palette"
            serviceName="Design"
            serviceDiscription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />

          <ServicesCard
            serviceIcon="fas fa-bullhorn"
            serviceName="Branding"
            serviceDiscription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />

          <ServicesCard
            serviceIcon="fas fa-tools"
            serviceName="Easy Installation"
            serviceDiscription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />

          <ServicesCard
            serviceIcon="fas fa-mobile"
            serviceName="Fully Responsive"
            serviceDiscription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />

          <ServicesCard
            serviceIcon="fas fa-headset"
            serviceName="Quick Support"
            serviceDiscription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          
        </div>
      </div>
    </div>
  );
}
