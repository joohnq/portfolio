import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/global.css";

export const MenuMobile = style({
  position: "absolute",
  top: 70,
  left: 0,
  right: 0,
  bottom: 0,
  height: "calc(100vh - 70px)",
  zIndex: 20,
  background: vars.color.blueDark,
  overflow: "hidden",
  transition: "all 1s linear",
});

export const MenuMobileList = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  listStyle: "none",
  gap: 30,
  padding: 0,
  marginTop: 50,
});

export const MenuMobileListItem_text = style({
  fontSize: 28,
  textDecoration: "none",
  color: vars.color.white,
});
