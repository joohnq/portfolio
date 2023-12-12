import React from "react";
import Head from "next/head";
import HeaderComponent from "@/components/Header/HeaderComponent";
import HomeComponent from "@/components/Home/HomeComponent";
import AboutExperience from "@/components/AboutExperience/AboutExperience";
import HabilitiesComponent from "@/components/Habilities/HabilitiesComponent";
import ProjectsComponent from "@/components/Projects/ProjectsComponent";
import ContactComponent from "@/components/Contact/ContactComponent";
import FooterComponent from "@/components/Footer/FooterComponent";
import "@/i18n/index";

export default function Index() {
  return (
    <>
      <Head>
        <title>João Henrique</title>
        <meta name="description" content="Full-Stack Júnior Dev - Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HeaderComponent />
      <main>
        <HomeComponent />
        <AboutExperience />
        <HabilitiesComponent />
        <ProjectsComponent />
        <ContactComponent />
        <FooterComponent />
      </main>
    </>
  );
}
