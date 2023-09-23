import { style } from "@vanilla-extract/css";

export const ProjectsStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "clamp(80px, calc(100vw - 90vw), 200px)",
  padding: "0 20px",
});

export const ProjectsStyle_Box = style({
  width: "100%",
  display: "grid",
  alignItems: "flex-start",
  justifyContent: "center",
  justifyItems: "center",
  gap: 50,
  gridTemplateColumns: "repeat(auto-fit, minmax(0, 400px))",
  marginTop: 100,
});
