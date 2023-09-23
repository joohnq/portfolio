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
            codeLink: "https://github.com/joohnq/app-pokedex",
          }}
        />

        <ProjectCardComponent
          projectData={{
            title: "Movies and Series App",
            languages: [
              "material-symbols:flutter",
              "simple-icons:dart",
              "material-symbols:http",
            ],
            image: "movies-app.png",
            imageAlt: "Imagem do aplicativo de filmes e series",
            deployLink: "",
            codeLink: "https://github.com/joohnq/movies_app",
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
