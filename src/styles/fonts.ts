import { Poppins } from "next/font/google";
import { DM_Sans } from "next/font/google";

export const poppinsExtraBold = Poppins({
  weight: ["800"],
  subsets: ["devanagari"],
  display: "block",
});

export const poppinsBold = Poppins({
  weight: ["700"],
  subsets: ["devanagari"],
  display: "block",
});

export const poppinsSemiBold = Poppins({
  weight: ["600"],
  subsets: ["devanagari"],
  display: "block",
});

export const poppinsMedium = Poppins({
  weight: ["500"],
  subsets: ["devanagari"],
  display: "block",
});

export const poppinsRegular = Poppins({
  weight: ["400"],
  subsets: ["devanagari"],
  display: "block",
});

export const dm_sansBold = DM_Sans({
  weight: ["700"],
  subsets: ["latin"],
  display: "block",
});
