import React, { MouseEvent, useState } from "react";
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
  const [html, setHtml] = useState("ion:logo-html5");
  const [css, setCss] = useState("ion:logo-css3");
  const [javascript, setJavascript] = useState("devicon-plain:javascript");
  const [git, setGit] = useState("mdi:git");
  const [bootstrap, setBootstrap] = useState("simple-icons:bootstrap");
  const [react, setReact] = useState("ion:logo-react");
  const [nodejs, setNodejs] = useState("simple-icons:nodedotjs");
  const [nextjs, setNextjs] = useState("simple-icons:nextdotjs");
  const [vanillaExtract, setVanillaExtract] = useState("game-icons:cupcake");
  const [styledComponents, setStyledComponents] = useState(
    "file-icons:styledcomponents"
  );
  const [windows, setWindows] = useState("ion:logo-windows");
  const [postman, setPostman] = useState("simple-icons:postman");
  const [insomnia, setInsomnia] = useState("simple-icons:insomnia");
  const [vscode, setVscode] = useState("akar-icons:vscode-fill");
  const [figma, setFigma] = useState("ion:logo-figma");


  function changeIcon(icon: string, type: string): void {
    switch (type) {
      case "html": {
        setHtml(icon);
        break;
      }
      case "css": {
        setCss(icon);
        break;
      }
      case "javascript": {
        setJavascript(icon);
        break;
      }
      case "git": {
        setGit(icon);
        break;
      }
      case "bootstrap": {
        setBootstrap(icon);
        break;
      }
      case "react": {
        setReact(icon);
        break;
      }
      case "nodejs": {
        setNodejs(icon);
        break;
      }
      case "nextjs": {
        setNextjs(icon);
        break;
      }
      case "vanillaextract": {
        setVanillaExtract(icon);
        break;
      }
      case "styledcomponents": {
        setStyledComponents(icon);
        break;
      }
      case "windows": {
        setWindows(icon);
        break;
      }
      case "postman": {
        setPostman(icon);
        break;
      }
      case "insomnia": {
        setInsomnia(icon);
        break;
      }
      case "vscode": {
        setVscode(icon);
        break;
      }
      case "figma": {
        setFigma(icon);
        break;
      }
    }
  }
  return (
    <div className={`${Container} ${HabilitiesStyle}`}>
      <div className={`${HabilitiesGridCards}`} id="Habilities">
        <div
          className={`${HabilitiesCard}`}
          onMouseOver={() => changeIcon("vscode-icons:file-type-html", "html")}
          onMouseLeave={() => changeIcon("ion:logo-html5", "html")}
        >
          <Icon icon={html} color="#fff" width={50} height={50} />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            HTML
          </p>
        </div>
        <div
          className={`${HabilitiesCard}`}
          onMouseOver={() => changeIcon("vscode-icons:file-type-css", "css")}
          onMouseLeave={() => changeIcon("ion:logo-css3", "css")}
        >
          <Icon icon={css} color="#fff" width={50} height={50} />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            CSS
          </p>
        </div>
        <div
          className={`${HabilitiesCard}`}
          onMouseOver={() => changeIcon("logos:javascript", "javascript")}
          onMouseLeave={() =>
            changeIcon("devicon-plain:javascript", "javascript")
          }
        >
          <Icon icon={javascript} color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            JAVASCRIPT
          </p>
        </div>
        <div
          className={`${HabilitiesCard}`}
          onMouseOver={() => changeIcon("vscode-icons:file-type-git", "git")}
          onMouseLeave={() => changeIcon("mdi:git", "git")}
        >
          <Icon icon={git} color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            GIT
          </p>
        </div>

        <div
          className={`${HabilitiesCard}`}
          onMouseOver={() => changeIcon("devicon:bootstrap", "bootstrap")}
          onMouseLeave={() => changeIcon("simple-icons:bootstrap", "bootstrap")}
        >
          <Icon icon={bootstrap} color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            BOOTSTRAP
          </p>
        </div>
        <div
          className={`${HabilitiesCard}`}
          onMouseOver={() => changeIcon("devicon:react", "react")}
          onMouseLeave={() => changeIcon("ion:logo-react", "react")}
        >
          <Icon icon={react} color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            REACT JS <br /> REACT NATIVE
          </p>
        </div>
        <div
          className={`${HabilitiesCard}`}
          onMouseOver={() => changeIcon("logos:nodejs-icon", "nodejs")}
          onMouseLeave={() => changeIcon("simple-icons:nodedotjs", "nodejs")}
        >
          <Icon icon={nodejs} color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            NODE JS
          </p>
        </div>
        <div
          className={`${HabilitiesCard}`}
          onMouseOver={() => changeIcon("logos:nextjs-icon", "nextjs")}
          onMouseLeave={() => changeIcon("simple-icons:nextdotjs", "nextjs")}
        >
          <Icon icon={nextjs} color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            NEXT JS
          </p>
        </div>
        <div
          className={`${HabilitiesCard}`}
          onMouseOver={() =>
            changeIcon(
              "vscode-icons:file-type-vanilla-extract",
              "vanillaextract"
            )
          }
          onMouseLeave={() =>
            changeIcon("game-icons:cupcake", "vanillaextract")
          }
        >
          <Icon icon={vanillaExtract} color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            VANILLA <br /> EXTRACT
          </p>
        </div>
        <div
          className={`${HabilitiesCard}`}
          onMouseOver={() =>
            changeIcon("vscode-icons:file-type-styled", "styledcomponents")
          }
          onMouseLeave={() =>
            changeIcon("file-icons:styledcomponents", "styledcomponents")
          }
        >
          <Icon icon={styledComponents} color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            STYLED <br /> COMPONENT
          </p>
        </div>
      </div>
      <h4 className={`${HabilitiesTitle} ${poppinsBold.className}`}>
        ... FERRAMENTAS
      </h4>
      <div className={`${HabilitiesGridCards}`}>
        <div
          className={`${HabilitiesCard}`}
          onMouseOver={() => changeIcon("devicon:windows8", "windows")}
          onMouseLeave={() => changeIcon("ion:logo-windows", "windows")}
        >
          <Icon icon={windows} color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            WINDOWS
          </p>
        </div>
        <div
          className={`${HabilitiesCard}`}
          onMouseOver={() => changeIcon("logos:postman-icon", "postman")}
          onMouseLeave={() => changeIcon("simple-icons:postman", "postman")}
        >
          <Icon icon={postman} color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            POSTMAN
          </p>
        </div>
        <div
          className={`${HabilitiesCard}`}
          onMouseOver={() => changeIcon("logos:insomnia", "insomnia")}
          onMouseLeave={() => changeIcon("simple-icons:insomnia", "insomnia")}
        >
          <Icon icon={insomnia} color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            INSOMNIA
          </p>
        </div>
        <div
          className={`${HabilitiesCard}`}
          onMouseOver={() => changeIcon("devicon:vscode", "vscode")}
          onMouseLeave={() => changeIcon("akar-icons:vscode-fill", "vscode")}
        >
          <Icon icon={vscode} color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            VS CODE
          </p>
        </div>
        <div
          className={`${HabilitiesCard}`}
          onMouseOver={() => changeIcon("devicon:figma", "figma")}
          onMouseLeave={() => changeIcon("ion:logo-figma", "figma")}
        >
          <Icon icon={figma} color="white" width="50" height="50" />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            FIGMA
          </p>
        </div>
      </div>
    </div>
  );
}
