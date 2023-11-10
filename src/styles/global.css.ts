import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    blueDark: "#161513",
    blueDarkTransparent: "rgba(1, 4, 13, 0.7);",
    white: "#ffffff",
    gradient: "linear-gradient(90.67deg,#ff0f7b -14.32%,#f89b29 113.23%)",
    gradientColor1: "#ffa800",
    gradientColor2: "#ff00b8",
    pointRed: "#F86158",
    pointYellow: "#FBBE2E",
    pointGreen: "#2ACB45",
    gray: "#111",
    mediumGray: "#888",
    lightGray: "#d9d9d9",
    secondaryDark: "#1c1c22",
  },
});
