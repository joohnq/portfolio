import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    background: "#0d1117",
    background700: "rgba(1, 4, 13, 0.7);",
    white: "#ffffff",
    gradientColor1: "#3ddc84",
    gradientColor2: "#4285f4",
    gradientColor3: "#083042",
    // gradient: "linear-gradient(90.67deg,#ff0f7b -14.32%,#f89b29 113.23%)",
    // gradient: "linear-gradient(90.67deg,#7742c7 -14.32%,#7742c7 113.23%)",
    gradient: "linear-gradient(90deg, #3ddc84 0%,#3ddc84 113.23%)",
    gradientLinear: `linear-gradient(90deg, #3ddc84 0%, #4285f4 68%, #083042 100%)`,
    pointRed: "#F86158",
    pointYellow: "#FBBE2E",
    pointGreen: "#2ACB45",
    gray111: "#111",
    gray888: "#888",
    grayd9d9d9: "#d9d9d9",
    gray848d97: "#848d97",
    graydadce0: "#dadce0",
    secondaryBackground: "#161b22",
    // secondaryBackground: "#d2e3fc",
    blueBorder: "#30363d",
  },
});
