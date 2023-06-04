import React from "react";
import { Container, BigTitle, LinkExternal } from "@/styles/styles.css";
import { ProjectsStyle, ProjectsStyle_Box } from "./Projects.css";
import { poppinsBold } from "@/styles/fonts";
import ProjectCardComponent from "./ProjectCardComponent";

export default function ProjectsComponent() {
  return (
    <section className={`${ProjectsStyle} ${Container}`} id="Projects">
      <h2 className={`${BigTitle} ${poppinsBold.className}`}>PROJETOS</h2>
      <div className={`${ProjectsStyle_Box}`}>
        <ProjectCardComponent
          projectData={{
            title: "Pokedex",
            languages: [
              "tabler:brand-react-native",
              "file-icons:styledcomponents",
              "mdi:api",
              "devicon-plain:axios-wordmark",
            ],
            image: "pokedex.png",
            imageAlt: "Imagem do projeto Pokedex no mobile",
            deployLink: "",
            codeLink: "",
          }}
        />
        <ProjectCardComponent
          projectData={{
            title: "Weather Website",
            languages: [
              "tabler:brand-react-native",
              "bxl:javascript",
              "bxl:css3",
              "mdi:api",
              "devicon-plain:axios-wordmark",
            ],
            image: "weather-app.png",
            imageAlt: "Imagem do projeto Weather no navegador",
            deployLink: "",
            codeLink: "",
          }}
        />
        <ProjectCardComponent
          projectData={{
            title: "Timer e Cronometro",
            languages: [
              "ant-design:html5-filled",
              "bxl:css3",
              "bxl:javascript",
            ],
            image: "timer-cronometro.png",
            imageAlt: "Imagem do projeto Timer e Cronometro no navegador",
            deployLink: "",
            codeLink: "",
          }}
        />
      </div>
      <a
        href="https://github.com/joohnq?tab=repositories"
        target="__blank"
        className={`${LinkExternal} ${poppinsBold.className}`}
      >
        Ver mais no meu GitHub...
      </a>
    </section>
  );
}
