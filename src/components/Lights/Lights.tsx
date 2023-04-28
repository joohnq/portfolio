import { LightStyle, Light1, Light2, Light3 } from "./Lights.css";

export default function LightComponent() {
  return (
    <div className={LightStyle}>
      <div className={Light1}></div>
      <div className={Light2}></div>
      <div className={Light3}></div>
    </div>
  );
}
