import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    blueDark: "#01040D",
    blueDarkTransparent: "rgba(1, 4, 13, 0.8);",
    white: "#ffffff",
    purpleGradient:
      "linear-gradient(90.19deg, #8474EE 60.04%, #4000BF 89.18%), #01040D",
    purpleLight: "#8474EE",
  },
});
