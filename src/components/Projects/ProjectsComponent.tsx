import React from "react";
import { Container, BigTitle, LinkExternal } from "@/styles/styles.css";
import { ProjectsStyle, ProjectsStyle_Box } from "./Projects.css";
import { poppinsBold } from "@/styles/fonts";
import ProjectCardComponent from "./ProjectCardComponent";
import ProjectCardVideoComponent from "./ProjectCardVideoComponent";
import { useTranslation } from "react-i18next";

export default function ProjectsComponent() {
  const { t } = useTranslation();

  return (
    <section className={`${ProjectsStyle} ${Container}`} id="Projects">
      <h2 className={`${BigTitle} ${poppinsBold.className}`}>
        {t("projetos")}
      </h2>
      <div className={`${ProjectsStyle_Box}`}>
        <ProjectCardVideoComponent
          projectData={{
            title: "Movies and Series App",
            languages: [
              "material-symbols:flutter",
              "simple-icons:dart",
              "carbon:api-1",
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
              "simple-icons:kotlin",
              "mdi:file-xml-box",
              "mdi:firebase",
            ],
            video: "whatsapp.mp4",
            deployLink: "",
            codeLink: "https://github.com/joohnq/whatsapp",
            glareColor: "#f778ba",
          }}
        />
        <ProjectCardVideoComponent
          projectData={{
            title: "JobsFinderApp",
            languages: [
              "ic:round-android",
              "simple-icons:kotlin",
              "mdi:file-xml-box",
              "mdi:firebase",
            ],
            video: "jobsfinderapp.mp4",
            deployLink: "",
            codeLink: "https://github.com/joohnq/JobsFinderApp",
            glareColor: "#3fb950",
          }}
        />
      </div>
      <a
        href="https://github.com/joohnq?tab=repositories"
        target="__blank"
        className={`${LinkExternal} ${poppinsBold.className}`}
      >
        {t("verMaisNoGithub")}
      </a>
    </section>
  );
}
