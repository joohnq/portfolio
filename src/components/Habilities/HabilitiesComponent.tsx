import { Container } from "@/styles/styles.css";
import {
  HabilitiesStyle,
  HabilitiesHeaders,
  HabilitiesHeader,
  HeaderSelected,
  HabilitiesBody,
  HabilitiesBody_About,
  HabilitiesBody_Experience,
} from "./Habilities.css";
import React, { useState, ReactElement, useRef, useLayoutEffect } from "react";
import ReactDOMServer from "react-dom/server";

import { poppinsBold } from "../../styles/fonts";

export default function HabilitiesComponent() {
  const [aboutState, setAboutState] = useState<boolean>(true);
  const HabilitiesBodyRef = useRef<HTMLDivElement>(null);

  function handleHeader(e: any) {
    if (!e.target.classList.contains("HeaderSelected")) {
      setAboutState(!aboutState);
    } else {
      return "";
    }
  }

  const HabilitiesBodyAbout = (): ReactElement => {
    return (
      <div className={`${HabilitiesBody_About}`}>
        <h1 className={`${poppinsBold.className}`}>About</h1>
      </div>
    );
  };

  const HabilitiesBodyExperience = (): ReactElement => {
    return (
      <div className={`${HabilitiesBody_Experience}`}>
        <h1 className={`${poppinsBold.className}`}>About</h1>
      </div>
    );
  };

  useLayoutEffect(() => {
    if (aboutState) {
      const element = HabilitiesBodyAbout();
      const html = ReactDOMServer.renderToStaticMarkup(element);
      HabilitiesBodyRef.current!.innerHTML = html;
    } else {
      const element = HabilitiesBodyExperience();
      const html = ReactDOMServer.renderToStaticMarkup(element);
      HabilitiesBodyRef.current!.innerHTML = html;
    }
  }, [aboutState]);

  return (
    <div className={Container}>
      <section className={`${HabilitiesStyle}`}>
        <div className={`${HabilitiesHeaders}`}>
          <button
            className={`${HabilitiesHeader} ${
              aboutState ? `${HeaderSelected} HeaderSelected` : ""
            }  ${poppinsBold.className}`}
            onClick={(e) => handleHeader(e)}
          >
            {" "}
            SOBRE MIM{" "}
          </button>

          <button
            className={`${HabilitiesHeader} ${
              !aboutState ? `${HeaderSelected} HeaderSelected` : ""
            }  ${poppinsBold.className}`}
            onClick={(e) => handleHeader(e)}
          >
            EXPERIÊNCIA
          </button>
        </div>

        <div
          className={`${HabilitiesBody} HabilitiesBody`}
          ref={HabilitiesBodyRef}
        ></div>
      </section>
    </div>
  );
}
