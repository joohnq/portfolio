import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/global.css";

export const HeaderStyle = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(4px)",

  "@media": {
    "screen and (min-width: 0px)": {
      padding: "0px 20px",
      height: 60,
    },
    "screen and (min-width: 500px)": {
      padding: "0px 50px",
      height: 70,
    },
  },
});

export const HeaderInsider = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@media": {
    "screen and (min-width: 0px)": {
      padding: "0px 20px",
    },
    "screen and (min-width: 500px)": {
      padding: "0px 50px",
    },
    "(min-width: 992px) and (max-width: 1200px)": {
      alignItems: "start",
    },
  },
});

export const HeaderLogoLanguage = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  "@media": {
    "(min-width: 992px) and (max-width: 1200px)": {
      flexDirection: "column",
    },
  },
});

export const HeaderLanguages = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 20,
  background: vars.color.background700,
  padding: "8px",
  borderRadius: "15px",
  "@media": {
    "screen and (max-width: 576px)": {
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
  },
});
