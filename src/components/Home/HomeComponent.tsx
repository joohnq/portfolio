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
import { Poppins } from "next/font/google";

const poppinsBold = Poppins({
  weight: ["800"],
  subsets: ["devanagari"],
  display: 'block'
});

export default function HomeComponent() {
  return (
    <section className={`${HomeStyle}`}>
      <p
        className={`${Title_Gradient} ${HomeSubtitle} ${poppinsBold.className}`}
      >
        FULL-STACK JÚNIOR
      </p>
      <h2 className={`${HomeTitle} ${poppinsBold.className}`}>
        OLÁ, VISITANTE <br /> EU SOU O{" "}
        <span className={`${Title_Gradient} ${poppinsBold.className}`}>JOÃO</span>{" "}
      </h2>
      <div className={`${HomeIcons}`}>
        <Icon className={`${HomeIcon}`} icon="line-md:github-loop" color="#ffffff" />
        <Icon
          className={`${HomeIcon}`}
          icon="line-md:instagram"
          color="#ffffff"
        />
        <Icon className={`${HomeIcon}`} icon="line-md:linkedin" color="#ffffff" />
      </div>
      <Icon
        className={`${HomeIcon} ${HomeIconScroll}`}
        icon="line-md:chevron-small-double-down"
        color="#ffffff"
      />
    </section>
  );
}
