import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/global.css";

export const StackCard_1 = style({
  "@media": {
    "screen and (min-width:992px)": {
      borderBottom: "2px dotted #fff",
    },
  },
});
export const StackCard_2 = style({
  "@media": {
    "screen and (min-width:992px)": {
      borderLeft: "2px dotted #fff",
      borderBottom: "2px dotted #fff",
    },
  },
});
export const StackCard_3 = style({
  "@media": {
    "screen and (min-width:992px)": {
      borderRight: "2px dotted #fff",
    },
  },
});

export const StacksStyle = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 400px))",
  justifyContent: "center",
  justifyItems: "center",
  maxWidth: 1000,
  margin: "400px auto",
});

export const StackCard = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 10,
  height: 300,
  "@media": {
    "screen and (min-width: 0px)": {
      maxWidth: 400,
    },
    "screen and (min-width: 550px)": {
      width: 500,
    },
  },
});

export const StackCardHeader = style({
  display: "flex",
  alignItems: "center",
  gap: 40,
});
export const StackCarHeader_number = style({
  color: "rgba(0, 0, 0, 0.0)",
  fontSize: 60,
  margin: 0,
  WebkitTextStrokeWidth: 2,
  WebkitTextStrokeColor: vars.color.white,
  letterSpacing: 10,
});

export const StackCardBody_title = style({
  color: vars.color.white,
  margin: 0,
  fontSize: "clamp(20px, calc(100vw - 96vw), 30px)",
});

export const StackCardBody = style({
  marginTop: 10,
});
