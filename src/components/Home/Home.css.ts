import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/global.css";

export const Title_Gradient = style({
  background: vars.color.purpleGradient,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  MozBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const HomeStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 10,
  width: "100%",

  "@media": {
    "screen and (min-height: 0px)": {
      height: "100%",
      marginTop: 50,
    },
    "screen and (min-height: 768px)": {
      height: "calc(100vh - 100px)",
      marginTop: -100,
    },
  },
});

export const HomeSubtitle = style({
  margin: 0,
  fontSize: "clamp(20px, calc(100vw - 96vw), 40px)",
});

export const HomeTitle = style({
  margin: 0,
  color: "white",

  width: "100%",
  textAlign: "center",
  fontSize: "clamp(30px, calc(100vw - 90vw), 100px)",
});

export const HomeIcons = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
});

export const HomeIcon = style({
  fontSize: "clamp(30px, calc(100vw - 93vw), 40px)",
  maxWidth: 50,
  // "@media": {
  //   "screen and (min-width: 0px)": {
  //     fontSize: "calc(100vw - 89vw)",
  //   },
  //   "screen and (min-width: 400px)": {
  //   },
  //   "screen and (min-width: 576px)": {
  //     fontSize: "calc(100vw - 93vw)",
  //   },
  //   "screen and (min-width: 768px)": {
  //     fontSize: 40,
  //   },
  // },
});

export const HomeIconScroll = style({
  position: "absolute",
  "@media": {
    "screen and (min-height: 0px)": {
      bottom: "50%",
      right: 10,
      transform: "translateY(50%)",
    },
    "screen and (min-height: 768px)": {
      bottom: 10,
      right: "50%",
      transform: "translateX(50%)",
    },
  },
});
