import React from "react";
import {
  HabilitiesStyle,
  HabilitiesGridCards,
  HabilitiesCard,
  HabilitiesCard_Title,
  HabilitiesTitle,
} from "./Habilities.css";
import { Container } from "@/styles/styles.css";
import { Icon } from "@iconify/react";
import { poppinsBold } from "@/styles/fonts";

export default function HabilitiesComponent() {
  return (
    <div className={`${Container} ${HabilitiesStyle}`}>
      <div className={`${HabilitiesGridCards}`} id="Habilities">
        <div className={`${HabilitiesCard}`}>
          <Icon icon="ion:logo-html5" color="#fff" width={50} height={50} />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            HTML
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon icon="ion:logo-css3" color="#fff" width={50} height={50} />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            CSS
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon="ion:logo-javascript"
            color="white"
            width="50"
            height="50"
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            JAVASCRIPT
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon icon="mdi:git" color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            GIT
          </p>
        </div>

        <div className={`${HabilitiesCard}`}>
          <Icon icon="mdi:bootstrap" color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            BOOTSTRAP
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon icon="ion:logo-react" color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            REACT JS <br /> REACT NATIVE
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon="simple-icons:nodedotjs"
            color="white"
            width="50"
            height="50"
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            NODE JS
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon="simple-icons:nextdotjs"
            color="white"
            width="50"
            height="50"
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            NEXT JS
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon="game-icons:cupcake"
            color="white"
            width="50"
            height="50"
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            VANILLA <br /> EXTRACT
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon="file-icons:styledcomponents"
            color="white"
            width="50"
            height="50"
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            STYLED <br /> COMPONENT
          </p>
        </div>
      </div>
      <h4 className={`${HabilitiesTitle} ${poppinsBold.className}`}>
        ... FERRAMENTAS
      </h4>
      <div className={`${HabilitiesGridCards}`}>
        <div className={`${HabilitiesCard}`}>
          <Icon icon="ion:logo-windows" color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            WINDOWS
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon="simple-icons:postman"
            color="white"
            width="50"
            height="50"
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            POSTMAN
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon="simple-icons:insomnia"
            color="white"
            width="50"
            height="50"
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            INSOMNIA
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon="akar-icons:vscode-fill"
            color="white"
            width="50"
            height="50"
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            VS CODE
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon="ph:figma-logo-bold"
            color="white"
            width="50"
            height="50"
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            FIGMA
          </p>
        </div>
      </div>
    </div>
  );
}
