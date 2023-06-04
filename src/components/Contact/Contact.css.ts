import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/global.css";

export const ContactStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  marginTop: "clamp(80px, calc(100vw - 90vw), 200px)",
  marginBottom: 100,
  "@media": {
    "screen and (min-width: 0px)": {
      width: "90%",
    },
    "screen and (min-width: 768px)": {
      width: "100%",
    },
  },
});

export const ContactStyle_Desc = style({
  color: vars.color.mediumGray,
  maxWidth: 400,
  textAlign: "center",
  fontSize: 18,
  margin: 0,
});

export const ContactForm = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  flexDirection: "column",
  gap: 15,
  width: "100%",
  padding: "30px 20px 20px 20px",
  maxWidth: 500,

  "@media": {
    "screen and (min-width: 0px)": {},
  },
});

export const ContactFormField = style({
  display: "flex",
  alignItems: "stretch",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
});

export const ContactForm_Label = style({
  color: vars.color.lightGray,
  marginBottom: 5,
  fontSize: "clamp(16px, calc(100vw - 98vw),20px)",
});

export const ContactForm_Input = style({
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

export const ContactForm_TextArea = style({
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

export const ContactFormBoxButton = style({
  position: "relative",
});

export const ContactFormButton = style({
  width: 50,
  border: 0,
  height: 50,

  borderRadius: "50%",
  cursor: "pointer",
  background: vars.color.gradient,
  marginTop: 10,
  overflow: "hidden",

  "@media": {
    "screen and (min-width: 0px)": {
      selectors: {
        "&:hover": {
          width: "80%",
          borderRadius: 5,
          transition: ".1s ease",
          padding: "0 30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row-reverse",
        },

        "&:focus": {
          width: "80%",
          borderRadius: 5,
          transition: ".1s ease",
          padding: "0 30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row-reverse",
        },
      },
    },

    "screen and (min-width: 300px)": {
      selectors: {
        "&:hover": {
          width: 200,
        },

        "&:focus": {
          width: 200,
        },
      },
    },
  },
});

export const ContactFormButton_Text = style({
  fontSize: 18,
  color: vars.color.white,
});

export const ContactFormButton_Icon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 50,
  height: 50,
  border: 0,
  margin: "-1px 0 0 -6px",
});
