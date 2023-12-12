import React from "react";
import Image from "next/image";
import TGAPhoto from "/public/tgaphoto.png";
import { poppinsBold, poppinsRegular } from "@/styles/fonts";
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
import { useTranslation } from "react-i18next";

export default function ExperienceComponent() {
  const { t } = useTranslation();

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
              {t("tgaMarketingTitle")}
            </h3>
            <p
              className={`${ExperienceBodyJobDesc} ${poppinsRegular.className}`}
            >
              {t("tgaMarketingDesc")}
            </p>
            <div
              className={`${ExperienceBodyJobLanguages} ${poppinsBold.className}`}
            >
              <Icon icon="bxl:html5" color="#848d97" width="35" />
              <Icon icon="bxl:css3" color="#848d97" width="35" />
              <Icon icon="bxl:javascript" color="#848d97" width="35" />
              <Icon icon="bxl:bootstrap" color="#848d97" width="35" />
              <Icon icon="file-icons:php" color="#848d97" width="35" />
              <Icon icon="cib:mysql" color="#848d97" width="35" />
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
              {t("freelancerTitle")}
            </h3>
            <p
              className={`${ExperienceBodyJobDesc} ${poppinsRegular.className}`}
            >
              {t("freelancerDesc")}
            </p>
            <p
              className={`${ExperienceBodyJobLanguages} ${poppinsBold.className}`}
            >
              <Icon icon="bxl:html5" color="#848d97" width="35" />
              <Icon icon="bxl:css3" color="#848d97" width="35" />
              <Icon icon="bxl:javascript" color="#848d97" width="35" />
              <Icon icon="bxl:bootstrap" color="#848d97" width="35" />
              <Icon
                icon="material-symbols:flutter"
                color="#848d97"
                width="35"
              />
              <Icon icon="mdi:react" color="#848d97" width="35" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
