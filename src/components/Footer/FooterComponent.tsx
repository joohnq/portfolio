import React from "react";
import {
  FooterStyle,
  Footer_SocialMedias,
  Footer_SocialMediasIcon,
  Footer_Desc,
} from "./Footer.css";
import { Icon } from "@iconify/react";
import { poppinsBold } from "@/styles/fonts";
import { useTranslation } from "react-i18next";

export default function FooterComponent() {
  const { t } = useTranslation();

  return (
    <footer className={`${FooterStyle}`}>
      <div className={`${Footer_SocialMedias}`}>
        <a
          href="https://github.com/joohnq"
          target="__blank"
          aria-label="Github"
        >
          <Icon
            className={`${Footer_SocialMediasIcon}`}
            icon="tabler:brand-github-filled"
            color="#888"
            height={30}
          />
        </a>

        <a
          href="https://www.instagram.com/jhenrique.dev/"
          target="__blank"
          aria-label="Instagram"
        >
          <Icon
            className={`${Footer_SocialMediasIcon}`}
            icon="ri:instagram-fill"
            color="#888"
            height={30}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/joao-henrique-de-souza-silva-b43921196/"
          target="__blank"
          aria-label="Linkedin"
        >
          <Icon
            className={`${Footer_SocialMediasIcon}`}
            icon="mdi:linkedin"
            color="#888"
            height={30}
          />
        </a>
      </div>
      <p className={`${Footer_Desc} ${poppinsBold.className}`}>
        &copy; 2023 João Henrique. {t("direitos")}
      </p>
    </footer>
  );
}
