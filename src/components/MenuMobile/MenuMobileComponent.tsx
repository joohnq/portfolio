import React from "react";
import { poppinsBold } from "@/styles/fonts";
import { DisNone } from "@/styles/styles.css";
import {
  MenuMobile,
  MenuMobileList,
  MenuMobileListItem_text,
} from "./MenuMobile.css";

interface MobileMenuProps {
  isOpen: boolean;
  handleMenuClick: () => void;
}

export default function MenuMobileComponent({
  isOpen,
  handleMenuClick,
}: MobileMenuProps) {
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
}
