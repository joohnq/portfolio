import React from "react";
import Image from "next/image";
import ProfilePhoto from "/public/profilephoto.jpg";
import MacPointsComponent from "@/components/MacPoints/MacPoints";
import {
  AboutBody,
  AboutBody_BoxImage,
  AboutBody_Image,
  AboutBody_BoxContent,
  AboutBody_MaxPoints,
  AboutBody_Content,
  AboutBodyDesc,
} from "./About.css";
import { MediumTitle } from "@/styles/styles.css";
import { poppinsBold, poppinsRegular } from "@/styles/fonts";
import { useTranslation } from "react-i18next";

export default function AboutComponent() {
  const { t } = useTranslation();
  return (
    <div className={`${AboutBody}`}>
      <div className={`${AboutBody_BoxImage}`}>
        <Image
          className={`${AboutBody_Image}`}
          src={ProfilePhoto}
          alt="Foto de João Henrique"
        />
      </div>
      <div className={`${AboutBody_BoxContent}`}>
        <div className={`${AboutBody_MaxPoints}`}>
          <MacPointsComponent />
        </div>
        <div className={`${AboutBody_Content}`}>
          <h3 className={`${MediumTitle} ${poppinsBold.className}`}>
            João Henrique
          </h3>
          <p className={`${AboutBodyDesc} ${poppinsRegular.className}`}>
            👋 {t("sobreMimTexto1")}
          </p>
          <p className={`${AboutBodyDesc} ${poppinsRegular.className}`}>
            😄 {t("sobreMimTexto2")}
          </p>
          <p className={`${AboutBodyDesc} ${poppinsRegular.className}`}>
            💻 {t("sobreMimTexto3")}
          </p>
          <p className={`${AboutBodyDesc} ${poppinsRegular.className}`}>
            💡 📲 {t("sobreMimTexto4")}
          </p>
          <p className={`${AboutBodyDesc} ${poppinsRegular.className}`}>
            💪 🎯 {t("sobreMimTexto5")}
          </p>
          <p className={`${AboutBodyDesc} ${poppinsRegular.className}`}>
            ✨ 💬 {t("sobreMimTexto6")}
          </p>
        </div>
      </div>
    </div>
  );
}
