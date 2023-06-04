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
import { poppinsBold, poppinsSemiBold } from "@/styles/fonts";

export default function AboutComponent() {
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
          <p className={`${AboutBodyDesc} ${poppinsSemiBold.className}`}>
            👋 Olá caro visitante!
            <br />
            😄 Meu nome é João e sou um entusiasta da programação.
            <br />
            💻 Sou apaixonado pela área e tenho dedicado meu tempo aos estudos.
            <br />
            🌍 Além disso, estou aprimorando meu inglês para ampliar minhas
            oportunidades.
            <br />
            📱 Estou explorando o mundo do desenvolvimento mobile para expandir
            minhas habilidades.
            <br />⏰ Dedico-me diariamente para alcançar meus objetivos e
            crescer como profissional.
          </p>
        </div>
      </div>
    </div>
  );
}
