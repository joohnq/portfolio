import React, { useState, useEffect } from "react";
import {
  HeaderStyle,
  Logo,
  LogoMobile,
  LogoTabletDesktop,
  HeaderList,
  HeaderListItem,
  HeaderListMenu,
  HeaderListItem_icon,
  HeaderListItem_text,
  MenuMobile,
  MenuMobileIconClose,
  MenuMobileList,
  MenuMobileListItem,
  MenuMobileListItem_text,
} from "./Header.css";
import { DisNone, Hover } from "../../styles/styles.css";
import { Container } from "../../styles/styles.css";
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
      Home: { start: 0, end: 1200 },
      AboutExperience: { start: 1200, end: 2000 },
      Habilities: { start: 2000, end: 3000 },
      Projects: { start: 3000, end: 5000 },
      Contact: { start: 5000, end: 6000 },
    };

    for (const [id, { start, end }] of Object.entries(hoverLimits)) {
      const element = document.querySelector(`a[href="#${id}"]`)?.children[1];
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
          <a
            href="#Home"
            className={`${HeaderListItem}`}
            onClick={handleMenuItemClick}
          >
            <Icon
              icon="ic:round-home"
              className={`${HeaderListItem_icon}`}
              color="#fff"
            />
            <li className={`${HeaderListItem_text} ${poppinsBold.className}`}>
              HOME
            </li>
          </a>
          <a
            href="#AboutExperience"
            className={`${HeaderListItem}`}
            onClick={handleMenuItemClick}
          >
            <Icon
              icon="mdi:user"
              className={`${HeaderListItem_icon}`}
              color="#fff"
            />
            <li className={`${HeaderListItem_text} ${poppinsBold.className}`}>
              SOBRE
            </li>
          </a>
          <a
            href="#Habilities"
            className={`${HeaderListItem}`}
            onClick={handleMenuItemClick}
          >
            <Icon
              icon="fluent:brain-circuit-20-filled"
              className={`${HeaderListItem_icon}`}
              color="#fff"
            />
            <li className={`${HeaderListItem_text} ${poppinsBold.className}`}>
              HABILIDADES
            </li>
          </a>
          <a
            href="#Projects"
            className={`${HeaderListItem}`}
            onClick={handleMenuItemClick}
          >
            <Icon
              icon="ph:code-bold"
              className={`${HeaderListItem_icon}`}
              color="#fff"
            />
            <li className={`${HeaderListItem_text} ${poppinsBold.className}`}>
              PROJETOS
            </li>
          </a>
          <a
            href="#Contact"
            className={`${HeaderListItem}`}
            onClick={handleMenuItemClick}
          >
            <Icon
              icon="material-symbols:chat"
              className={`${HeaderListItem_icon}`}
              color="#fff"
            />
            <li className={`${HeaderListItem_text} ${poppinsBold.className}`}>
              CONTATO
            </li>
          </a>
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
          <a
            href="#AboutExperience"
            className={`${MenuMobileListItem}`}
            onClick={handleMenu}
          >
            <li
              className={`${MenuMobileListItem_text} ${poppinsBold.className}`}
            >
              SOBRE
            </li>
          </a>

          <a
            href="#Experience"
            className={`${MenuMobileListItem}`}
            onClick={handleMenu}
          >
            <li
              className={`${MenuMobileListItem_text} ${poppinsBold.className}`}
            >
              EXPERIÊNCIAS
            </li>
          </a>
          <a
            href="#Habilities"
            className={`${MenuMobileListItem}`}
            onClick={handleMenu}
          >
            <li
              className={`${MenuMobileListItem_text} ${poppinsBold.className}`}
            >
              HABILIDADES
            </li>
          </a>
          <a
            href="#Projects"
            className={`${MenuMobileListItem}`}
            onClick={handleMenu}
          >
            <li
              className={`${MenuMobileListItem_text} ${poppinsBold.className}`}
            >
              PROJETOS
            </li>
          </a>
          <a
            href="#Contact"
            className={`${MenuMobileListItem}`}
            onClick={handleMenu}
          >
            <li
              className={`${MenuMobileListItem_text} ${poppinsBold.className}`}
            >
              CONTATO
            </li>
          </a>
        </ul>
      </div>
    </header>
  );
}
