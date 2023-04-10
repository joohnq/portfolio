import React from "react";
import { Container, MainTitle } from "@/styles/styles.css";
import {
  ProjectsStyle,
  ProjectCard,
  ProjectLeft,
  ProjectRight,
  TextStart,
  TextEnd,
  ProjectCard_Content,
  ProjectCard_ContentAbove,
  ProjectCard_ContentTitle,
  ProjectCard_ContentDesc,
  ProjectCard_Image,
  ProjectCard_Img
} from "./Projects.css";
import { poppinsBold, poppinsMedium } from "@/styles/fonts";
import Image from "next/image";
import { Icon } from "@iconify/react";
import ProjectExample from "../../../public/project-example.jpg";

export default function ProjectsComponent() {
  return (
    <section className={`${ProjectsStyle} ${Container}`} id="Projects">
      <h2 className={`${MainTitle} ${poppinsBold.className}`}>PROJETOS</h2>
      <div className={`${ProjectCard}`}>
        <div className={`${ProjectCard_Content} ${ProjectLeft}`}>
          <div className={`${ProjectCard_ContentAbove}`}>
            <Icon
              icon="akar-icons:link-chain"
              color="white"
              width="30"
              height="30"
            />
            <h3
              className={`${ProjectCard_ContentTitle} ${poppinsBold.className}`}
            >
              TITLE PROJECT
            </h3>
          </div>
          <p
            className={`${ProjectCard_ContentDesc} ${TextEnd} ${poppinsMedium.className}`}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
            dicta reprehenderit. Beatae accusamus, blanditiis aut animi eligendi
            eum suscipit amet asperiores dignissimos veniam quibusdam aliquam.
            Aut quibusdam doloremque tempore? Eveniet?
          </p>
        </div>
        <div className={`${ProjectCard_Image}`}>
          <Image src={ProjectExample} className={`${ProjectCard_Img}`}  alt="Image do projetos" />
        </div>
      </div>
      <div className={`${ProjectCard}`}>
        <div className={`${ProjectCard_Image}`}>
          <Image className={`${ProjectCard_Img}`} src={ProjectExample} alt="Image do projetos" />
        </div>
        <div className={`${ProjectCard_Content} ${ProjectRight}`}>
          <div className={`${ProjectCard_ContentAbove}`}>
            <h3
              className={`${ProjectCard_ContentTitle} ${poppinsBold.className}`}
            >
              TITLE PROJECT
            </h3>
            <Icon
              icon="akar-icons:link-chain"
              color="white"
              width="30"
              height="30"
            />
          </div>
          <p
            className={`${ProjectCard_ContentDesc} ${TextStart} ${poppinsMedium.className}`}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
            dicta reprehenderit. Beatae accusamus, blanditiis aut animi eligendi
            eum suscipit amet asperiores dignissimos veniam quibusdam aliquam.
            Aut quibusdam doloremque tempore? Eveniet?
          </p>
        </div>
      </div>
      <div className={`${ProjectCard}`}>
        <div className={`${ProjectCard_Content} ${ProjectLeft}`}>
          <div className={`${ProjectCard_ContentAbove}`}>
            <Icon
              icon="akar-icons:link-chain"
              color="white"
              width="30"
              height="30"
            />
            <h3
              className={`${ProjectCard_ContentTitle} ${poppinsBold.className}`}
            >
              TITLE PROJECT
            </h3>
          </div>
          <p
            className={`${ProjectCard_ContentDesc} ${TextEnd} ${poppinsMedium.className}`}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
            dicta reprehenderit. Beatae accusamus, blanditiis aut animi eligendi
            eum suscipit amet asperiores dignissimos veniam quibusdam aliquam.
            Aut quibusdam doloremque tempore? Eveniet?
          </p>
        </div>
        <div className={`${ProjectCard_Image}`}>
          <Image src={ProjectExample} className={`${ProjectCard_Img}`}  alt="Image do projetos" />
        </div>
      </div>
      <div className={`${ProjectCard}`}>
        <div className={`${ProjectCard_Image}`}>
          <Image src={ProjectExample} className={`${ProjectCard_Img}`}  alt="Image do projetos" />
        </div>
        <div className={`${ProjectCard_Content} ${ProjectRight}`}>
          <div className={`${ProjectCard_ContentAbove}`}>
            <h3
              className={`${ProjectCard_ContentTitle} ${poppinsBold.className}`}
            >
              TITLE PROJECT
            </h3>
            <Icon
              icon="akar-icons:link-chain"
              color="white"
              width="30"
              height="30"
            />
          </div>
          <p
            className={`${ProjectCard_ContentDesc} ${TextStart} ${poppinsMedium.className}`}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
            dicta reprehenderit. Beatae accusamus, blanditiis aut animi eligendi
            eum suscipit amet asperiores dignissimos veniam quibusdam aliquam.
            Aut quibusdam doloremque tempore? Eveniet?
          </p>
        </div>
      </div>
    </section>
  );
}
