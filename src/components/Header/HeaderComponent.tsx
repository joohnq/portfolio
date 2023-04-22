import { useState } from "react";
import {
  DisNone,
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
import { Container } from "../../styles/styles.css";
import { Icon } from "@iconify/react";
import { poppinsBold } from "../../styles/fonts";

export default function HeaderComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenu() {
    setMenuOpen(!menuOpen);
  }

  const handleMenuItemClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href") ?? "";
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      if (targetElement.id == "Projects") {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (targetElement.id == "Contact") {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (targetElement.id == "Habilities") {
        targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (targetElement.id == "AboutExperience") {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
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
