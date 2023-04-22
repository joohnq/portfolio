import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/global.css";

export const ContactStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 100,
  marginTop: "clamp(80px, calc(100vw - 90vw), 200px)",
  marginBottom: 100,
  "@media": {
    "screen and (min-width: 0px)": {
      flexDirection: "column",
      width: "90%",
    },
    "screen and (min-width: 768px)": {
      flexDirection: "row",
      width: "100%",
    },
  },
});

export const ContactLeft = style({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  "@media": {
    "screen and (min-width: 0px)": {
      alignItems: "center",
    },
    "screen and (min-width: 768px)": {
      alignItems: "flex-start",
      paddingLeft: 50,
    },
  },
});

export const ContactSocialMedias = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  flexDirection: "column",
  gap: 10,
});

export const ContactSocialMedia = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 20,
  textDecoration: "none",
});

export const ContactSocialMedia_Icon = style({
  padding: 10,
  backgroundColor: vars.color.white,
  borderRadius: "50%",
});

export const ContactSocialMedia_Name = style({
  textDecoration: "none",
  color: vars.color.white,
  fontSize: "clamp(16px, calc(100vw - 98vw),20px)",
});

export const ContactNotebookIlustration = style({
  width: "100%",
  height: "100%",
  maxWidth: 500,
  "@media": {
    "screen and (min-width: 0px)": {
      display: "none",
    },
    "screen and (min-width: 768px)": {
      display: "block",
    },
  },
});

export const ContactRight = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 15,

  "@media": {
    "screen and (min-width: 0px)": {
      width: "100%",
      padding: 20,
      maxWidth: 500,
    },

    "screen and (min-width: 768px)": {
      padding: 50,
    },
  },
});

export const ContactRightField = style({
  display: "flex",
  alignItems: "stretch",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
});

export const ContactRight_Label = style({
  color: vars.color.white,
  marginBottom: 5,
  fontSize: "clamp(16px, calc(100vw - 98vw),20px)",
});

export const ContactRight_Input = style({
  background: vars.color.white,
  height: 40,
  border: 0,
  borderRadius: 5,
  fontSize: 16,
  padding: "0px 10px",

  ":focus": {
    border: 0,
    outline: "none",
  },
});

export const ContactRight_TextArea = style({
  background: vars.color.white,
  border: 0,
  height: 200,
  borderRadius: 5,
  fontSize: 16,
  padding: 10,
  resize: "none",
  ":focus": {
    border: 0,
    outline: "none",
  },
});

export const ContactRightButton = style({
  width: "100%",
  background: vars.color.purpleLight,
  color: vars.color.white,
  border: 0,
  padding: "10px 15px",
  fontSize: 20,
  borderRadius: 40,
  cursor: "pointer",
});
