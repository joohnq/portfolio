import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/global.css";

export const HabilitiesStyle = style({
  display: "flex",
  flexDirection: "column",
  marginTop: 200,
});

export const HabilitiesGridCards = style({
  display: "grid",
  gap: 20,
  justifyContent: "center",
  "@media": {
    "screen and (min-width: 0px)": {
      gridTemplateColumns: " repeat(auto-fit, minmax(70px, 70px))",
    },
    "screen and (min-width: 500px)": {
      gridTemplateColumns: " repeat(auto-fit, minmax(200px, 200px))",
    },
  },
});

export const HabilitiesCard = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "stretch",
  gap: 10,

  padding: 5,
  cursor: "pointer",
});

export const HabilitiesCard_Title = style({
  margin: 0,
  color: vars.color.white,

  "@media": {
    "screen and (min-width: 0px)": {
      display: "none",
    },
    "screen and (min-width: 500px)": {
      display: "inline-block",
    },
  },
});

export const HabilitiesTitle = style({
  color: vars.color.white,
  textAlign: "center",

  fontSize: "clamp(20px, calc(100vw - 97vw), 30px)",

  "@media": {
    "screen  and (min-width: 0px)": {
      marginTop: 50,
      marginBottom: 50,
    },
    "screen  and (min-width: 768px)": {
      marginTop: 80,
      marginBottom: 80,
    },
  },
});
