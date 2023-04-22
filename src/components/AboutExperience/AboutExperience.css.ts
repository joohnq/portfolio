import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/global.css";

export const AboutExperience = style({
  backgroundColor: vars.color.blueDarkTransparent,
  borderRadius: 50,
  color: "#fff",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 50,

  position: "relative",
  marginTop: "clamp(80px, calc(100vw - 90vw), 200px)",

  "@media": {
    "screen and (min-width: 0px)": {
      padding: 20,
    },

    "screen and (min-width: 768px)": {
      padding: 40,
    },
  },
});

export const AboutExperienceHeaders = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 40,

  "@media": {
    "screen and (min-width: 0px)": {
      flexDirection: "column",
    },

    "screen and (min-width: 330px)": {
      flexDirection: "row",
    },
  },
});

export const AboutExperienceHeader = style({
  backgroundColor: "transparent",
  color: vars.color.white,
  border: 0,
  cursor: "pointer",

  "@media": {
    "screen and (min-width: 0px)": {
      fontSize: 16,
    },

    "screen and (min-width: 350px)": {
      fontSize: "clamp(14px, calc(100vw - 96vw), 20px)",
    },
  },
});

export const AboutExperienceSelected = style({
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 20,
  paddingRight: 20,

  backgroundColor: vars.color.purpleLight,
  borderRadius: 10,
});

export const AboutBody = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "auto",
  marginBottom: 20,
  gap: 50,

  "@media": {
    "screen and (min-width: 0px)": {
      flexDirection: "column",
    },
    "screen and (min-width: 1040px)": {
      flexDirection: "row",
      maxWidth: 1200,
    },
  },
});

export const AboutBodyPhoto = style({
  borderRadius: "50%",
  maxWidth: 450,
  width: "100%",
  height: "100%",
});

export const AboutBodyDesc = style({
  fontSize: "clamp(16px, calc(100vw - 98vw), 18px)",
  letterSpacing: 2,

  "@media": {
    "screen and (min-width: 0px)": {
      textAlign: "center",
    },
    "screen and (min-width: 768px)": {
      textAlign: "start",
      width: "80%",
    },
    "screen and (min-width:992px)": {
      textAlign: "start",
      width: "60%",
    },
  },
});

export const ExperienceBody = style({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  maxWidth: 800,
  margin: "auto",
  marginTop: 50,
  gap: 50,
  marginBottom: 100,
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
  marginTop: 20,
  marginBottom: 0,
  color: vars.color.purpleLight,
  fontSize: "clamp(14px, calc(100vw - 98vw), 16px)",
});
