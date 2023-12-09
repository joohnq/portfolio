import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "./global.css";

globalStyle("body", {
  margin: 0,
  border: 0,
  padding: 0,
  boxSizing: "border-box",
  backgroundColor: vars.color.background,
});

export const BigTitle = style({
  color: vars.color.grayd9d9d9,
  textAlign: "start",
  margin: 0,

  "@media": {
    "screen and (min-width: 0px)": {
      fontSize: "clamp(30px, calc(100vw - 90vw), 40px)",
    },
    "screen and (min-width: 768px)": {
      fontSize: "clamp(40px, calc(100vw - 96vw), 60px)",
    },
  },
});

export const Container = style({
  maxWidth: 1420,
  margin: "auto",
});

export const Disabled = style({
  background: vars.color.gray888,
});

export const DisabledButton = style({
  background: `${vars.color.gray888} !important`,

  selectors: {
    "&:hover::after": {
      content: "Espere...",
      position: "absolute",
      bottom: -30,
      left: 10,
      display: "block",
      width: 100,
      height: 20,
      color: "white",
    },

    "&:focus::after": {
      content: "Espere...",
      position: "absolute",
      bottom: -30,
      left: 10,
      display: "block",
      width: 100,
      height: 20,
      color: "white",
    },
  },
});

export const DisNone = style({
  display: "none",
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

export const HtmlStyle = style({
  scrollbarWidth: "auto",
  scrollbarColor: "#FF00B8",

  "::-webkit-scrollbar": {
    width: "10px",
    height: "1px",
  },

  "::-webkit-scrollbar-thumb": {
    backgroundColor: vars.color.secondaryBackground,
    border: `1.2px solid ${vars.color.blueBorder}`,
  },
  WebkitTapHighlightColor: "transparent",

  scrollBehavior: "smooth",
});

export const LinkExternal = style({
  color: vars.color.grayd9d9d9,
  fontSize: 16,
  marginTop: 20,
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

export const Title_Gradient = style({
  background: vars.color.white,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  MozBackgroundClip: "text",
});
