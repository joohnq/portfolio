import React, { useState, useRef, ReactNode } from "react";
import Image from "next/image";
import ProfilePhoto from "../../../public/profilephoto.jpg";
import TGAPhoto from "../../../public/tgaphoto.png";
import { Container } from "@/styles/styles.css";
import { poppinsBold, poppinsMedium } from "../../styles/fonts";

import {
  AboutExperience,
  AboutExperienceHeaders,
  AboutExperienceHeader,
  AboutExperienceSelected,
  AboutBody,
  AboutBodyPhoto,
  AboutBodyDesc,
  ExperienceBody,
  ExperienceBodyJob,
  ExperienceBodyJobImageText,
  ExperienceBodyJobContent,
  ExperienceBodyJobTitle,
  ExperienceBodyJobDesc,
  ExperienceBodyJobLanguages,
} from "./AboutExperience.css";

export default function AboutExperienceComponent() {
  const [aboutState, setAboutState] = useState<boolean>(true);
  const AboutExperienceBodyRef = useRef<HTMLDivElement>(null);

  const HabilitiesBodyAbout = (): ReactNode => {
    return (
      <div className={`${AboutBody}`}>
        <Image
          className={`${AboutBodyPhoto}`}
          src={ProfilePhoto}
          alt="Foto de João Henrique"
        />
        <p className={`${AboutBodyDesc} ${poppinsMedium.className}`}>
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
          <br />⏰ Dedico-me diariamente para alcançar meus objetivos e crescer
          como profissional.
        </p>
      </div>
    );
  };

  const HabilitiesBodyExperience = (): ReactNode => {
    return (
      <div className={`${ExperienceBody}`}>
        <div className={`${ExperienceBodyJob}`}>
          <div>
            <Image
              src={TGAPhoto}
              width={300}
              alt="TGA MARKETING - MARCAS COM PERSONALIDADE"
            />
          </div>
          <div className={`${ExperienceBodyJobContent}`}>
            <h3
              className={`${ExperienceBodyJobTitle} ${poppinsBold.className}`}
            >
              TGA MARKETING - FEVEREIRO / ATUAL
            </h3>
            <p
              className={`${ExperienceBodyJobDesc} ${poppinsMedium.className}`}
            >
              Desenvolvimento de Langing Pages responsivas e eficazes,
              utilizando boas práticas de código, de SEO, e acessibilidade.
            </p>
            <p
              className={`${ExperienceBodyJobLanguages} ${poppinsBold.className}`}
            >
              HTML , CSS , JAVASCRIPT , BOOTSTRAP
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
            <h3
              className={`${ExperienceBodyJobTitle} ${poppinsBold.className}`}
            >
              99FRELAS - 1 MÊS
            </h3>
            <p
              className={`${ExperienceBodyJobDesc} ${poppinsMedium.className}`}
            >
              Desenvolvimento de landing pages.
            </p>
            <p
              className={`${ExperienceBodyJobLanguages} ${poppinsBold.className}`}
            >
              HTML , CSS , JAVASCRIPT , BOOTSTRAP
            </p>
          </div>
        </div>
      </div>
    );
  };

  const handleHeader = (e: any) => {
    if (!e.target.classList.contains("AboutExperienceSelected")) {
      setAboutState(!aboutState);
    } else {
      return "";
    }
  };

  return (
    <div className={Container} id="AboutExperience">
      <section className={`${AboutExperience}`}>
        <div className={`${AboutExperienceHeaders}`}>
          <button
            className={`${AboutExperienceHeader} ${
              aboutState
                ? `${AboutExperienceSelected} AboutExperienceSelected`
                : ""
            }  ${poppinsBold.className}`}
            onClick={(e) => handleHeader(e)}
          >
            {" "}
            SOBRE MIM{" "}
          </button>

          <button
            className={`${AboutExperienceHeader} ${
              !aboutState
                ? `${AboutExperienceSelected} AboutExperienceSelected`
                : ""
            }  ${poppinsBold.className}`}
            onClick={(e) => handleHeader(e)}
          >
            EXPERIÊNCIA
          </button>
        </div>

        <div className="HabilitiesBody" ref={AboutExperienceBodyRef}>
          {aboutState ? HabilitiesBodyAbout() : HabilitiesBodyExperience()}
        </div>
      </section>
    </div>
  );
}
