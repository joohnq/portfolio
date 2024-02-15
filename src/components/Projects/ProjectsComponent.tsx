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
            video:
              "https://private-user-images.githubusercontent.com/72231799/305162328-9b768f33-de8e-4a4a-87b8-4330ea7a0e00.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDgwMTgxODksIm5iZiI6MTcwODAxNzg4OSwicGF0aCI6Ii83MjIzMTc5OS8zMDUxNjIzMjgtOWI3NjhmMzMtZGU4ZS00YTRhLTg3YjgtNDMzMGVhN2EwZTAwLm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjE1VDE3MjQ0OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTE2ZTM4MzU0MzhiNjJhMDM2Njk4NzgxYzQyNWM3NTQ5MmQxNDU2NDY0OGFiNDg3YWIyYTcwOWQ5NDkxMDFjNDMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.3eHb7VnDjnNSQlzirY88DR_TZ5CI3xve1FFpH-o_1s0",
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
