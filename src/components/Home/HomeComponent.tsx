import {
  Title_Gradient,
  HomeStyle,
  HomeSubtitle,
  HomeTitle,
  HomeIcons,
  HomeIcon,
  HomeIconScroll,
} from "./Home.css";
import { Icon } from "@iconify/react";
import { poppinsBold } from "../../styles/fonts";

export default function HomeComponent() {
  return (
    <>
      <section className={`${HomeStyle}`} id="Home">
        <p
          className={`${Title_Gradient} ${HomeSubtitle} ${poppinsBold.className}`}
        >
          FULL-STACK JÚNIOR
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
        <Icon
          className={`${HomeIcon} ${HomeIconScroll}`}
          icon="line-md:chevron-small-double-down"
          color="#ffffff"
        />
      </section>
    </>
  );
}
