import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/global.css";

export const Title_Gradient = style({
  background: "linear-gradient(90.67deg, #FFA800 -14.32%, #FF00B8 113.23%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  MozBackgroundClip: "text",
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
      height: "calc(100vh - 80px)",
      marginTop: "clamp(80px, calc(100vw - 95vw), 200px)",
      top: "50%",
    },
    "screen and (min-height: 500px)": {
      marginTop: 0,
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
});

export const HomeIconScroll = style({
  position: "absolute",
  bottom: 10,
  right: "50%",
  transform: "translateX(50%)",
  "@media": {
    "screen and (min-height: 0px)": {
      display: "none",
    },
    "screen and (min-height: 768px)": {
      display: "block",
    },
  },
});
