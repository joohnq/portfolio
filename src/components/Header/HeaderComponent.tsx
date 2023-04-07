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
          <li className={`${HeaderListItem}`}>
            <Icon icon="mdi:user" className={`${HeaderListItem_icon}`} />
            <a
              href="#About"
              className={`${HeaderListItem_text} ${poppinsBold.className}`}
            >
              SOBRE
            </a>
          </li>
          <li className={`${HeaderListItem}`}>
            <Icon
              icon="fluent:brain-circuit-20-filled"
              className={`${HeaderListItem_icon}`}
            />
            <a
              href="#Habilities"
              className={`${HeaderListItem_text} ${poppinsBold.className}`}
            >
              HABILIDADES
            </a>
          </li>
          <li className={`${HeaderListItem}`}>
            <Icon icon="ic:outline-work" className={`${HeaderListItem_icon}`} />
            <a
              href="#Expiriences"
              className={`${HeaderListItem_text} ${poppinsBold.className}`}
            >
              EXPERIÊNCIAS
            </a>
          </li>
          <li className={`${HeaderListItem}`}>
            <Icon icon="ph:code-bold" className={`${HeaderListItem_icon}`} />
            <a
              href="#Projects"
              className={`${HeaderListItem_text} ${poppinsBold.className}`}
            >
              PROJETOS
            </a>
          </li>
          <li className={`${HeaderListItem}`}>
            <Icon
              icon="material-symbols:chat"
              className={`${HeaderListItem_icon}`}
            />
            <a
              href="#Contact"
              className={`${HeaderListItem_text} ${poppinsBold.className}`}
            >
              CONTATO
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
