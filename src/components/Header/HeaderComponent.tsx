import React, { useState, useEffect } from "react";
import { Container, Hover } from "@/styles/styles.css";
import { poppinsBold } from "@/styles/fonts";
import MenuMobileComponent from "@/components/MenuMobile/MenuMobileComponent";
import {
  HeaderStyle,
  HeaderInsider,
  HeaderLogoLanguage,
  HeaderLanguages,
  HeaderLanguagesText,
  HeaderLanguagesTextSelected,
  Logo,
  LogoMobile,
  LogoTabletDesktop,
  Nav,
  HeaderList,
  HeaderListMenu,
  HeaderListMenu_line,
  HeaderListMenu_lineUpOpen,
  HeaderListMenu_lineUpClose,
  HeaderListMenu_lineDownOpen,
  HeaderListMenu_lineDownClose,
  HeaderListItem_link,
} from "./Header.css";
import languageOption from "@/i18n/languageOptions";
import i18n from "@/i18n";
import { useTranslation } from "react-i18next";

export default function HeaderComponent() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("ptBR");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      handleMenu();
    }
  };

  const handleKeyDownLanguage = (
    event: React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      handleLanguage(selectedLanguage);
    }
  };

  function handleLanguage(value: string) {
    i18n.changeLanguage(value);
    setSelectedLanguage(value);
  }

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hoverLimits = {
      Home: { start: 0, end: 900 },
      AboutExperience: { start: 900, end: 1500 },
      Habilities: { start: 1500, end: 2000 },
      Projects: { start: 2000, end: 3300 },
      Contact: { start: 3300, end: 6000 },
    };

    for (const [id, { start, end }] of Object.entries(hoverLimits)) {
      const element = document.querySelector(`a[href="#${id}"]`);
      if (element) {
        if (scrollY >= start && scrollY < end) {
          element.classList.add(Hover);
        } else {
          element.classList.remove(Hover);
        }
      }
    }
  }, [scrollY]);

  function handleMenu() {
    setMenuOpen(!menuOpen);

    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  }

  const handleMenuItemClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href") ?? "";
    const targetElement = document.querySelector(targetId);

    const scrollOptions: Record<string, ScrollIntoViewOptions> = {
      Home: { behavior: "smooth", block: "start" },
      AboutExperience: { behavior: "smooth", block: "center" },
      Habilities: { behavior: "smooth", block: "center" },
      Projects: { behavior: "smooth", block: "start" },
      Contact: { behavior: "smooth", block: "start" },
    };

    if (targetElement) {
      const scrollOption = scrollOptions[targetElement.id];
      targetElement.scrollIntoView(scrollOption);
    }
  };

  return (
    <header className={`${HeaderStyle}`}>
      <div className={`${Container} ${HeaderInsider}`}>
        <div className={`${HeaderLogoLanguage}`}>
          <h1 className={`${Logo} ${poppinsBold.className}`}>
            <span className={`${LogoMobile}`}>JH</span>{" "}
            <span className={`${LogoTabletDesktop}`}>JOOHNQ</span>
          </h1>
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
        <nav className={Nav}>
          <ul className={HeaderList}>
            <li>
              <a
                href="#Home"
                className={`${HeaderListItem_link} ${poppinsBold.className}`}
                onClick={handleMenuItemClick}
              >
                {t("home")}
              </a>
            </li>
            <li>
              <a
                href="#AboutExperience"
                className={`${HeaderListItem_link} ${poppinsBold.className}`}
                onClick={handleMenuItemClick}
              >
                {t("sobre")}
              </a>
            </li>
            <li>
              <a
                href="#Habilities"
                className={`${HeaderListItem_link} ${poppinsBold.className}`}
                onClick={handleMenuItemClick}
              >
                {t("habilidades")}
              </a>
            </li>
            <li>
              <a
                href="#Projects"
                className={`${HeaderListItem_link} ${poppinsBold.className}`}
                onClick={handleMenuItemClick}
              >
                {t("projetos")}
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className={`${HeaderListItem_link} ${poppinsBold.className}`}
                onClick={handleMenuItemClick}
              >
                {t("contato")}
              </a>
            </li>
          </ul>
        </nav>
        <div
          className={HeaderListMenu}
          onClick={handleMenu}
          onKeyDown={handleKeyDown}
        >
          <div
            className={`${HeaderListMenu_line} ${
              menuOpen
                ? `${HeaderListMenu_lineUpOpen}`
                : `${HeaderListMenu_lineUpClose}`
            }`}
          ></div>
          <div
            className={`${HeaderListMenu_line} ${
              menuOpen
                ? `${HeaderListMenu_lineDownOpen}`
                : `${HeaderListMenu_lineDownClose}`
            }`}
          ></div>
        </div>
        <MenuMobileComponent
          isOpen={menuOpen}
          handleMenuClick={handleMenu}
          handleLanguage={handleLanguage}
          handleKeyDownLanguage={handleKeyDownLanguage}
          selectedLanguage={selectedLanguage}
        />
      </div>
    </header>
  );
}
