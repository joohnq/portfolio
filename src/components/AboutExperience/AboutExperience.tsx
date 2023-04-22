import React, { useState, ReactElement, useRef, useEffect } from "react";
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

  const handleHeader = (e: any) => {
    if (!e.target.classList.contains("AboutExperienceSelected")) {
      setAboutState(!aboutState);
    } else {
      return "";
    }
  };

  const HabilitiesBodyAbout = (): ReactElement => {
    return (
      <div className={`${AboutBody}`}>
        <Image
          className={`${AboutBodyPhoto}`}
          src={ProfilePhoto}
          alt="Foto de João Henrique"
        />
        <p className={`${AboutBodyDesc} ${poppinsMedium.className}`}>
          Olá caro visitante, meu nome é João e sou um jovem entusiasta da
          programação. Há alguns anos, descobri minha paixão pela área e desde
          então venho me dedicando intensamente aos estudos das linguagens
          necessárias para me tornar um desenvolvedor de front-end. Em
          particular, tenho dedicado bastante tempo ao HTML, CSS e JavaScript,
          que são tecnologias essenciais para a criação de websites e aplicações
          web modernas.
          {/* <br /> Atualmente, estou passando por um processo de mudança do
          front-end para o mobile. Estou estudando e me preparando para as novas
          tecnologias envolvidas no desenvolvimento de aplicativos móveis, como
          o Flutter. Apesar das dificuldades que surgem durante esse processo de
          mudança, estou bastante animado com as novas possibilidades que estão
          surgindo. Acredito que o desenvolvimento móvel será uma área muito
          promissora nos próximos anos e quero estar preparado para aproveitar
          todas as oportunidades. */}
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

  useEffect(() => {
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

        <div className="HabilitiesBody" ref={AboutExperienceBodyRef}></div>
      </section>
    </div>
  );
}
