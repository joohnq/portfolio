import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "./global.css";

globalStyle("body", {
  margin: 0,
  border: 0,
  padding: 0,
  boxSizing: "border-box",
  backgroundColor: vars.color.blueDark,
});

export const Glassmorphism = style({
  backgroundColor: vars.color.white25,
  boxShadow: vars.color.shadow,
  borderRadius: vars.borderRadius.base,
  border: vars.color.border,
  backdropFilter: vars.filter.backdrop,
  WebkitBackdropFilter: vars.webkitFilter.backdrop,
});
