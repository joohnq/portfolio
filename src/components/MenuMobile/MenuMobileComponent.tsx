import React from "react";
import {
  MenuMobile,
  MenuMobileList,
  MenuMobileListItem_text,
} from "./MenuMobile.css";
import { poppinsBold } from "../../styles/fonts";
import { DisNone } from "../../styles/styles.css";

interface MobileMenuProps {
  isOpen: boolean;
  handleMenuClick: () => void;
}

const MenuMobileComponent: React.FC<MobileMenuProps> = ({
  isOpen,
  handleMenuClick,
}) => {
  return (
    <div className={`${MenuMobile} ${isOpen ? "" : `${DisNone}`}`}>
      <ul className={MenuMobileList}>
        <li>
          <a
            href="#Home"
            className={`${MenuMobileListItem_text} ${poppinsBold.className}`}
            onClick={handleMenuClick}
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#AboutExperience"
            className={`${MenuMobileListItem_text} ${poppinsBold.className}`}
            onClick={handleMenuClick}
          >
            SOBRE
          </a>
        </li>
        <li>
          <a
            href="#Experience"
            className={`${MenuMobileListItem_text} ${poppinsBold.className}`}
            onClick={handleMenuClick}
          >
            EXPERIÊNCIAS
          </a>
        </li>
        <li>
          <a
            href="#Habilities"
            className={`${MenuMobileListItem_text} ${poppinsBold.className}`}
            onClick={handleMenuClick}
          >
            HABILIDADES
          </a>
        </li>
        <li>
          <a
            href="#Projects"
            className={`${MenuMobileListItem_text} ${poppinsBold.className}`}
            onClick={handleMenuClick}
          >
            PROJETOS
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            className={`${MenuMobileListItem_text} ${poppinsBold.className}`}
            onClick={handleMenuClick}
          >
            CONTATO
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuMobileComponent;
