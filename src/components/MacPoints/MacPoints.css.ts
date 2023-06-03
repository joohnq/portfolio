import { vars } from "@/styles/global.css";
import { style } from "@vanilla-extract/css";

export const MacPoints = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 5,
});

export const MacPoint = style({
  width: 10,
  height: 10,
  borderRadius: 10,
});

export const PointRed = style({
  backgroundColor: vars.color.pointRed,
});
export const PointYellow = style({
  backgroundColor: vars.color.pointYellow,
});
export const PointGreen = style({
  backgroundColor: vars.color.pointGreen,
});
