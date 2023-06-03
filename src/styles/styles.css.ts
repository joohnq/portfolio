import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "./global.css";

globalStyle("body", {
  margin: 0,
  border: 0,
  padding: 0,
  boxSizing: "border-box",
  backgroundColor: vars.color.blueDark,
});

export const BackgroundTransparent = style({
  position: "absolute",
  zIndex: 2,
  left: 0,
  top: 400,
  right: 0,
  bottom: 0,
  width: "100%",
  height: 2350,
  backgroundImage: "url(/background-stack-small.png)",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

export const Main = style({
  position: "relative",
  zIndex: 3,
});

export const Disabled = style({
  background: "#555 !important",
});

export const Hover = style({
  fontSize: "22px !important",
  transition: "0.1s linear !important",
  background: vars.color.gradient,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  MozBackgroundClip: "text",
});

export const Container = style({
  maxWidth: 1420,
  margin: "auto",
});

export const HtmlStyle = style({
  scrollbarWidth: "auto",
  scrollbarColor: "#FF00B8",

  "::-webkit-scrollbar": {
    width: "5px",
    height: "5px",
  },

  "::-webkit-scrollbar-thumb": {
    backgroundColor: vars.color.gradientColor1,
  },
  WebkitTapHighlightColor: "transparent",

  scrollBehavior: "smooth",
});

export const MainTitle = style({
  color: vars.color.white,
  fontSize: "clamp(40px, calc(100vw - 94vw), 60px)",
});

export const MainSubtitle = style({
  color: vars.color.white,
  fontSize: "clamp(14px, calc(100vw - 98vw), 16px)",
  textAlign: "center",
});

export const DisNone = style({
  display: "none",
});
