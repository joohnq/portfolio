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
import { Container} from "../../styles/styles.css";
import { Poppins } from "next/font/google";
import { Icon } from "@iconify/react";

const poppins = Poppins({
  weight: "600",
  subsets: ["devanagari"],
});

export default function HeaderComponent() {
  return (
    <header className={`${HeaderStyle} ${Container}`}>
      <h1 className={`${poppins.className} ${Logo}`}>
        <span className={`${LogoMobile}`}>JH</span>{" "}
        <span className={`${LogoTabletDesktop}`}>JOOHNQ</span>
      </h1>
      <nav>
        <ul className={HeaderList}>
          <li className={`${poppins.className} ${HeaderListItem}`}>
            <Icon icon="mdi:user" className={`${HeaderListItem_icon}`} />
            <a href="#About" className={`${HeaderListItem_text}`}>
              Sobre
            </a>
          </li>
          <li className={`${poppins.className} ${HeaderListItem}`}>
            <Icon
              icon="fluent:brain-circuit-20-filled"
              className={`${HeaderListItem_icon}`}
            />
            <a href="#Habilities" className={`${HeaderListItem_text}`}>
              Habilidades
            </a>
          </li>
          <li className={`${poppins.className} ${HeaderListItem}`}>
            <Icon icon="ic:outline-work" className={`${HeaderListItem_icon}`} />
            <a href="#Expiriences" className={`${HeaderListItem_text}`}>
              Experiências
            </a>
          </li>
          <li className={`${poppins.className} ${HeaderListItem}`}>
            <Icon icon="ph:code-bold" className={`${HeaderListItem_icon}`} />
            <a href="#Projects" className={`${HeaderListItem_text}`}>
              Projetos
            </a>
          </li>
          <li className={`${poppins.className} ${HeaderListItem}`}>
            <Icon
              icon="material-symbols:chat"
              className={`${HeaderListItem_icon}`}
            />
            <a href="#Contact" className={`${HeaderListItem_text}`}>
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
