import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/global.css";

export const StacksStyle = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(100px, 400px))",
  justifyContent: "center",
  alignItems: "center",
  gap: 50,

  marginTop: "clamp(80px, calc(100vw - 90vw), 200px)",
});

export const StackCard = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 10,
  height: 400,
  padding: 10,
  borderRadius: 30,
});

export const StackCard_Title = style({
  color: vars.color.white,
  textAlign: "center",
  margin: 0,
  letterSpacing: 1,

  fontSize: "clamp(18px, calc(100vw - 95vw), 22px)",
});

export const StackCard_Desc = style({
  color: vars.color.white,
  textAlign: "center",
  margin: 0,
  letterSpacing: 1,

  "@media": {
    "screen and (min-width: 0px)": {
      fontSize: 14,
    },

    "screen and (min-width: 350px)": {
      fontSize: 16,
    },
  },
});
