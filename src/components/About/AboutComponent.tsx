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
            😄 Sou João Henrique, desenvolvedor Front-End evoluindo para a área
            Mobile. 🌟
            <br />
            💻 Atualmente sou desenvolvedor front-end, moldando a web com código
            e design.
            <br />
            💡 📲 Mas meu olhar está firmemente voltado para o futuro, onde
            estou mergulhando no emocionante mundo do desenvolvimento móvel.
            <br />
            💪 🎯Meu objetivo? Unir minha paixão por tecnologia e criar soluções
            que transformem a vida das pessoas.
            <br />✨ 💬 Vamos nos conectar! Adoro trocar ideias e conhecimentos
            com colegas profissionais da área. Juntos, podemos alcançar novos
            patamares na criação de experiências digitais!
          </p>
        </div>
      </div>
    </div>
  );
}
