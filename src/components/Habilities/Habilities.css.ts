import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/global.css";

export const HabilitiesStyle = style({
  backgroundColor: vars.color.blueDarkTransparent,
  width: "100%",
  marginTop: 400,
  borderRadius: 50,
  padding: 40,
  color: "#fff",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

export const HabilitiesHeaders = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 40,
});

export const HabilitiesHeader = style({
  backgroundColor: "transparent",
  color: vars.color.white,
  border: 0,
  fontSize: 20,
  cursor: "pointer",
});

export const HeaderSelected = style({
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 20,
  paddingRight: 20,

  backgroundColor: vars.color.purpleLight,
  borderRadius: 10,
});
