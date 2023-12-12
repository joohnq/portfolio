import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { poppinsBold, poppinsSemiBold } from "@/styles/fonts";
import MacPointsComponent from "@/components/MacPoints/MacPoints";
import Tilt from "react-parallax-tilt";

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
  readonly projectData: {
    readonly title: string;
    readonly languages: string[];
    readonly image: string;
    readonly imageAlt: string;
    readonly deployLink: string;
    readonly codeLink: string;
    readonly glareColor: string;
  };
}

export default function ProjectCardComponent({
  projectData,
}: ProjectCardProps) {
  const {
    title,
    languages,
    image,
    imageAlt,
    deployLink,
    codeLink,
    glareColor,
  } = projectData;

  return (
    <Tilt
      perspective={10000}
      glareEnable={true}
      glareColor={glareColor}
      glareMaxOpacity={0.1}
      glarePosition="all"
      glareBorderRadius="20px"
    >
      <div
        className={`${ProjectCard}`}
        data-tilt
        data-tilt-max="50"
        data-tilt-speed="400"
        data-tilt-perspective="500"
      >
        <MacPointsComponent />
        <div className={`${ProjectCard_Content}`}>
          <h3
            className={`${ProjectCard_ContentTitle} ${poppinsBold.className}`}
          >
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
                  width="36"
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
            {deployLink !== "" && (
              <button className={`${ProjectCard_Button}`}>
                <a
                  className={`${ProjectCard_Button_a} ${poppinsSemiBold.className}`}
                  href={`${deployLink}`}
                >
                  DEPLOY
                </a>
              </button>
            )}
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
    </Tilt>
  );
}
