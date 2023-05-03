import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "./global.css";

globalStyle("body", {
  margin: 0,
  border: 0,
  padding: 0,
  boxSizing: "border-box",
  backgroundColor: vars.color.blueDark,
  // backgroundPosition: "top center",
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
  // opacity: 0.7,
  // height: 7000,
  // backdropFilter: "blur(250px)",
  // WebkitFilter: "blur(250px)",
  // backgroundColor: vars.color.blueDark,
  backgroundImage: "url(/background-stack.png)",
  backgroundPosition: "center center",
});

export const Main = style({
  position: "relative",
  zIndex: 3,
});

export const Disabled = style({
  backgroundColor: "#555 !important",
});

export const Hover = style({
  fontSize: "26px !important",
  transition: "0.1s linear !important",

  background: "linear-gradient(90.67deg, #FFA800 -14.32%, #FF00B8 113.23%)",
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
    backgroundColor: "#FF00B8",
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
