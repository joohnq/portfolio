import { vars } from "@/styles/global.css";
import { style } from "@vanilla-extract/css";

export const ExperienceBody = style({
  display: "flex",
  justifyContent: "center",
  marginBottom: 20,
  backgroundColor: vars.color.gray,
  borderRadius: 10,
  minHeight: 700,
  maxWidth: 1200,

  "@media": {
    "screen and (min-width: 0px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      padding: 20,
      gap: 20,
    },
    "screen and (min-width: 768px)": {
      flexDirection: "column",
      padding: 30,
      gap: 50,
    },
  },
});

export const ExperienceBodyJob = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  gap: 20,

  "@media": {
    "screen and (min-width: 0px)": {
      flexDirection: "column",
    },

    "screen and (min-width: 768px)": {
      flexDirection: "row",
    },
  },
});

export const ExperienceBodyJobImageText = style({
  textAlign: "center",
  fontSize: 40,
  marginTop: 20,
  marginBottom: 0,

  "@media": {
    "screen and (min-width: 0px)": {
      width: "100%",
    },

    "screen and (min-width: 768px)": {
      width: "40%",
    },
  },
});

export const ExperienceBodyJobContent = style({
  margin: 0,
  display: "flex",
  flexDirection: "column",

  "@media": {
    "screen and (min-width: 0px)": {
      width: "100%",
    },

    "screen and (min-width: 768px)": {
      width: "60%",
      alignItems: "flex-start",
    },
  },
});

export const ExperienceBodyJobTitle = style({
  margin: 0,

  fontSize: "clamp(16px, calc(100vw - 96vw), 20px)",
});

export const ExperienceBodyJobDesc = style({
  marginTop: 10,
  marginBottom: 0,

  fontSize: "clamp(14px, calc(100vw - 96vw), 16px)",

  "@media": {
    "screen and (min-width: 0px)": {
      maxWidth: 400,
    },
  },
});

export const ExperienceBodyJobLanguages = style({
  background: vars.color.gradient,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  MozBackgroundClip: "text",
  marginTop: 20,
  marginBottom: 0,
  fontSize: "clamp(14px, calc(100vw - 98vw), 16px)",
});
