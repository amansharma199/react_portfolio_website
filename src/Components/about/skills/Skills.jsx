import "./skills.css";

export default function Skills(props) {
  return (
    <div className="skill">
      <div className="skillTitle">
        <div>{props.skillName}</div>
        <div>{props.skillPercent}</div>
      </div>
      <div
        className="skillPercentage"
        style={{ width: props.skillPercent }}
      ></div>
    </div>
  );
}
