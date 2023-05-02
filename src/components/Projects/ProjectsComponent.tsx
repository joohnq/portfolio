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
            Este aplicativo foi criado utilizando o REACT NATIVE e a{" "}
            <a
              className={`${LinkExternal}`}
              href="https://pokeapi.co/"
              target="__blank"
            >
              PokeAPI
            </a>{" "}
            . Em resumo, ele apresenta uma lista de 20 pokemons ordenados
            conforme a API. Com a Pokedex, é possível procurar qualquer pokemon
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
              Weather APP
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
            Este website, desenvolvido em REACT, constitui um sistema que
            oferece informações básicas sobre a previsão do tempo de qualquer
            cidade. Para acessá-las, basta inserir o nome da cidade no campo
            correspondente, e serão exibidas informações como temperatura,
            sensação térmica, umidade e pressão. Destaca-se que essa aplicação
            se conecta à API da{" "}
            <a
              className={`${LinkExternal}`}
              href="https://openweathermap.org/"
              target="__blank"
            >
              OpenWeather
            </a>{" "}
            para obter dados precisos e atualizados.{" "}
          </p>
        </div>
        <div className={`${ProjectCard_Image}`}>
          <Image
            className={`${ProjectCard_Img}`}
            height={500}
            src={weather}
            alt="Image do projetos"
          />
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
              Timer / Cronômetro
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
            Com esse projeto de cronômetro e timer feito em HTML, CSS e
            JavaScript, você terá uma ferramenta completa e personalizável para
            medir o tempo em diferentes situações. O cronômetro conta com botões
            de início, pausa, reinício e volta, permitindo uma contagem precisa
            e flexível do tempo. Já o timer possibilita que você defina o tempo
            desejado para a contagem regressiva.A interface do projeto é moderna
            e responsiva, permitindo a sua utilização em diferentes dispositivos
            e tamanhos de tela.
          </p>
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
