import { style } from "@vanilla-extract/css";

export const ProjectsStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "clamp(80px, calc(100vw - 90vw), 200px)",
  marginRight: 20,
  marginBottom: 20,
  marginLeft: 20,
});

export const ProjectsStyle_Box = style({
  width: "100%",
  display: "grid",
  justifyContent: "center",
  justifyItems: "center",
  gap: 50,
  gridTemplateColumns: "repeat(auto-fit, minmax(0, 400px))",
});
