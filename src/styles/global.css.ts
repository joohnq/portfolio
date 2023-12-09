import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    // background: "#0d1117",
    background: "#020203",
    background700: "rgba(1, 4, 13, 0.7);",
    white: "#ffffff",
    // gradient: "linear-gradient(90.67deg,#ff0f7b -14.32%,#f89b29 113.23%)",
    // gradient: "linear-gradient(90.67deg,#7742c7 -14.32%,#7742c7 113.23%)",
    gradient: "linear-gradient(90.67deg,#3ddc84 -14.32%,#3ddc84 113.23%)",
    gradientColor1: "#ffa800",
    gradientColor2: "#ff00b8",
    pointRed: "#F86158",
    pointYellow: "#FBBE2E",
    pointGreen: "#2ACB45",
    gray111: "#111",
    gray888: "#888",
    grayd9d9d9: "#d9d9d9",
    gray848d97: "#848d97",
    secondaryBackground: "#161b22",
    blueBorder: "#30363d",
  },
});
