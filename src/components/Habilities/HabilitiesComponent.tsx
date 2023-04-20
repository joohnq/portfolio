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
  const [icons, setIcons] = useState({
    html: "ion:logo-html5",
    css: "ion:logo-css3",
    javascript: "devicon-plain:javascript",
    git: "mdi:git",
    bootstrap: "simple-icons:bootstrap",
    react: "ion:logo-react",
    nodejs: "simple-icons:nodedotjs",
    nextjs: "simple-icons:nextdotjs",
    vanillaExtract: "game-icons:cupcake",
    styledComponents: "file-icons:styledcomponents",
    windows: "ion:logo-windows",
    postman: "simple-icons:postman",
    insomnia: "simple-icons:insomnia",
    vscode: "akar-icons:vscode-fill",
    figma: "ion:logo-figma",
  });

  function changeIcon(icon: string, type: string): void {
    setIcons({
      ...icons,
      [type]: icon,
    });
  }
  return (
    <div className={`${Container} ${HabilitiesStyle}`}>
      <div className={`${HabilitiesGridCards}`} id="Habilities">
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon={icons.html}
            color="#fff"
            width={50}
            height={50}
            onMouseOver={() =>
              changeIcon("vscode-icons:file-type-html", "html")
            }
            onMouseOut={() => changeIcon("ion:logo-html5", "html")}
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            HTML
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon={icons.css}
            color="#fff"
            width={50}
            height={50}
            onMouseOver={() => changeIcon("vscode-icons:file-type-css", "css")}
            onMouseOut={() => changeIcon("ion:logo-css3", "css")}
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            CSS
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon={icons.javascript}
            color="white"
            width="50"
            height="50"
            onMouseOver={() => changeIcon("logos:javascript", "javascript")}
            onMouseOut={() =>
              changeIcon("devicon-plain:javascript", "javascript")
            }
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            JAVASCRIPT
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon={icons.git}
            color="white"
            width="50"
            height="50"
            onMouseOver={() => changeIcon("vscode-icons:file-type-git", "git")}
            onMouseOut={() => changeIcon("mdi:git", "git")}
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            GIT
          </p>
        </div>

        <div className={`${HabilitiesCard}`}>
          <Icon
            icon={icons.bootstrap}
            color="white"
            width="50"
            height="50"
            onMouseOver={() => changeIcon("devicon:bootstrap", "bootstrap")}
            onMouseOut={() =>
              changeIcon("simple-icons:bootstrap", "bootstrap")
            }
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            BOOTSTRAP
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon={icons.react}
            color="white"
            width="50"
            height="50"
            onMouseOver={() => changeIcon("devicon:react", "react")}
            onMouseOut={() => changeIcon("ion:logo-react", "react")}
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            REACT JS <br /> REACT NATIVE
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon={icons.nodejs}
            color="white"
            width="50"
            height="50"
            onMouseOver={() => changeIcon("logos:nodejs-icon", "nodejs")}
            onMouseOut={() => changeIcon("simple-icons:nodedotjs", "nodejs")}
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            NODE JS
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon={icons.nextjs}
            color="white"
            width="50"
            height="50"
            onMouseOver={() => changeIcon("logos:nextjs-icon", "nextjs")}
            onMouseOut={() => changeIcon("simple-icons:nextdotjs", "nextjs")}
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            NEXT JS
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon={icons.vanillaExtract}
            color="white"
            width="50"
            height="50"
            onMouseOver={() =>
              changeIcon(
                "vscode-icons:file-type-vanilla-extract",
                "vanillaExtract"
              )
            }
            onMouseOut={() =>
              changeIcon("game-icons:cupcake", "vanillaExtract")
            }
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            VANILLA <br /> EXTRACT
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon={icons.styledComponents}
            color="white"
            width="50"
            height="50"
            onMouseOver={() =>
              changeIcon("vscode-icons:file-type-styled", "styledComponents")
            }
            onMouseOut={() =>
              changeIcon("file-icons:styledcomponents", "styledComponents")
            }
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
          <Icon
            icon={icons.windows}
            color="white"
            width="50"
            height="50"
            onMouseOver={() => changeIcon("devicon:windows8", "windows")}
            onMouseOut={() => changeIcon("ion:logo-windows", "windows")}
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            WINDOWS
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon={icons.postman}
            color="white"
            width="50"
            height="50"
            onMouseOver={() => changeIcon("logos:postman-icon", "postman")}
            onMouseOut={() => changeIcon("simple-icons:postman", "postman")}
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            POSTMAN
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon={icons.insomnia}
            color="white"
            width="50"
            height="50"
            onMouseOver={() => changeIcon("logos:insomnia", "insomnia")}
            onMouseOut={() => changeIcon("simple-icons:insomnia", "insomnia")}
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            INSOMNIA
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon={icons.vscode}
            color="white"
            width="50"
            height="50"
            onMouseOver={() => changeIcon("devicon:vscode", "vscode")}
            onMouseOut={() => changeIcon("akar-icons:vscode-fill", "vscode")}
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            VS CODE
          </p>
        </div>
        <div className={`${HabilitiesCard}`}>
          <Icon
            icon={icons.figma}
            color="white"
            width="50"
            height="50"
            onMouseOver={() => changeIcon("devicon:figma", "figma")}
            onMouseOut={() => changeIcon("ion:logo-figma", "figma")}
          />
          <p className={`${HabilitiesCard_Title} ${poppinsBold.className}`}>
            FIGMA
          </p>
        </div>
      </div>
    </div>
  );
}
