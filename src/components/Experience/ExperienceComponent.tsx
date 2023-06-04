import React from "react";
import Image from "next/image";
import TGAPhoto from "/public/tgaphoto.png";
import { poppinsBold, poppinsMedium } from "@/styles/fonts";
import MacPointsComponent from "@/components/MacPoints/MacPoints";
import {
  ExperienceBody,
  Experience_MacPoints,
  ExperienceBodyJobs,
  ExperienceBodyJob,
  ExperienceBodyJob_BoxImage,
  ExperienceBodyJob_Image,
  ExperienceBodyJobImageText,
  ExperienceBodyJobContent,
  ExperienceBodyJobTitle,
  ExperienceBodyJobDesc,
  ExperienceBodyJobLanguages,
} from "./Experience.css";
import { Icon } from "@iconify/react";

export default function ExperienceComponent() {
  return (
    <div className={`${ExperienceBody}`} id="Experience">
      <div className={`${Experience_MacPoints}`}>
        <MacPointsComponent />
      </div>
      <div className={`${ExperienceBodyJobs}`}>
        <div className={`${ExperienceBodyJob}`}>
          <div className={`${ExperienceBodyJob_BoxImage}`}>
            <Image
              className={`${ExperienceBodyJob_Image}`}
              src={TGAPhoto}
              width={300}
              alt="TGA MARKETING - MARCAS COM PERSONALIDADE"
            />
          </div>
          <div className={`${ExperienceBodyJobContent}`}>
            <h3
              className={`${ExperienceBodyJobTitle} ${poppinsBold.className}`}
            >
              TGA MARKETING - FEVEREIRO / ATUAL
            </h3>
            <p
              className={`${ExperienceBodyJobDesc} ${poppinsMedium.className}`}
            >
              Desenvolvimento de Langing Pages responsivas e eficazes,
              utilizando boas práticas de código, de SEO, e acessibilidade.
            </p>
            <div
              className={`${ExperienceBodyJobLanguages} ${poppinsBold.className}`}
            >
              <Icon icon="bxl:html5" color="#888" width="35" />
              <Icon icon="bxl:css3" color="#888" width="35" />
              <Icon icon="bxl:javascript" color="#888" width="35" />
              <Icon icon="bxl:bootstrap" color="#888" width="35" />
            </div>
          </div>
        </div>
        <div className={`${ExperienceBodyJob}`}>
          <div className={`${ExperienceBodyJob_BoxImage}`}>
            <h3
              className={`${ExperienceBodyJobImageText} ${poppinsBold.className}`}
            >
              FREELANCE
            </h3>
          </div>

          <div className={`${ExperienceBodyJobContent}`}>
            <h3
              className={`${ExperienceBodyJobTitle} ${poppinsBold.className}`}
            >
              99FRELAS - 1 MÊS
            </h3>
            <p
              className={`${ExperienceBodyJobDesc} ${poppinsMedium.className}`}
            >
              Desenvolvimento de landing pages.
            </p>
            <p
              className={`${ExperienceBodyJobLanguages} ${poppinsBold.className}`}
            >
              <Icon icon="bxl:html5" color="#888" width="35" />
              <Icon icon="bxl:css3" color="#888" width="35" />
              <Icon icon="bxl:javascript" color="#888" width="35" />
              <Icon icon="bxl:bootstrap" color="#888" width="35" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
