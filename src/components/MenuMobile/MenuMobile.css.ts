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
  background: vars.color.background,
  overflow: "hidden",
  transition: "all 1s linear",
  "@media": {
    "screen and (min-width: 992px)": {
      display: "none",
    },
  },
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

export const HeaderLanguages = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  width: "100%",
  maxWidth: 120,
  gap: 20,
  background: vars.color.background700,
  padding: "8px",
  borderRadius: "15px",

  "@media": {
    "screen and (min-width: 576px)": {
      display: "none",
    },
  },
});

export const HeaderLanguagesText = style({
  color: vars.color.white,
  padding: "0 8px",
  margin: 0,
  fontSize: 14,
});

export const HeaderLanguagesTextSelected = style({
  color: vars.color.white,
  padding: "5px 10px",
  background: vars.color.secondaryBackground,
  borderRadius: "10px",
});
