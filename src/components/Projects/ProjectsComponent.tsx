import React from "react";
import { Container, MainTitle, MainSubtitle } from "@/styles/styles.css";
import {
  ProjectsStyle,
  ProjectCard,
  ProjectLeft,
  ProjectRight,
  TextStart,
  TextEnd,
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
            quality={100}
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

            <Icon
              icon="akar-icons:link-chain"
              color="white"
              width="30"
              height="30"
            />
          </a>
          <p
            className={`${ProjectCard_ContentDesc} ${TextStart} ${poppinsMedium.className}`}
          >
            Este aplicativo foi criado utilizando o REACT NATIVE e a PokeAPI. Em
            resumo, ele apresenta uma lista de 20 pokemons ordenados conforme a
            API. Com a Pokedex, é possível procurar qualquer pokemon
            simplesmente digitando seu nome. Ao selecionar um card, é possível
            acessar mais informações sobre o pokemon, como uma breve descrição e
            algumas de suas estatísticas.
          </p>
        </div>
      </div>
      <div className={`${ProjectCard}`}>
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

            <Icon
              icon="akar-icons:link-chain"
              color="white"
              width="30"
              height="30"
            />
          </a>
          <p
            className={`${ProjectCard_ContentDesc} ${TextStart} ${poppinsMedium.className}`}
          >
            Este aplicativo foi criado utilizando o REACT NATIVE e a PokeAPI. Em
            resumo, ele apresenta uma lista de 20 pokemons ordenados conforme a
            API. Com a Pokedex, é possível procurar qualquer pokemon
            simplesmente digitando seu nome. Ao selecionar um card, é possível
            acessar mais informações sobre o pokemon, como uma breve descrição e
            algumas de suas estatísticas.
          </p>
        </div>
        <div className={`${ProjectCard_Image}`}>
          <Image
            className={`${ProjectCard_Img}`}
            height={500}
            src={weather}
            quality={100}
            alt="Image do projetos"
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
            icon="ant-design:stop-twotone"
            color="#fff"
            width="150"
            height="150"
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
            icon="ant-design:stop-twotone"
            color="#fff"
            width="150"
            height="150"
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
