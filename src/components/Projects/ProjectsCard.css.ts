import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/global.css";

export const ProjectCard = style({
  maxWidth: 500,
  padding: 30,
  backgroundColor: vars.color.gray,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  flexDirection: "column",
  gap: 10,
  borderRadius: 10,
});

export const LinkExternal = style({
  backgroundColor: vars.color.pointRed,
});

export const ProjectCard_Content = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
});

export const ProjectCard_ContentAbove = style({
  display: "flex",
  alignItems: "center",
  gap: 20,
  textDecoration: "none",
});

export const ProjectCard_ContentTitle = style({
  color: vars.color.white,
  wordBreak: "break-word",
  margin: "0 0 10px 0",
  fontSize: "clamp(30px, calc(100vw - 98vw), 30px)",
});

export const ProjectCard_Languages = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: 10,
  marginBottom: 20,
});

export const ProjectCard_Image = style({
  width: "100%",
  height: "100%",
  marginBottom: 20,
});

export const ProjectCard_Img = style({
  width: "100%",
  height: "100%",
  borderRadius: 10,
  objectFit: "cover",
});

export const ProjectCard_Buttons = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
});

export const ProjectCard_Button = style({
  width: "100%",
  gap: 10,
  height: 40,
  borderRadius: 5,
  border: 0,
});

export const ProjectCard_Button_a = style({
  textDecoration: "none",
  color: vars.color.blueDark,
});
