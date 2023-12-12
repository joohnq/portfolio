import React from "react";
import { Container, BigTitle, LinkExternal } from "@/styles/styles.css";
import { ProjectsStyle, ProjectsStyle_Box } from "./Projects.css";
import { poppinsBold } from "@/styles/fonts";
import ProjectCardComponent from "./ProjectCardComponent";
import ProjectCardVideoComponent from "./ProjectCardVideoComponent";

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
            glareColor: "#3fb950",
          }}
        />

        <ProjectCardVideoComponent
          projectData={{
            title: "Movies and Series App",
            languages: [
              "ic:round-android",
              "mdi:file-xml-box",
              "mdi:firebase",
              "simple-icons:kotlin",
            ],
            video: "movies-app.mp4",
            deployLink: "",
            codeLink: "https://github.com/joohnq/movies_app",
            glareColor: "#33b3ae",
          }}
        />
        <ProjectCardVideoComponent
          projectData={{
            title: "WhatsApp Clone",
            languages: [
              "ic:round-android",
              "mdi:file-xml-box",
              "mdi:firebase",
              "simple-icons:kotlin",
            ],
            video: "whatsapp.mp4",
            deployLink: "",
            codeLink: "https://github.com/joohnq/whatsapp",
            glareColor: "#f778ba",
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
