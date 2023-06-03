import React, { useState, useRef, ReactNode } from "react";
import { Container } from "@/styles/styles.css";
import { poppinsBold } from "../../styles/fonts";

import {
  AboutExperience,
  AboutExperienceHeaders,
  AboutExperienceHeader,
  AboutExperienceSelected,
} from "./AboutExperience.css";
import AboutComponent from "./About/AboutComponent";
import ExperienceComponent from "./Experience/ExperienceComponent";

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
    <div className={Container} id="AboutExperience">
      <section className={`${AboutExperience}`}>
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

        <div className="HabilitiesBody" ref={AboutExperienceBodyRef}>
          {aboutState ? AboutComponent() : ExperienceComponent()}
        </div>
      </section>
    </div>
  );
}
