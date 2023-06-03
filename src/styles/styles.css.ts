import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "./global.css";

globalStyle("body", {
  margin: 0,
  border: 0,
  padding: 0,
  boxSizing: "border-box",
  backgroundColor: vars.color.blueDark,
});

// export const BackgroundTransparent = style({
//   position: "absolute",
//   zIndex: 2,
//   left: 0,
//   top: 400,
//   right: 0,
//   bottom: 0,
//   width: "100%",
//   height: 2350,
//   backgroundImage: "url(/background-stack-small.png)",
//   backgroundPosition: "center center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
// });

export const Title_Gradient = style({
  background: vars.color.gradient,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  MozBackgroundClip: "text",
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

export const BigTitle = style({
  color: vars.color.white,
  fontSize: "clamp(24px, calc(100vw - 96vw), 50px)",
  textAlign: "start",
  margin: 0,

  "@media": {
    "screen and (min-width: 0px)": {
      fontSize: "clamp(24px, calc(100vw - 94vw), 38px)",
    },
    "screen and (min-width: 768px)": {
      fontSize: "clamp(24px, calc(100vw - 96vw), 50px)",
    },
  },
});

export const MediumTitle = style({
  color: vars.color.white,
  fontSize: "clamp(24px, calc(100vw - 96vw), 50px)",
  textAlign: "start",
  margin: 0,

  "@media": {
    "screen and (min-width: 0px)": {
      fontSize: "clamp(24px, calc(100vw - 94vw), 38px)",
    },
    "screen and (min-width: 768px)": {
      fontSize: "clamp(24px, calc(100vw - 96vw), 50px)",
    },
  },
});

export const Disabled = style({
  color: vars.color.gray,
});

export const DisNone = style({
  display: "none",
});
