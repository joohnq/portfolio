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

import { Poppins } from "next/font/google";

const poppinsBold = Poppins({
  weight: ["800"],
  subsets: ["devanagari"],
  display: "block",
});

const poppinsSemiBold = Poppins({
  weight: ["600"],
  subsets: ["devanagari"],
  display: "block",
});

export default function HeaderComponent() {
  return (
    <header className={`${HeaderStyle} ${Container}`}>
      <h1 className={`${Logo} ${poppinsBold.className}`}>
        <span className={`${LogoMobile}`}>JH</span>{" "}
        <span className={`${LogoTabletDesktop}`}>JOOHNQ</span>
        <Icon icon="line-md:light-dark-loop" />
      </h1>
      <nav>
        <ul className={HeaderList}>
          <li className={`${HeaderListItem}`}>
            <Icon icon="mdi:user" className={`${HeaderListItem_icon}`} />
            <a
              href="#About"
              className={`${HeaderListItem_text} ${poppinsSemiBold.className}`}
            >
              Sobre
            </a>
          </li>
          <li className={`${HeaderListItem}`}>
            <Icon
              icon="fluent:brain-circuit-20-filled"
              className={`${HeaderListItem_icon}`}
            />
            <a
              href="#Habilities"
              className={`${HeaderListItem_text} ${poppinsSemiBold.className}`}
            >
              Habilidades
            </a>
          </li>
          <li className={`${HeaderListItem}`}>
            <Icon icon="ic:outline-work" className={`${HeaderListItem_icon}`} />
            <a
              href="#Expiriences"
              className={`${HeaderListItem_text} ${poppinsSemiBold.className}`}
            >
              Experiências
            </a>
          </li>
          <li className={`${HeaderListItem}`}>
            <Icon icon="ph:code-bold" className={`${HeaderListItem_icon}`} />
            <a
              href="#Projects"
              className={`${HeaderListItem_text} ${poppinsSemiBold.className}`}
            >
              Projetos
            </a>
          </li>
          <li className={`${HeaderListItem}`}>
            <Icon
              icon="material-symbols:chat"
              className={`${HeaderListItem_icon}`}
            />
            <a
              href="#Contact"
              className={`${HeaderListItem_text} ${poppinsSemiBold.className}`}
            >
              Contato
            </a>
          </li>
          <li>
            <Icon
              icon="material-symbols:menu-rounded"
              className={`${HeaderListMenu}`}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
