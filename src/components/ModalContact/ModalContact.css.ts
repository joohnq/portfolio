import { vars } from "@/styles/global.css";
import { style } from "@vanilla-extract/css";

export const MessageModal = style({
  gap: 20,

  position: "absolute",
  background: vars.color.blueDarkTransparent,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

export const MessageModalBox = style({
  maxWidth: 500,
  margin: "50% auto",
  background: vars.color.white,
  padding: 30,
  borderRadius: 10,
});

export const MessageModalBox_close = style({
  margin: "10px 0 30px 0",
  textAlign: "end",
  cursor: "pointer",
});

export const MessageModalBox_body = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

export const MessageModalBox_message = style({
  color: vars.color.blueDark,
  textAlign: "center",
});
