import React from "react";
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
  ProjectCard_Video,
  ProjectCard_Buttons,
  ProjectCard_Button,
  ProjectCard_Button_a,
} from "./ProjectsCard.css";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  readonly projectData: {
    readonly title: string;
    readonly languages: string[];
    readonly video: string;
    readonly deployLink: string;
    readonly codeLink: string;
    readonly glareColor: string;
  };
}

export default function ProjectCardVideoComponent({
  projectData,
}: ProjectCardProps) {
  const { t } = useTranslation();
  const { title, languages, video, deployLink, codeLink, glareColor } =
    projectData;

  return (
    <Tilt
      style={{ width: "100%" }}
      scale={1}
      perspective={100000000}
      glareEnable={true}
      glareColor={glareColor}
      glareMaxOpacity={0.1}
      glarePosition="all"
      glareBorderRadius="20"
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
                  key={item.length * 5.3}
                  icon={`${item}`}
                  color="#888"
                  width="36"
                />
              );
            })}
          </div>
          <div className={`${ProjectCard_Image}`}>
            <video
              className={`${ProjectCard_Video}`}
              src={video}
              autoPlay
              loop
              muted
              controls={false}
              onMouseEnter={(e) => e.currentTarget.pause()}
              onMouseLeave={(e) => e.currentTarget.play()}
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
                {t("codigo")}
              </a>
            </button>
          </div>
        </div>
      </div>
    </Tilt>
  );
}
