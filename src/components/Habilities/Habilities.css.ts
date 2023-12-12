import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/global.css";

export const HabilitiesStyle = style({
  display: "flex",
  flexDirection: "column",
  marginTop: "clamp(80px, calc(100vw - 90vw), 200px)",
});

export const HabilitiesGridCards = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 20,
  rowGap: 30,
  justifyContent: "center",
});

export const HabilitiesCard = style({
  maxWidth: "200px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,

  padding: 5,
  cursor: "pointer",
});

export const HabilitiesCard_Title = style({
  margin: 0,
  color: vars.color.white,
});

export const HabilitiesTitle = style({
  color: vars.color.grayd9d9d9,
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
