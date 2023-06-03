import { vars } from "@/styles/global.css";
import { style } from "@vanilla-extract/css";

export const AboutBody = style({
  display: "flex",
  justifyContent: "center",
  marginBottom: 20,
  backgroundColor: vars.color.gray,
  borderRadius: 10,
  minHeight: 700,
  maxWidth: 1200,
  position: "relative",

  "@media": {
    "screen and (min-width: 0px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      padding: 20,
      gap: 20,
    },
    "screen and (min-width: 768px)": {
      flexDirection: "row",
      alignItems: "stretch",
      padding: 0,
      gap: 50,
    },
  },
});

export const AboutBody_BoxImage = style({
  objectFit: "cover",

  "@media": {
    "screen and (min-width: 0px)": {
      width: "100%",
    },
    "screen and (min-width: 768px)": {
      width: "45%",
    },
  },
});

export const AboutBody_Image = style({
  borderRadius: "10px 0 0 10px",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",

  "@media": {
    "screen and (min-width: 0px)": {
      borderRadius: "10px",
    },
    "screen and (min-width: 768px)": {
      borderRadius: "10px 0 0 10px",
    },
  },
});

export const AboutBody_BoxContent = style({
  display: "flex",
  alignItems: "flex-end",
  flexDirection: "column",
  justifyContent: "space-evenly",

  padding: "20px 20px 20px 0",

  "@media": {
    "screen and (min-width: 0px)": {
      width: "100%",
    },
    "screen and (min-width: 768px)": {
      width: "55%",
    },
  },
});

export const AboutBody_MaxPoints = style({
  position: "absolute",
  top: 30,
  right: 30,
});

export const AboutBody_Content = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  flexDirection: "column",
});

export const AboutBodyDesc = style({
  fontSize: "clamp(16px, calc(100vw - 98vw),20px)",
  letterSpacing: 1,
  top: "50%",
  color: vars.color.lightGray,

  marginRight: "20px",

  "@media": {
    "screen and (min-width: 0px)": {
      textAlign: "start",
      width: "100%",
    },

    "screen and (min-width: 768px)": {
      textAlign: "start",
      width: "90%",
    },
  },
});
