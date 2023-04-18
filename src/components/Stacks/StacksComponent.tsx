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
          Desenvolvimento de interfaces responsivas, que primam pela harmonia
          estética, elegância e, sobretudo, velocidade de carregamento.
        </p>
      </div>
      <div className={`${StackCard}`}>
        <Icon icon="bx:server" width={100} height={100} color="#ffffff" />
        <h3 className={`${StackCard_Title} ${poppinsBold.className}`}>
          DESENVOLVIMENTO <br /> BACK-END
        </h3>
        <p className={`${StackCard_Desc} ${poppinsMedium.className}`}>
          Foco em manter a organização e escalabilidade do código do backend,
          utilizando as melhores práticas de desenvolvimento para garantir a
          qualidade e eficiência da aplicação.
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
          Conhecimento de habilidades básicas em desenvolvimento mobile
          utilizando React Native, mas busco constantemente expandir meus
          conhecimentos para criar produtos de alta qualidade para os usuários
          finais.
        </p>
      </div>
    </section>
  );
}
