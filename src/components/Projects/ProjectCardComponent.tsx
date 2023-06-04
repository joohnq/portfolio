import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { poppinsBold, poppinsSemiBold } from "@/styles/fonts";
import MacPointsComponent from "@/components/MacPoints/MacPoints";
import {
  ProjectCard,
  ProjectCard_Content,
  ProjectCard_ContentTitle,
  ProjectCard_Languages,
  ProjectCard_LanguagesIcon,
  ProjectCard_Image,
  ProjectCard_Img,
  ProjectCard_Buttons,
  ProjectCard_Button,
  ProjectCard_Button_a,
} from "./ProjectsCard.css";

interface ProjectCardProps {
  projectData: {
    title: string;
    languages: string[];
    image: string;
    imageAlt: string;
    deployLink: string;
    codeLink: string;
  };
}

export default function ProjectCardComponent({
  projectData,
}: ProjectCardProps) {
  const { title, languages, image, imageAlt, deployLink, codeLink } =
    projectData;

  return (
    <div className={`${ProjectCard}`}>
      <MacPointsComponent />
      <div className={`${ProjectCard_Content}`}>
        <h3 className={`${ProjectCard_ContentTitle} ${poppinsBold.className}`}>
          {title}
        </h3>
        <div className={`${ProjectCard_Languages}`}>
          {languages.map((item, index) => {
            return (
              <Icon
                className={`${ProjectCard_LanguagesIcon}`}
                key={index}
                icon={`${item}`}
                color="#888"
                width="40"
              />
            );
          })}
        </div>
        <div className={`${ProjectCard_Image}`}>
          <Image
            className={`${ProjectCard_Img}`}
            height={500}
            width={500}
            src={`/${image}`}
            alt={imageAlt}
          />
        </div>
        <div className={`${ProjectCard_Buttons}`}>
          <button className={`${ProjectCard_Button}`}>
            <a
              className={`${ProjectCard_Button_a} ${poppinsSemiBold.className}`}
              href={`${deployLink}`}
            >
              DEPLOY
            </a>
          </button>
          <button className={`${ProjectCard_Button}`}>
            <a
              className={`${ProjectCard_Button_a} ${poppinsSemiBold.className} `}
              href={`${codeLink}`}
            >
              CÓDIGO
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
