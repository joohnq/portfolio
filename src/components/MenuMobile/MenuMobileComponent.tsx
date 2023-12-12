import React from "react";
import { poppinsBold } from "@/styles/fonts";
import { DisNone } from "@/styles/styles.css";
import {
  MenuMobile,
  MenuMobileList,
  MenuMobileListItem_text,
  HeaderLanguages,
  HeaderLanguagesText,
  HeaderLanguagesTextSelected,
} from "./MenuMobile.css";
import { useTranslation } from "react-i18next";
import languageOption from "@/i18n/languageOptions";

interface MobileMenuProps {
  readonly isOpen: boolean;
  readonly handleMenuClick: () => void;
  readonly handleLanguage: (value: string) => void;
  readonly selectedLanguage: string;
  readonly handleKeyDownLanguage: (
    event: React.KeyboardEvent<HTMLDivElement>
  ) => void;
}

export default function MenuMobileComponent({
  isOpen,
  handleMenuClick,
  handleLanguage,
  selectedLanguage,
  handleKeyDownLanguage,
}: MobileMenuProps) {
  const { t } = useTranslation();

  return (
    <div className={`${MenuMobile} ${!isOpen && DisNone} `}>
      <ul className={MenuMobileList}>
        <li>
          <a
            href="#Home"
            className={`${MenuMobileListItem_text} ${poppinsBold.className}`}
            onClick={handleMenuClick}
          >
            {t("home")}
          </a>
        </li>
        <li>
          <a
            href="#AboutExperience"
            className={`${MenuMobileListItem_text} ${poppinsBold.className}`}
            onClick={handleMenuClick}
          >
            {t("sobre")}
          </a>
        </li>
        <li>
          <a
            href="#Habilities"
            className={`${MenuMobileListItem_text} ${poppinsBold.className}`}
            onClick={handleMenuClick}
          >
            {t("habilidades")}
          </a>
        </li>
        <li>
          <a
            href="#Projects"
            className={`${MenuMobileListItem_text} ${poppinsBold.className}`}
            onClick={handleMenuClick}
          >
            {t("projetos")}
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            className={`${MenuMobileListItem_text} ${poppinsBold.className}`}
            onClick={handleMenuClick}
          >
            {t("contato")}
          </a>
        </li>
      </ul>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={`${HeaderLanguages}`}>
          {languageOption.map((language) => (
            <p
              onClick={() => handleLanguage(language.type)}
              className={`${HeaderLanguagesText} ${poppinsBold.className} ${
                language.type === selectedLanguage
                  ? HeaderLanguagesTextSelected
                  : ""
              }`}
              key={language.value}
              onKeyDown={handleKeyDownLanguage}
            >
              {language.value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
