import React from "react";
import {
  MacPoints,
  MacPoint,
  PointGreen,
  PointRed,
  PointYellow,
} from "./MacPoints.css";

export default function MacPointsComponent() {
  return (
    <div className={`${MacPoints}`}>
      <div className={`${MacPoint} ${PointRed}`}></div>
      <div className={`${MacPoint} ${PointYellow}`}></div>
      <div className={`${MacPoint} ${PointGreen}`}></div>
    </div>
  );
}
