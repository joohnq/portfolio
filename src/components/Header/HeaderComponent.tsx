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
} from "./Header.css";
import { Container } from "../../styles/styles.css";
import { Icon } from "@iconify/react";
import { poppinsBold } from "../../styles/fonts";

export default function HeaderComponent() {
  return (
    <header className={`${HeaderStyle} ${Container}`}>
      <h1 className={`${Logo} ${poppinsBold.className}`}>
        <span className={`${LogoMobile}`}>JH</span>{" "}
        <span className={`${LogoTabletDesktop}`}>JOOHNQ</span>
        <Icon icon="line-md:moon-alt-to-sunny-outline-loop-transition" />
      </h1>
      <nav>
        <ul className={HeaderList}>
          <a href="#Sobre&Experiencias" className={`${HeaderListItem}`}>
            <Icon
              icon="mdi:user"
              className={`${HeaderListItem_icon}`}
              color="#fff"
            />
            <li className={`${HeaderListItem_text} ${poppinsBold.className}`}>
              SOBRE
            </li>
          </a>

          <a href="#Sobre&Experiencias" className={`${HeaderListItem}`}>
            <Icon
              icon="ic:outline-work"
              className={`${HeaderListItem_icon}`}
              color="#fff"
            />
            <li className={`${HeaderListItem_text} ${poppinsBold.className}`}>
              EXPERIÊNCIAS
            </li>
          </a>
          <a href="#Habilities" className={`${HeaderListItem}`}>
            <Icon
              icon="fluent:brain-circuit-20-filled"
              className={`${HeaderListItem_icon}`}
              color="#fff"
            />
            <li className={`${HeaderListItem_text} ${poppinsBold.className}`}>
              HABILIDADES
            </li>
          </a>
          <a href="#Projects" className={`${HeaderListItem}`}>
            <Icon
              icon="ph:code-bold"
              className={`${HeaderListItem_icon}`}
              color="#fff"
            />
            <li className={`${HeaderListItem_text} ${poppinsBold.className}`}>
              PROJETOS
            </li>
          </a>
          <a href="#Contact" className={`${HeaderListItem}`}>
            <Icon
              icon="material-symbols:chat"
              className={`${HeaderListItem_icon}`}
              color="#fff"
            />
            <li className={`${HeaderListItem_text} ${poppinsBold.className}`}>
              CONTATO
            </li>
          </a>
          <a>
            <Icon
              icon="material-symbols:menu-rounded"
              className={`${HeaderListMenu}`}
              color="#fff"
            />
          </a>
        </ul>
      </nav>
    </header>
  );
}
