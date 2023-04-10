import {
  StacksStyle,
  StackCard,
  StackCard_Title,
  StackCard_Desc,
} from "./Stack.css";
import { Container } from "../../styles/styles.css";
import { Icon } from "@iconify/react";
import { poppinsBold, poppinsMedium } from "../../styles/fonts";

export default function StacksComponent() {
  return (
    <section className={`${StacksStyle} ${Container}`}>
      <div className={`${StackCard}`}>
        <Icon
          icon="material-symbols:web"
          width={100}
          height={100}
          color="#ffffff"
        />
        <h3 className={`${StackCard_Title} ${poppinsBold.className}`}>
          DESENVOLVIMENTO <br /> WEB
        </h3>
        <p className={`${StackCard_Desc} ${poppinsMedium.className}`}>
          Desenvolvimento, de telas responsivas com boa harmonia, elegância e
          principalmente velocidade.
        </p>
      </div>
      <div className={`${StackCard}`}>
        <Icon icon="bx:server" width={100} height={100} color="#ffffff" />
        <h3 className={`${StackCard_Title} ${poppinsBold.className}`}>
          DESENVOLVIMENTO <br /> BACK-END
        </h3>
        <p className={`${StackCard_Desc} ${poppinsMedium.className}`}>
          Desenvolvimento agil do back-end utilizando node js, baixo
          conhecimento, porém em constate evolução.
        </p>
      </div>
      <div className={`${StackCard}`}>
        <Icon
          icon="ph:device-mobile-camera-bold"
          width={100}
          height={100}
          color="#ffffff"
        />
        <h3 className={`${StackCard_Title} ${poppinsBold.className}`}>
          DESENVOLVIMENTO <br /> MOBILE
        </h3>
        <p className={`${StackCard_Desc} ${poppinsMedium.className}`}>
          Conhecimento em desenvolvimento utilizando react native, conhecimentos
          básicos da stack.
        </p>
      </div>
    </section>
  );
}
