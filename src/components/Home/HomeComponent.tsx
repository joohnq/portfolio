import { Icon } from "@iconify/react";
import { poppinsBold } from "@/styles/fonts";
import { Title_Gradient } from "@/styles/styles.css";
import {
  HomeStyle,
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
import { useTranslation } from "react-i18next";

export default function HomeComponent() {
  const { t } = useTranslation();
  return (
    <>
      <Icon
        className={`${HomeIconFloating} ${AndroidIcon}`}
        icon="logos:android-icon"
        rotate={1}
      />
      <Icon
        className={`${HomeIconFloating} ${JetpackComposeIcon}`}
        icon="devicon:jetpackcompose"
      />
      <Icon
        className={`${HomeIconFloating} ${XMLIcon}`}
        icon="vscode-icons:file-type-xml"
      />
      <Icon
        className={`${HomeIconFloating} ${UiKitIcon}`}
        icon="devicon:androidstudio"
      />
      <section className={`${HomeStyle}`} id="Home">
        <p
          className={`${Title_Gradient} ${HomeSubtitle} ${poppinsBold.className}`}
        >
          {t("desenvolvedorAndroid")}
        </p>
        <h2 className={`${HomeTitle} ${poppinsBold.className}`}>
          {t("apresentacao1")}
          <br />
          {t("apresentacao2")}
        </h2>
        <div className={`${HomeIcons}`}>
          <a
            href="https://github.com/joohnq"
            target="__blank"
            aria-label="Github"
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
            aria-label="Instagram"
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
            aria-label="Linkedin"
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
