import React, { useState, useEffect } from "react";
import {
  HeaderStyle,
  Logo,
  LogoMobile,
  LogoTabletDesktop,
  HeaderList,
  HeaderListMenu,
  HeaderListItem,
  HeaderListItem_icon,
  HeaderListItem_link,
  MenuMobile,
  MenuMobileIconClose,
  MenuMobileList,
  MenuMobileListItem_text,
} from "./Header.css";
import { Container, DisNone, Hover } from "../../styles/styles.css";
import { Icon } from "@iconify/react";
import { poppinsBold } from "../../styles/fonts";

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
      <nav>
        <ul className={HeaderList}>
          <li className={`${HeaderListItem}`}>
            <Icon
              icon="fluent-emoji:house"
              className={`${HeaderListItem_icon}`}
              color="#fff"
            />
            <a
              href="#Home"
              className={`${HeaderListItem_link} ${poppinsBold.className}`}
              onClick={handleMenuItemClick}
            >
              HOME
            </a>
          </li>
          <li className={`${HeaderListItem}`}>
            <Icon
              icon="fluent-emoji:person-in-steamy-room-medium-dark"
              className={`${HeaderListItem_icon}`}
              color="#fff"
            />
            <a
              href="#AboutExperience"
              className={`${HeaderListItem_link} ${poppinsBold.className}`}
              onClick={handleMenuItemClick}
            >
              SOBRE
            </a>
          </li>
          <li className={`${HeaderListItem}`}>
            <Icon
              icon="fluent-emoji:brain"
              className={`${HeaderListItem_icon}`}
              color="#fff"
            />
            <a
              href="#Habilities"
              className={`${HeaderListItem_link} ${poppinsBold.className}`}
              onClick={handleMenuItemClick}
            >
              HABILIDADES
            </a>
          </li>
          <li className={`${HeaderListItem}`}>
            <Icon
              icon="fluent-emoji:briefcase"
              className={`${HeaderListItem_icon}`}
              color="#fff"
            />
            <a
              href="#Projects"
              className={`${HeaderListItem_link} ${poppinsBold.className}`}
              onClick={handleMenuItemClick}
            >
              PROJETOS
            </a>
          </li>
          <li className={`${HeaderListItem}`}>
            <Icon
              icon="fluent-emoji:envelope-with-arrow"
              className={`${HeaderListItem_icon}`}
              color="#fff"
            />
            <a
              href="#Contact"
              className={`${HeaderListItem_link} ${poppinsBold.className}`}
              onClick={handleMenuItemClick}
            >
              CONTATO
            </a>
          </li>
          <Icon
            icon="material-symbols:menu-rounded"
            className={`${HeaderListMenu}`}
            color="#fff"
            onClick={handleMenu}
          />
        </ul>
      </nav>
      <div className={`${MenuMobile} ${menuOpen ? "" : `${DisNone}`}`}>
        <div className={MenuMobileIconClose}>
          <Icon
            icon="material-symbols:close-rounded"
            color="white"
            width="50"
            height="50"
            onClick={handleMenu}
          />
        </div>
        <ul className={MenuMobileList}>
          <li>
            <a
              href="#AboutExperience"
              className={`${MenuMobileListItem_text} ${poppinsBold.className}`}
              onClick={handleMenu}
            >
              SOBRE
            </a>
          </li>
          <li>
            <a
              href="#Experience"
              className={`${MenuMobileListItem_text} ${poppinsBold.className}`}
              onClick={handleMenu}
            >
              EXPERIÊNCIAS
            </a>
          </li>
          <li>
            <a
              href="#Habilities"
              className={`${MenuMobileListItem_text} ${poppinsBold.className}`}
              onClick={handleMenu}
            >
              HABILIDADES
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              className={`${MenuMobileListItem_text} ${poppinsBold.className}`}
              onClick={handleMenu}
            >
              PROJETOS
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className={`${MenuMobileListItem_text} ${poppinsBold.className}`}
              onClick={handleMenu}
            >
              CONTATO
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
