import React from "react";
import { Container } from "@/styles/styles.css";
import { Icon } from "@iconify/react";
import { poppinsBold } from "@/styles/fonts";
import {
  HabilitiesStyle,
  HabilitiesGridCards,
  HabilitiesCard,
  HabilitiesCard_Title,
  HabilitiesTitle,
} from "./Habilities.css";

export default function HabilitiesComponent() {
  return (
    <div className={`${Container} ${HabilitiesStyle}`} id="Habilities">
      <div className={`${HabilitiesGridCards}`}>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon="vscode-icons:file-type-html"
            color="#fff"
            width={50}
            height={50}
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            HTML
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon="vscode-icons:file-type-css"
            color="#fff"
            width={50}
            height={50}
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            CSS
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon icon="logos:javascript" color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            JAVASCRIPT
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon="vscode-icons:file-type-git"
            color="white"
            width="50"
            height="50"
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            GIT
          </p>
        </div>

        <div className={`${HabilitiesCard}`}>
          <Icon icon="devicon:bootstrap" color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            BOOTSTRAP
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon icon="devicon:react" color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            REACT JS <br /> REACT NATIVE
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon icon="logos:nodejs-icon" color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            NODE JS
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon icon="logos:nextjs-icon" color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            NEXT JS
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon="vscode-icons:file-type-vanilla-extract"
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
            icon="vscode-icons:file-type-styled"
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
          <Icon icon="devicon:windows8" color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            WINDOWS
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon="logos:postman-icon"
            color="white"
            width="50"
            height="50"
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            POSTMAN
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon icon="logos:insomnia" color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            INSOMNIA
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon icon="devicon:vscode" color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            VS CODE
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon icon="devicon:figma" color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            FIGMA
          </p>
        </div>
      </div>
    </div>
  );
}
