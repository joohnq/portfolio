import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/global.css";

export const HeaderStyle = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  backgroundColor: vars.color.blueDarkTransparent,
  color: vars.color.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: 80,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,

  "@media": {
    "screen and (min-width: 0px)": {
      paddingLeft: 20,
      paddingRight: 20,
    },
    "screen and (min-width: 500px)": {
      paddingLeft: 50,
      paddingRight: 50,
    },
  },
});

export const Logo = style({
  margin: 0,
});

export const LogoMobile = style({
  fontSize: 34,
  marginRight: 20,
  "@media": {
    "screen and (min-width: 500px)": {
      display: "none",
    },
  },
});

export const LogoTabletDesktop = style({
  fontSize: 40,
  marginRight: 20,
  "@media": {
    "screen and (max-width: 500px)": {
      display: "none",
    },
  },
});

export const HeaderList = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 30,
  listStyle: "none",
});

export const HeaderListItem_icon = style({
  fontSize: 40,
  "@media": {
    "(min-width: 0px) and (max-width:768px)": {
      display: "none",
    },
    "(min-width: 1280px)": {
      display: "none",
    },
  },
});

export const HeaderListItem = style({});

export const HeaderListItem_link = style({
  color: vars.color.white,
  textDecoration: "none",
  fontSize: 24,

  ":hover": {
    background: vars.color.gradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    MozBackgroundClip: "text",
    fontSize: 26,
    transition: "0.1s linear",
  },

  "@media": {
    "(max-width: 1280px)": {
      display: "none",
    },
  },
});

export const HeaderListMenu = style({
  fontSize: 50,
  cursor: "pointer",
  "@media": {
    "screen and (min-width:768px)": {
      display: "none",
    },
    "screen and (min-width: 400px)": {
      fontSize: 50,
    },
  },
});

export const MenuMobile = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  height: "100vh",
  zIndex: 20,
  background: vars.color.blueDark,
  overflow: "hidden",
});

export const MenuMobileIconClose = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: 20,
  cursor: "pointer",
});

export const MenuMobileList = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  listStyle: "none",
  gap: 30,
  padding: 0,
  marginTop: 100,
});

export const MenuMobileListItem_text = style({
  textDecoration: "none",
  color: vars.color.white,
  fontSize: 34,
});
