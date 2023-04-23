import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "./global.css";

globalStyle("body", {
  margin: 0,
  border: 0,
  padding: 0,
  boxSizing: "border-box",
  backgroundColor: vars.color.blueDark,
});

export const Disabled = style({
  backgroundColor: "#555 !important",
});

export const Hover = style({
  color: `${vars.color.purpleLight} !important`,
  fontSize: "26px !important",
  transition: "0.1s linear !important",
});

export const Container = style({
  maxWidth: 1420,
  margin: "auto",
});

export const HtmlStyle = style({
  scrollbarWidth: "auto",
  scrollbarColor: vars.color.purpleLight,

  "::-webkit-scrollbar": {
    width: "5px",
    height: "5px",
  },

  "::-webkit-scrollbar-thumb": {
    backgroundColor: vars.color.purpleLight,
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
