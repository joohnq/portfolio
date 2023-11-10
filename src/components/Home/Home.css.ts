import { vars } from "@/styles/global.css";
import { style } from "@vanilla-extract/css";

export const HomeStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 10,

  "@media": {
    "screen and (min-height: 0px)": {
      marginTop: "clamp(80px, calc(100vw - 95vw), 200px)",
    },
    "screen and (min-height: 500px)": {
      marginTop: 0,
      height: "calc(100vh - 80px)",
    },
  },
});

export const HomeSubtitle = style({
  margin: 0,
  fontSize: "clamp(20px, calc(100vw - 96vw), 40px)",
  textAlign: "center",
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
  ":hover": {
    scale: "1.2",
    transition: "all linear 0.3s",
  },
});

export const HomeIconScroll = style({
  position: "absolute",
  top: "calc(100vh - 100px)",
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
