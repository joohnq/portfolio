import { vars } from "@/styles/global.css";
import { style } from "@vanilla-extract/css";

export const StatusBar = style({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  gap: 3,
});

export const StatusBarOff = style({
  width: 8,
  background: "transparent",
  border: `2px solid ${vars.color.white}`,
  borderRadius: 30,
});
export const StatusBarOn = style({
  background: vars.color.white,
  width: 8,
  border: `2px solid ${vars.color.white}`,
  borderRadius: 30,
});

export const StatusBar_1 = style({
  height: 15,
});
export const StatusBar_2 = style({
  height: 20,
});
export const StatusBar_3 = style({
  height: 25,
});
export const StatusBar_4 = style({
  height: 30,
});
export const StatusBar_5 = style({
  height: 35,
});
