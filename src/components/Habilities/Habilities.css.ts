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
  gap: 100,

  height: 700,

  position: "relative",
});

export const HabilitiesHeaders = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 40,
  position: "absolute",
  height: 150,
  top: 0,
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

export const HabilitiesBody = style({
  width: "100%",
  position: "absolute",
  bottom: 0,
  height: 600,
});

export const HabilitiesBody_About = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: 1200,
  margin: "auto",
});

export const HabilitiesBody_AboutPhoto = style({
  borderRadius: "50%",
});

export const HabilitiesBody_AboutDesc = style({
  maxWidth: 600,
  fontSize: 20
});
