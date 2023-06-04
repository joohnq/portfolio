import { vars } from "@/styles/global.css";
import { style } from "@vanilla-extract/css";

export const MessageModal = style({
  gap: 20,

  position: "fixed",
  background: vars.color.blueDarkTransparent,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 1000,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const MessageModalBox = style({
  maxWidth: 400,
  background: vars.color.white,
  borderRadius: 10,
});

export const MessageModalBox_body = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: 30,
});

export const MessageModalBox_close = style({
  margin: "20px 20px 0 0",
  textAlign: "end",
  cursor: "pointer",
});

export const MessageModalBox_message = style({
  color: vars.color.blueDark,
  textAlign: "center",
  fontSize: 18,
  marginBottom: 30,
});
