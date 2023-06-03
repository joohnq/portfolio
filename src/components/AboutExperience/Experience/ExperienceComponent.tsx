import React from "react";
import Image from "next/image";
import TGAPhoto from "/public/tgaphoto.png";
import { poppinsBold, poppinsMedium } from "@/styles/fonts";
import MacPointsComponent from "@/components/MacPoints/MacPoints";
import {
  ExperienceBody,
  ExperienceBodyJob,
  ExperienceBodyJobImageText,
  ExperienceBodyJobContent,
  ExperienceBodyJobTitle,
  ExperienceBodyJobDesc,
  ExperienceBodyJobLanguages,
} from "./Experience.css";

const ExperienceComponent = () => {
  return (
    <div className={`${ExperienceBody}`}>
      <MacPointsComponent />
      <div className={`${ExperienceBodyJob}`}>
        <div>
          <Image
            src={TGAPhoto}
            width={300}
            alt="TGA MARKETING - MARCAS COM PERSONALIDADE"
          />
        </div>
        <div className={`${ExperienceBodyJobContent}`}>
          <h3 className={`${ExperienceBodyJobTitle} ${poppinsBold.className}`}>
            TGA MARKETING - FEVEREIRO / ATUAL
          </h3>
          <p className={`${ExperienceBodyJobDesc} ${poppinsMedium.className}`}>
            Desenvolvimento de Langing Pages responsivas e eficazes, utilizando
            boas práticas de código, de SEO, e acessibilidade.
          </p>
          <p
            className={`${ExperienceBodyJobLanguages} ${poppinsBold.className}`}
          >
            HTML, CSS, JAVASCRIPT, BOOTSTRAP
          </p>
        </div>
      </div>
      <div className={`${ExperienceBodyJob}`}>
        <h3
          className={`${ExperienceBodyJobImageText} ${poppinsBold.className}`}
        >
          FREELANCE
        </h3>
        <div className={`${ExperienceBodyJobContent}`}>
          <h3 className={`${ExperienceBodyJobTitle} ${poppinsBold.className}`}>
            99FRELAS - 1 MÊS
          </h3>
          <p className={`${ExperienceBodyJobDesc} ${poppinsMedium.className}`}>
            Desenvolvimento de landing pages.
          </p>
          <p
            className={`${ExperienceBodyJobLanguages} ${poppinsBold.className}`}
          >
            HTML, CSS, JAVASCRIPT, BOOTSTRAP
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;
