import React from "react";
import {
  StatusBar,
  StatusBarOff,
  StatusBarOn,
  StatusBar_1,
  StatusBar_2,
  StatusBar_3,
  StatusBar_4,
  StatusBar_5,
} from "./Status.css";

interface StatusComponentProps {
  status: boolean[];
}

export default function StatusComponent(props: StatusComponentProps) {
  const { status } = props;

  return (
    <div className={`${StatusBar}`}>
      <div
        className={`${StatusBar_1} ${
          status[0] ? `${StatusBarOn}` : `${StatusBarOff}`
        }`}
      ></div>
      <div
        className={`${StatusBar_2} ${
          status[1] ? `${StatusBarOn}` : `${StatusBarOff}`
        }`}
      ></div>
      <div
        className={`${StatusBar_3} ${
          status[2] ? `${StatusBarOn}` : `${StatusBarOff}`
        }`}
      ></div>
      <div
        className={`${StatusBar_4} ${
          status[3] ? `${StatusBarOn}` : `${StatusBarOff}`
        }`}
      ></div>
      <div
        className={`${StatusBar_5} ${
          status[4] ? `${StatusBarOn}` : `${StatusBarOff}`
        }`}
      ></div>
    </div>
  );
}
