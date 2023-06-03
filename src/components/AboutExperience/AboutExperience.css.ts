import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/global.css";

export const AboutExperience = style({
  borderRadius: 50,
  color: vars.color.white,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

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
  marginBottom: "-1px",

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
  padding: "15px 20px",

  borderRadius: "10px 10px 0 0",

  background: vars.color.gradient,
});

export const AboutExperienceBody = style({
  width: "100%",
});
