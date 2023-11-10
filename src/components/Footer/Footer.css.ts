import { vars } from "@/styles/global.css";
import { style } from "@vanilla-extract/css";

export const FooterStyle = style({
  backgroundColor: vars.color.gray,
  height: 150,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "0 20px",
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
  color: vars.color.mediumGray,
  fontSize: 16,
});
