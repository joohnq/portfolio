import { keyframes, style } from "@vanilla-extract/css";

export const HomeStyle = style({
  position: "absolute",
  top: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "1000px",
  gap: 10,

  "@media": {
    "screen and (min-height: 0px)": {
      marginTop: "clamp(80px, calc(100vw - 95vw), 200px)",
    },
    "screen and (min-height: 500px)": {
      marginTop: 0,
      height: "calc(100vh - 80px)",
    },
  },
});

export const Background = style({
  // objectFit: "cover",
  // objectPosition: "center",

  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export const HomeSubtitle = style({
  margin: 0,
  fontSize: "clamp(20px, 20vw, 32px)",
  textAlign: "center",
});

export const HomeTitle = style({
  margin: 0,
  color: "white",

  width: "100%",
  textAlign: "center",
  fontSize: "clamp(30px, calc(100vw - 90vw), 100px)",
});

export const HomeIcons = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
});

export const HomeIcon = style({
  fontSize: "clamp(30px, calc(100vw - 93vw), 40px)",
  maxWidth: 50,
  ":hover": {
    scale: "1.2",
    transition: "all linear 0.3s",
  },
});

export const HomeIconFloating = style({
  position: "absolute",
});

export const moveUpDown = keyframes({
  "0%, 100%": {
    transform: "translateY(0)",
  },
  "50%": {
    transform: "translateY(-20px)",
  },
});

export const orbit = keyframes({
  "0%": {
    transform: "rotate(0deg) translateX(10px) rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg) translateX(10px) rotate(-360deg)",
  },
});

export const orbitReverse = keyframes({
  "0%": {
    transform: "rotate(360deg) translateX(10px) rotate(-360deg)",
  },
  "100%": {
    transform: "rotate(0deg) translateX(10px) rotate(0deg)",
  },
});

export const hideAndSeek = keyframes({
  "0%": {
    left: -100,
  },
  "10%": {
    left: -100,
  },
  "30%": {
    left: 0,
  },
  "80%": {
    left: 0,
  },
  "100%": {
    left: -100,
  },
});

export const triangle = keyframes({
  "0%": {
    transform: "translate(0, 0)",
  },
  "25%": {
    transform: "translate(20px, 0)",
  },
  "50%": {
    transform: "translate(20px, 20px)",
  },
  "75%": {
    transform: "translate(0, 20px)",
  },
  "100%": {
    transform: "translate(0, 0)",
  },
});

export const AndroidIcon = style({
  top: 200,
  left: 0,
  animation: `${hideAndSeek} 7s linear infinite`,
});

export const JetpackComposeIcon = style({
  top: 200,
  right: 100,
  animation: `${triangle} 3s linear infinite`,
});

export const XMLIcon = style({
  position: "absolute",
  bottom: 150,
  right: 250,
  animation: `${orbit} 3s linear infinite`,
});

export const UiKitIcon = style({
  position: "absolute",
  bottom: 50,
  left: 250,
  transform: "rotate(-30deg)",
  animation: `${orbit} 3s linear infinite`,
});
