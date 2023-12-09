import { vars } from "@/styles/global.css";
import { style, keyframes } from "@vanilla-extract/css";

export const LoaderContainerStyle = style({
  position: "fixed",
  inset: 0,
  background: vars.color.background,
  zIndex: 1000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const rotation = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const loader = style({
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  display: "inline-block",
  position: "relative",
  background: vars.color.gradientLinear,
  boxSizing: "border-box",
  animation: `${rotation} 1s linear infinite`,
  selectors: {
    [`&::after`]: {
      content: "",
      boxSizing: "border-box",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      background: vars.color.background,
    },
  },
});

export const loaderAfter = style({
  selectors: {
    [`${loader}::after &`]: {
      content: "",
      boxSizing: "border-box",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      background: "#263238",
    },
  },
});
