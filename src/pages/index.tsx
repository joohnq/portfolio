import React from "react";
import Head from "next/head";
import HeaderComponent from "@/components/Header/HeaderComponent";
import HomeComponent from "@/components/Home/HomeComponent";
import StacksComponent from "@/components/Stacks/StacksComponent";
import AboutExperience from "@/components/AboutExperience/AboutExperience";
import HabilitiesComponent from "@/components/Habilities/HabilitiesComponent";
import ProjectsComponent from "@/components/Projects/ProjectsComponent";
import ContactComponent from "@/components/Contact/ContactComponent";
import LightConicComponent from "@/components/Lights/LightsComponents";
import { BackgroundTransparent, Main } from "../styles/styles.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>João Henrique</title>
        <meta name="description" content="Full-Stack Júnior Dev - Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HeaderComponent />
      <div className={BackgroundTransparent}></div>
      {/* <LightConicComponent /> */}
      <main className={Main}>
        <HomeComponent />
        <StacksComponent />
        <AboutExperience />
        <HabilitiesComponent />
        <ProjectsComponent />
        <ContactComponent />
      </main>
    </>
  );
}
