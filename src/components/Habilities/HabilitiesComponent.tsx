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
          <Icon icon="logos:android-icon" color="#fff" width={50} height={50} />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            Android
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon icon="logos:kotlin-icon" color="#fff" width={50} height={50} />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            Kotlin
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon="vscode-icons:file-type-xml"
            color="#fff"
            width={50}
            height={50}
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            XML
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon="vscode-icons:file-type-firebase"
            color="#fff"
            width={50}
            height={50}
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            FIREBASE
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon icon="logos:flutter" color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            FLUTTER
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon icon="logos:dart" color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            DART
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
          <Icon
            icon="devicon:androidstudio"
            color="white"
            width="50"
            height="50"
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            ANDROID STUDIO
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
