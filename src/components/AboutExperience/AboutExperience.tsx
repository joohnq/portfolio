import React, { useState, useRef } from "react";
import { Container } from "@/styles/styles.css";
import { poppinsBold } from "@/styles/fonts";

import {
  AboutExperience,
  AboutExperienceHeaders,
  AboutExperienceHeader,
  AboutExperienceSelected,
  AboutExperienceBody,
} from "./AboutExperience.css";
import AboutComponent from "../About/AboutComponent";
import ExperienceComponent from "../Experience/ExperienceComponent";

export default function AboutExperienceComponent() {
  const [aboutState, setAboutState] = useState<boolean>(true);
  const AboutExperienceBodyRef = useRef<HTMLDivElement>(null);

  const handleHeader = (e: any) => {
    if (!e.target.classList.contains("AboutExperienceSelected")) {
      setAboutState(!aboutState);
    } else {
      return "";
    }
  };

  return (
    <section className={`${AboutExperience}`} id="AboutExperience">
      <div className={`${AboutExperienceHeaders}`}>
        <button
          className={`${AboutExperienceHeader} ${
            aboutState
              ? `${AboutExperienceSelected} AboutExperienceSelected`
              : ""
          }  ${poppinsBold.className}`}
          onClick={(e) => handleHeader(e)}
        >
          {" "}
          SOBRE MIM{" "}
        </button>

        <button
          className={`${AboutExperienceHeader} ${
            !aboutState
              ? `${AboutExperienceSelected} AboutExperienceSelected`
              : ""
          }  ${poppinsBold.className}`}
          onClick={(e) => handleHeader(e)}
        >
          EXPERIÊNCIA
        </button>
      </div>

      <div className={AboutExperienceBody} ref={AboutExperienceBodyRef}>
        {aboutState ? AboutComponent() : ExperienceComponent()}
      </div>
    </section>
  );
}
