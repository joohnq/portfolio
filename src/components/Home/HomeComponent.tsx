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
import {
  socialMedia_github,
  socialMedia_instagram,
  socialMedia_linkedin,
} from "../socialMedias";

export default function HomeComponent() {
  return (
    <>
      <section className={`${HomeStyle}`}>
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
          <a href={socialMedia_github} target="__blank">
            <Icon
              className={`${HomeIcon}`}
              icon="line-md:github-loop"
              color="#ffffff"
            />
          </a>

          <a href={socialMedia_instagram} target="__blank">
            <Icon
              className={`${HomeIcon}`}
              icon="line-md:instagram"
              color="#ffffff"
            />
          </a>

          <a href={socialMedia_linkedin}>
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
