import { style } from "@vanilla-extract/css";

export const LightConicStyle = style({
  position: "absolute",
  zIndex: 1,
  width: "70%",
  height: 1080,
  top: 1000,
  left: "50%",
  transform: "translateX(-50%)",
  borderRadius: "50%",
  background:
    "conic-gradient(from 180deg at 50% 50%, #FFA800 0deg, #FF00B8 360deg)",
  WebkitFilter: "blur(200px)",
});
