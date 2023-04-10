import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/global.css";

export const StacksStyle = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(100px, 400px))",
  justifyContent: "center",
  alignItems: "center",
  gap: 50,
  marginTop: 400,
});

export const StackCard = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 10,
  background: vars.color.blueDarkTransparent,
  height: 400,
  paddingLeft: 20,
  paddingRight: 20,
  borderRadius: 30,
});

export const StackCard_Title = style({
  color: vars.color.white,
  textAlign: "center",
  margin: 0,

  fontSize: 22,
});

export const StackCard_Desc = style({
  color: vars.color.white,
  textAlign: "center",
  margin: 0,

  fontSize: 18,
});
