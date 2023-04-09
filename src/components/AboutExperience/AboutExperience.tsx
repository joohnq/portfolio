import React, { useState, ReactElement, useRef, useLayoutEffect } from "react";
import ReactDOMServer from "react-dom/server";
import Image from "next/image";
import ProfilePhoto from "../../../public/profilephoto.jpg";
import TGAPhoto from "../../../public/tgaphoto.png";

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
import { Container } from "@/styles/styles.css";
import { poppinsBold, poppinsMedium } from "../../styles/fonts";

export default function AboutExperienceComponent() {
  const [aboutState, setAboutState] = useState<boolean>(true);
  const AboutExperienceBodyRef = useRef<HTMLDivElement>(null);

  function handleHeader(e: any) {
    if (!e.target.classList.contains("AboutExperienceSelected")) {
      setAboutState(!aboutState);
    } else {
      return "";
    }
  }

  const HabilitiesBodyAbout = (): ReactElement => {
    return (
      <div className={`${AboutBody}`}>
        <Image
          className={`${AboutBodyPhoto}`}
          src={ProfilePhoto}
          alt="Foto de João Henrique"
        />
        <p className={`${AboutBodyDesc} ${poppinsMedium.className}`}>
          Olá visitante! Eu me chamo João Henrique , e sou um desenvolvedor Full
          Stack JÚnior com uma paixão por tecnologia e programação desde os meus
          16 anos. Nessa época, comecei a explorar as linguagens HTML, CSS,
          JavaScript e desde então venho aprimorando minhas habilidades nessa
          área. Atualmente, trabalho como freelancer , e isso me permite a
          flexibilidade e liberdade para assumir projetos empolgantes e
          desafiadores enquanto construo meu portfólio de desenvolvimento de
          software. Mas não é só trabalho e desenvolvimento de software que me
          animam. Eu também sou um grande fã de tecnologia e gadgets , e sempre
          estou buscando as últimas tendências em tecnologia para me manter
          atualizado.
        </p>
      </div>
    );
  };

  const HabilitiesBodyExperience = (): ReactElement => {
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

  useLayoutEffect(() => {
    if (aboutState) {
      const element = HabilitiesBodyAbout();
      const html = ReactDOMServer.renderToStaticMarkup(element);
      AboutExperienceBodyRef.current!.innerHTML = html;
    } else {
      const element = HabilitiesBodyExperience();
      const html = ReactDOMServer.renderToStaticMarkup(element);
      AboutExperienceBodyRef.current!.innerHTML = html;
    }
  }, [aboutState]);

  return (
    <div className={Container}>
      <section className={`${AboutExperience}`} id="Sobre&Experiencias">
        <div className={`${AboutExperienceHeaders}`}>
          <button
            className={`${AboutExperienceHeader} ${
              aboutState ? `${AboutExperienceSelected} AboutExperienceSelected` : ""
            }  ${poppinsBold.className}`}
            onClick={(e) => handleHeader(e)}
          >
            {" "}
            SOBRE MIM{" "}
          </button>

          <button
            className={`${AboutExperienceHeader} ${
              !aboutState ? `${AboutExperienceSelected} AboutExperienceSelected` : ""
            }  ${poppinsBold.className}`}
            onClick={(e) => handleHeader(e)}
          >
            EXPERIÊNCIA
          </button>
        </div>

        <div className="HabilitiesBody" ref={AboutExperienceBodyRef}></div>
      </section>
    </div>
  );
}
