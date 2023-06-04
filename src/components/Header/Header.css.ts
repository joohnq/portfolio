import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/global.css";

export const HeaderStyle = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: 70,
  zIndex: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: vars.color.blueDark,
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(4px)",

  "@media": {
    "screen and (min-width: 0px)": {
      padding: "0px 20px",
    },
    "screen and (min-width: 500px)": {
      padding: "0px 50px",
    },
    "screen and (min-width: 768px)": {
      borderRadius: "0 10px 10px 0",
    },
  },
});

export const Logo = style({
  color: vars.color.white,
  margin: 0,
});

export const LogoMobile = style({
  color: vars.color.white,
  fontSize: 30,
  marginRight: 20,
  "@media": {
    "screen and (min-width: 300px)": {
      display: "none",
    },
  },
});

export const LogoTabletDesktop = style({
  fontSize: 35,
  marginRight: 20,
  "@media": {
    "screen and (max-width: 300px)": {
      display: "none",
    },
  },
});

export const Nav = style({
  "@media": {
    "(max-width: 992px)": {
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
  fontSize: 22,
  color: vars.color.white,
  textDecoration: "none",

  ":hover": {
    fontSize: 22,
    background: vars.color.gradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    MozBackgroundClip: "text",
    transition: "0.1s linear",
  },
});

export const HeaderListMenu = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: 30,
  height: 15,
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
  height: 2,
  backgroundColor: vars.color.white,
  position: "absolute",
  transition: "transform .5s linear",
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
  transform: "translate(-50%, -50%) rotate(360deg)",
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
  transform: "translate(-50%, -50%) rotate(360deg)",
});

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
