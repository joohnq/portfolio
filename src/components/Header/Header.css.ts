import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/global.css";

export const HeaderStyle = style({
  color: vars.color.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: 50,
  paddingRight: 50,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
});

export const Logo = style({});

export const LogoMobile = style({
  fontSize: 34,
  "@media": {
    "screen and (min-width: 500px)": {
      display: "none",
    },
  },
});

export const LogoTabletDesktop = style({
  fontSize: 40,
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

export const HeaderListItem = style({
  fontSize: 20,
  cursor: "pointer",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media": {
    "screen and (max-width:768px)": {
      display: "none",
    },
  },
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

export const HeaderListItem_text = style({
  textDecoration: "none",
  color: vars.color.white,
  fontSize: 24,
  "@media": {
    "(max-width: 1280px)": {
      display: "none",
    },
  },
});

export const HeaderListMenu = style({
  fontSize: 50,
  "@media": {
    "screen and (min-width:768px)": {
      display: "none",
    },
    "screen and (min-width: 400px)": {
      fontSize: 50,
    },
  },
});
