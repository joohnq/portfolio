import React from "react";
import { Container, MainTitle, MainSubtitle } from "@/styles/styles.css";
import {
  ProjectsStyle,
  ProjectCard,
  ProjectLeft,
  ProjectRight,
  TextStart,
  TextEnd,
  LinkExternal,
  ProjectCard_Content,
  ProjectCard_ContentAbove,
  ProjectCard_ContentTitle,
  ProjectCard_ContentDesc,
  ProjectCard_Image,
  ProjectCard_Img,
} from "./Projects.css";
import { poppinsBold, poppinsMedium } from "@/styles/fonts";
import Image from "next/image";
import { Icon } from "@iconify/react";
import pokedex from "../../../public/pokedex.png";
import weather from "../../../public/weather-app.png";
import timerCronometro from "../../../public/timar-cronometro.png";

export default function ProjectsComponent() {
  return (
    <section className={`${ProjectsStyle} ${Container}`} id="Projects">
      <h2 className={`${MainTitle} ${poppinsBold.className}`}>PROJETOS</h2>
      <div className={`${ProjectCard}`}>
        <div className={`${ProjectCard_Image}`}>
          <Image
            className={`${ProjectCard_Img}`}
            height={500}
            src={pokedex}
            alt="Image do projetos"
          />
        </div>
        <div className={`${ProjectCard_Content} ${ProjectRight}`}>
          <a
            href="https://github.com/joohnq/app-pokedex"
            target="_blank"
            className={`${ProjectCard_ContentAbove}`}
          >
            <h3
              className={`${ProjectCard_ContentTitle} ${poppinsBold.className}`}
            >
              Pokedex App
            </h3>
          </a>
          <p
            className={`${ProjectCard_ContentDesc} ${TextStart} ${poppinsMedium.className}`}
          ></p>
        </div>
      </div>
      <div className={`${ProjectCard}`}>
        <div className={`${ProjectCard_Image}`}>
          <Image
            className={`${ProjectCard_Img}`}
            height={500}
            src={weather}
            alt="Image do projetos"
          />
        </div>
        <div className={`${ProjectCard_Content} ${ProjectRight}`}>
          <a
            href="https://github.com/joohnq/app-pokedex"
            target="_blank"
            className={`${ProjectCard_ContentAbove}`}
          >
            <h3
              className={`${ProjectCard_ContentTitle} ${poppinsBold.className}`}
            >
              Weather Website
            </h3>
          </a>
          <p
            className={`${ProjectCard_ContentDesc} ${TextEnd} ${poppinsMedium.className}`}
          ></p>
        </div>
      </div>
      <div className={`${ProjectCard}`}>
        <div className={`${ProjectCard_Image}`}>
          <Image
            className={`${ProjectCard_Img}`}
            height={500}
            src={timerCronometro}
            alt="Image do projetos"
          />
        </div>
        <div className={`${ProjectCard_Content} ${ProjectRight}`}>
          <a
            href="https://github.com/joohnq/app-pokedex"
            target="_blank"
            className={`${ProjectCard_ContentAbove}`}
          >
            <h3
              className={`${ProjectCard_ContentTitle} ${poppinsBold.className}`}
            >
              Timer e Cronômetro
            </h3>
          </a>
          <p
            className={`${ProjectCard_ContentDesc} ${TextStart} ${poppinsMedium.className}`}
          ></p>
        </div>
      </div>
      <div className={`${ProjectCard}`}>
        <div className={`${ProjectCard_Content} ${ProjectLeft}`}>
          <div className={`${ProjectCard_ContentAbove}`}>
            <h3
              className={`${ProjectCard_ContentTitle} ${poppinsBold.className}`}
            >
              Em breve
            </h3>
          </div>
        </div>
        <div className={`${ProjectCard_Image}`}>
          <Icon
            icon="svg-spinners:blocks-scale"
            color="#fff"
            width="120"
            height="120"
          />
        </div>
      </div>
      <div className={`${ProjectCard}`}>
        <div className={`${ProjectCard_Content} ${ProjectLeft}`}>
          <div className={`${ProjectCard_ContentAbove}`}>
            <h3
              className={`${ProjectCard_ContentTitle} ${poppinsBold.className}`}
            >
              Em breve
            </h3>
          </div>
        </div>
        <div className={`${ProjectCard_Image}`}>
          <Icon
            icon="svg-spinners:blocks-scale"
            color="#fff"
            width="120"
            height="120"
          />
        </div>
      </div>
      <a
        href="https://github.com/joohnq?tab=repositories"
        target="__blank"
        className={`${MainSubtitle} ${poppinsBold.className}`}
      >
        VEJA MAIS NO MEU GITHUB...
      </a>
    </section>
  );
}
