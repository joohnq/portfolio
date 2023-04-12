import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/global.css";

export const ContactStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 50,

  "@media": {
    "screen and (min-width: 0px)": {
      flexDirection: "column-reverse",
    },
    "screen and (min-width: 768px)": {
      flexDirection: "row",
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
});

export const ContactNotebookIlustration = style({
  width: "100%",
  height: "100%",
  maxWidth: 500,
});

export const ContactRight = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  maxWidth: 600,
});

export const ContactRightField = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
});

export const ContactRight_Label = style({
  color: vars.color.white,
});

export const ContactRight_Input = style({
  width: "100%",
});

export const ContactRight_TextArea = style({
  width: "100%",
});
