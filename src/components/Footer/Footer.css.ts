import { vars } from "@/styles/global.css";
import { style } from "@vanilla-extract/css";

export const FooterStyle = style({
  backgroundColor: vars.color.secondaryBackground,
  height: 150,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "0 20px",
  borderTop: `1.2px solid ${vars.color.blueBorder}`,
});

export const Footer_SocialMedias = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
});

export const Footer_SocialMediasIcon = style({
  ":hover": {
    color: `${vars.color.white} !important`,
  },
});

export const Footer_Desc = style({
  textAlign: "center",
  color: vars.color.gray888,
  fontSize: 16,
});
