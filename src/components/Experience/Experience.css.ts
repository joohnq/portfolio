import { vars } from "@/styles/global.css";
import { style } from "@vanilla-extract/css";

export const ExperienceBody = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: vars.color.gray,
  borderRadius: 10,
  minHeight: 700,
  maxWidth: 1200,
  margin: "0 auto 20px",
  position: "relative",

  "@media": {
    "screen and (min-width: 0px)": {
      flexDirection: "column",
      // alignItems: "flex-start",
      gap: 20,
    },
    "screen and (min-width: 768px)": {
      flexDirection: "column",
      gap: 50,
    },
  },
});

export const Experience_MacPoints = style({
  position: "absolute",

  "@media": {
    "screen and (min-width: 0px)": {
      top: 20,
      right: 25,
    },
    "screen and (min-width: 768px)": {
      top: 30,
      right: 30,
    },
  },
});

export const ExperienceBodyJobs = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 20,
  "@media": {
    "screen and (min-width: 0px)": {
      padding: 20,
    },

    "screen and (min-width: 768px)": {
      padding: 30,
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
      maxWidth: 500,
    },

    "screen and (min-width: 768px)": {
      flexDirection: "row",
      maxWidth: 1000,
    },
  },
});

export const ExperienceBodyJob_BoxImage = style({
  "@media": {
    "screen and (min-width: 0px)": {
      maxWidth: 300,
    },

    "screen and (min-width: 768px)": {
      width: 300,
    },
  },
});

export const ExperienceBodyJob_Image = style({
  width: "100%",
  height: "100%",
});

export const ExperienceBodyJobImageText = style({
  textAlign: "center",
  marginTop: 20,
  marginBottom: 0,
  width: "100%",

  fontSize: "clamp(24px, calc(100vw - 90vw), 40px)",
});

export const ExperienceBodyJobContent = style({
  margin: 0,
  display: "flex",
  flexDirection: "column",
  maxWidth: 500,

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
  color: vars.color.lightGray,

  fontSize: "clamp(14px, calc(100vw - 96vw), 16px)",

  "@media": {
    "screen and (min-width: 0px)": {
      maxWidth: 500,
    },
  },
});

export const ExperienceBodyJobLanguages = style({
  marginTop: 20,
  color: vars.color.gradientColor1,
});
