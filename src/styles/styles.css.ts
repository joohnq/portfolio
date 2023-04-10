import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "./global.css";

globalStyle("body", {
  margin: 0,
  border: 0,
  padding: 0,
  boxSizing: "border-box",
  backgroundColor: vars.color.blueDark,
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
  WebkitTapHighlightColor: 'transparent',

  scrollBehavior: 'smooth'
});

export const MainTitle = style({
  color: vars.color.white,
  fontSize: "clamp(40px, calc(100vw - 94vw), 60px)"
})
