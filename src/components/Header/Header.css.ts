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
  height: 70,
  backdropFilter: "blur( 10px )",
  WebkitBackdropFilter: "blur( 4px )",

  "@media": {
    "screen and (min-width: 0px)": {
      paddingLeft: 20,
      paddingRight: 20,
    },
    "screen and (min-width: 500px)": {
      paddingLeft: 50,
      paddingRight: 50,
    },
    "screen and (min-width: 768px)": {
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
  },
});

export const Logo = style({
  margin: 0,
});

export const LogoMobile = style({
  fontSize: 30,
  marginRight: 20,
  "@media": {
    "screen and (min-width: 500px)": {
      display: "none",
    },
  },
});

export const LogoTabletDesktop = style({
  fontSize: 35,
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

export const HeaderListItem_link = style({
  color: vars.color.white,
  textDecoration: "none",
  fontSize: 22,

  ":hover": {
    background: vars.color.gradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    MozBackgroundClip: "text",
    fontSize: 22,
    transition: "0.1s linear",
  },

  "@media": {
    "(max-width: 992px)": {
      display: "none",
    },
  },
});

export const HeaderListMenu = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "30px",
  height: "15px",
  cursor: "pointer",
  position: "relative",
  "@media": {
    "screen and (min-width: 992px)": {
      display: "none",
    },
  },
});

export const HeaderListMenu_line = style({
  width: "100%",
  height: "2px",
  backgroundColor: vars.color.white,
  transition: "transform .5s linear",
  position: "absolute",
});

export const HeaderListMenu_lineUpOpen = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%) rotate(225deg)",
});

export const HeaderListMenu_lineUpClose = style({
  position: "absolute",
  top: 0,
  left: "50%",
  transform: "translate(-50%, -50%)",
});

export const HeaderListMenu_lineDownOpen = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%) rotate(-225deg)",
});

export const HeaderListMenu_lineDownClose = style({
  position: "absolute",
  bottom: 0,
  left: "50%",
  transform: "translate(-50%, -50%)",
});

export const MenuMobile = style({
  position: "absolute",
  top: 70,
  left: 0,
  right: 0,
  bottom: 0,
  height: "100vh",
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
  textDecoration: "none",
  color: vars.color.white,
  fontSize: 28,
});
