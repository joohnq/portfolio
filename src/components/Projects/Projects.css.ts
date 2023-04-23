import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/global.css";

export const ProjectsStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  padding: "clamp(10px, calc(100vw - 96vw), 30px)",

  marginTop: "clamp(80px, calc(100vw - 90vw), 200px)",
});

export const ProjectCard = style({
  width: "100%",
  "@media": {
    "screen and (min-width:0px)": {
      display: "grid",
      gridTemplateAreas: `
      "image"
      "content"
    `,
    },
    "screen and (min-width: 768px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 30,
    },
  },
  selectors: {
    "&:nth-child(1n)": {
      marginTop: 50,
    },
  },
});

export const ProjectLeft = style({
  alignItems: "flex-end",
});

export const ProjectRight = style({
  alignItems: "flex-start",
});

export const TextStart = style({
  "@media": {
    "screen and (min-width:0px)": {
      textAlign: "center",
    },
    "screen and (min-width: 768px)": {
      textAlign: "start",
    },
  },
});

export const TextEnd = style({
  "@media": {
    "screen and (min-width:0px)": {
      textAlign: "center",
    },
    "screen and (min-width: 768px)": {
      textAlign: "end",
    },
  },
});

export const LinkExternal = style({
  color: vars.color.white,
});

export const ProjectCard_Content = style({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: 20,
  gridArea: "content",

  "@media": {
    "screen and (min-width:0px)": {
      width: "100%",
      alignItems: "center",
      paddingTop: 40,
      paddingBottom: 40,
    },
    "screen and (min-width: 768px)": {
      alignItems: "center",
      width: "50%",
      padding: 40,
    },
  },
});

export const ProjectCard_ContentAbove = style({
  display: "flex",
  alignItems: "center",
  gap: 20,
  textDecoration: "none",
});

export const ProjectCard_ContentTitle = style({
  color: vars.color.white,
  display: "inline-block",
  margin: 0,

  fontSize: "clamp(20px, calc(100vw - 98vw), 24px)",
});

export const ProjectCard_ContentDesc = style({
  color: vars.color.white,
  display: "inline-block",
  margin: 0,

  maxWidth: 600,

  fontSize: "clamp(16px, calc(100vw - 99vw), 18px)",
});

export const ProjectCard_Image = style({
  gridArea: "image",

  "@media": {
    "screen and (min-width:0px)": {
      width: "100%",
      margin: "0 auto",
      textAlign: "center",
    },
    "screen and (min-width: 576px)": {
      width: "80%",
    },
    "screen and (min-width: 768px)": {
      width: "50%",
    },
  },
});

export const ProjectCard_Img = style({
  width: "100%",
  height: "100%",
  borderRadius: 20,
});
