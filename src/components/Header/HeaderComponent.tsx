import React, { useState, useEffect } from "react";
import {
  HeaderStyle,
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
import { Container, Hover } from "../../styles/styles.css";
import { poppinsBold } from "../../styles/fonts";
import MenuMobileComponent from "../MenuMobile/MenuMobileComponent";

export default function HeaderComponent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hoverLimits = {
      Home: { start: 0, end: 1400 },
      AboutExperience: { start: 1400, end: 2600 },
      Habilities: { start: 2600, end: 3400 },
      Projects: { start: 3400, end: 6500 },
      Contact: { start: 6500, end: 7000 },
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
    <header className={`${HeaderStyle} ${Container}`}>
      <h1 className={`${Logo} ${poppinsBold.className}`}>
        <span className={`${LogoMobile}`}>JH</span>{" "}
        <span className={`${LogoTabletDesktop}`}>JOOHNQ</span>
      </h1>
      <nav className={Nav}>
        <ul className={HeaderList}>
          <li>
            <a
              href="#Home"
              className={`${HeaderListItem_link} ${poppinsBold.className}`}
              onClick={handleMenuItemClick}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#AboutExperience"
              className={`${HeaderListItem_link} ${poppinsBold.className}`}
              onClick={handleMenuItemClick}
            >
              SOBRE
            </a>
          </li>
          <li>
            <a
              href="#Habilities"
              className={`${HeaderListItem_link} ${poppinsBold.className}`}
              onClick={handleMenuItemClick}
            >
              HABILIDADES
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              className={`${HeaderListItem_link} ${poppinsBold.className}`}
              onClick={handleMenuItemClick}
            >
              PROJETOS
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className={`${HeaderListItem_link} ${poppinsBold.className}`}
              onClick={handleMenuItemClick}
            >
              CONTATO
            </a>
          </li>
        </ul>
      </nav>
      <div className={`${HeaderListMenu} `} onClick={handleMenu}>
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
      <MenuMobileComponent isOpen={menuOpen} handleMenuClick={handleMenu} />
    </header>
  );
}
