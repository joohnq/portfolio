import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    white25: "rgba(255, 255, 255, 0.25)",
    shadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    blueDark: "#01040D",
    white: "#ffffff",
  },
  borderRadius: {
    base: "10px",
  },
  filter: {
    backdrop: "blur(4px)",
  },
  webkitFilter: {
    backdrop: "blur(4px)",
  },
});
