import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    blueDark: "#01040D",
    blueDarkTransparent: "rgba(1, 4, 13, 0.7);",
    white: "#ffffff",
    gradient: "linear-gradient(90.67deg,#ffa800 -14.32%,#ff00b8 113.23%)",
    gradientColor1: "#ffa800",
    gradientColor2: "#ff00b8",
    pointRed: "#F86158",
    pointYellow: "#FBBE2E",
    pointGreen: "#2ACB45",
    gray: "#111",
    lightGray: "#d9d9d9",
  },
});
