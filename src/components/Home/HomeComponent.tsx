import { Icon } from "@iconify/react";
import { poppinsBold } from "@/styles/fonts";
import { Title_Gradient } from "@/styles/styles.css";
import {
  HomeStyle,
  Background,
  HomeSubtitle,
  HomeTitle,
  HomeIcons,
  HomeIcon,
  HomeIconFloating,
  AndroidIcon,
  JetpackComposeIcon,
  XMLIcon,
  UiKitIcon,
} from "./Home.css";
import Image from "next/image";
import BackgroundImage from "/public/Demo (4).png";

export default function HomeComponent() {
  return (
    <>
      <Image
        quality={100}
        src={BackgroundImage}
        alt="Image"
        className={Background}
        width={0}
        height={0}
      />
      <Icon
        className={`${HomeIconFloating} ${AndroidIcon}`}
        icon="logos:android-icon"
        width={150}
        rotate={1}
      />
      <Icon
        className={`${HomeIconFloating} ${JetpackComposeIcon}`}
        icon="devicon:jetpackcompose"
        width={200}
      />
      <Icon
        className={`${HomeIconFloating} ${XMLIcon}`}
        icon="vscode-icons:file-type-xml"
        width={150}
      />
      <Icon
        className={`${HomeIconFloating} ${UiKitIcon}`}
        icon="devicon:androidstudio"
        width={200}
      />

      <section className={`${HomeStyle}`} id="Home">
        <p
          className={`${Title_Gradient} ${HomeSubtitle} ${poppinsBold.className}`}
        >
          DESENVOLVEDOR ANDROID
        </p>
        <h2 className={`${HomeTitle} ${poppinsBold.className}`}>
          OLÁ , VISITANTE <br />
          EU SOU O <span className={`${Title_Gradient}`}>JOÃO</span>
        </h2>
        <div className={`${HomeIcons}`}>
          <a
            href="https://github.com/joohnq"
            target="__blank"
            aria-label="Link para o meu Github"
          >
            <Icon
              className={`${HomeIcon}`}
              icon="line-md:github-loop"
              color="#ffffff"
            />
          </a>

          <a
            href="https://www.instagram.com/jhenrique.dev/"
            target="__blank"
            aria-label="Link para o meu Instagram"
          >
            <Icon
              className={`${HomeIcon}`}
              icon="line-md:instagram"
              color="#ffffff"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/joao-henrique-de-souza-silva-b43921196/"
            target="__blank"
            aria-label="Link para o meu Linkedin"
          >
            <Icon
              className={`${HomeIcon}`}
              icon="line-md:linkedin"
              color="#ffffff"
            />
          </a>
        </div>
      </section>
    </>
  );
}
