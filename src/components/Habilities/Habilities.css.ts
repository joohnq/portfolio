import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/global.css";

export const HabilitiesStyle = style({
  backgroundColor: vars.color.blueDarkTransparent,
  marginTop: 400,
  borderRadius: 50,
  color: "#fff",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 50,

  position: "relative",

  "@media": {
    "screen and (min-width: 0px)": {
      padding: 20,
    },

    "screen and (min-width: 576px)": {
      padding: 40,
    },
  },
});

export const HabilitiesHeaders = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 40,

  "@media": {
    "screen and (min-width: 0px)": {
      flexDirection: "column",
    },

    "screen and (min-width: 350px)": {
      flexDirection: "row",
    },
  },
});

export const HabilitiesHeader = style({
  backgroundColor: "transparent",
  color: vars.color.white,
  border: 0,
  cursor: "pointer",

  "@media": {
    "screen and (min-width: 0px)": {
      fontSize: 20,
    },

    "screen and (min-width: 350px)": {
      fontSize: "clamp(14px, calc(100vw - 96vw), 20px)",
    },
  },

  // ":focus": {
  //   backgroundColor: "transparent",
  // }
});

export const HeaderSelected = style({
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 20,
  paddingRight: 20,

  backgroundColor: vars.color.purpleLight,
  borderRadius: 10,
});

export const HabilitiesBody_About = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "auto",
  marginBottom: 20,
  gap: 50,

  "@media": {
    "screen and (min-width: 0px)": {
      flexDirection: "column",
    },
    "screen and (min-width: 1040px)": {
      flexDirection: "row",
      maxWidth: 1200,
    },
  },
});

export const HabilitiesBody_AboutPhoto = style({
  borderRadius: "50%",
  maxWidth: 500,
  width: "100%",
  height: "100%",
});

export const HabilitiesBody_AboutDesc = style({
  fontSize: "clamp(16px, calc(100vw - 97vw), 20px)",

  "@media": {
    "screen and (min-width: 0px)": {
      textAlign: "center",
    },
    "screen and (min-width: 768px)": {
      textAlign: "start",
      width: "80%",
    },
    "screen and (min-width:992px)": {
      textAlign: "start",
      width: "60%",
    },
  },
});

export const HabilitiesBody_Experience = style({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  maxWidth: 800,
  margin: "auto",
  marginTop: 50,
  gap: 50,
  marginBottom: 100,
});

export const HabilitiesBody_ExperienceJob = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  gap: 20,

  "@media": {
    "screen and (min-width: 0px)": {
      flexDirection: "column",
    },

    "screen and (min-width: 768px)": {
      flexDirection: "row",
    },
  },
});

export const HabilitiesBody_ExperienceJobImageText = style({
  textAlign: "center",
  fontSize: 40,
  marginTop: 20,
  marginBottom: 0,

  "@media": {
    "screen and (min-width: 0px)": {
      width: "100%",
    },

    "screen and (min-width: 768px)": {
      width: "40%",
    },
  },
});

export const HabilitiesBody_ExperienceJobContent = style({
  margin: 0,
  display: "flex",
  flexDirection: "column",

  "@media": {
    "screen and (min-width: 0px)": {
      width: "100%",
    },

    "screen and (min-width: 768px)": {
      width: "60%",
      alignItems: "flex-start",
    },
  },
});

export const HabilitiesBody_ExperienceJobTitle = style({
  margin: 0,
  marginBottom: 0,
});

export const HabilitiesBody_ExperienceJobDesc = style({
  marginTop: 10,
  marginBottom: 0,
  "@media": {
    "screen and (min-width: 0px)": {
      maxWidth: 400,
    },
  },
});

export const HabilitiesBody_ExperienceJobLanguages = style({
  marginTop: 20,
  marginBottom: 0,
  color: vars.color.purpleLight,
});
