import { style } from "@vanilla-extract/css";
import { Glassmorphism } from "@/styles/styles.css";
import { vars } from "../styles/global.css";

export const HeaderStyle = style({
  color: vars.color.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Logo = style({
    fontSize: 40
});

export const HeaderList = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 20,
  listStyle: 'none',
});

export const HeaderListItem = style({
    fontSize: 20
})

export const Header = style([Glassmorphism, HeaderStyle]);
