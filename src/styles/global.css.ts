import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    blueDark: "#01040D",
    blueDarkTransparent: "rgba(1, 4, 13, 0.7);",
    white: "#ffffff",
    gradient: "linear-gradient(90.67deg, #FFA800 -14.32%, #FF00B8 113.23%)",
  },
});
