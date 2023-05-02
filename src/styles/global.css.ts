import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    blueDark: "#01040D",
    blueDarkTransparent: "rgba(1, 4, 13, 0.7);",
    white: "#ffffff",
  },
});
