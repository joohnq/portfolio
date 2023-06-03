import { style } from "@vanilla-extract/css";

export const ProjectsStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "clamp(80px, calc(100vw - 90vw), 200px)",
});

export const ProjectsStyle_Box = style({
  width: "100%",
  display: "grid",
  justifyContent: "center",
  gap: 120,
  padding: 20,
  gridTemplateColumns: "repeat(auto-fit, minmax(0, 400px))",
});
