import { LightStyle, LightPink, LightBlue, LightPurple } from "./Lights.css";

export default function LightComponent() {
  return (
    <div className={LightStyle}>
      <div className={LightPink}></div>
      <div className={LightBlue}></div>
      <div className={LightPurple}></div>
    </div>
  );
}
