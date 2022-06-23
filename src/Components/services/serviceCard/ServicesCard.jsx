import "./servicescard.css"

export default function ServicesCard(props) {
  return (
    <div className="serviceCard">
      <div className="serviceCardWrapper">
        <div className="serviceTop">
        <i class={props.serviceIcon}></i>
        </div>
        <div className="serviceCenter"><h2>{props.serviceName}</h2></div>
        <div className="serviceBottom"><p>{props.serviceDiscription}</p></div>
      </div>
    </div>
  );
}
