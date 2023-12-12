import React from "react";
import Head from "next/head";
import HeaderComponent from "@/components/Header/HeaderComponent";
import HomeComponent from "@/components/Home/HomeComponent";
import AboutExperience from "@/components/AboutExperience/AboutExperience";
import HabilitiesComponent from "@/components/Habilities/HabilitiesComponent";
import ProjectsComponent from "@/components/Projects/ProjectsComponent";
import ContactComponent from "@/components/Contact/ContactComponent";
import FooterComponent from "@/components/Footer/FooterComponent";

export default function Home() {
  const [videoMoviesLoaded, setVideoMoviesLoaded] = React.useState(false);
  const [videoWhatsappLoaded, setVideoWhatsappLoaded] = React.useState(false);
  return (
    <>
      <Head>
        <title>João Henrique</title>
        <meta name="description" content="Full-Stack Júnior Dev - Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HeaderComponent />
      <main>
        <HomeComponent
          videoMoviesLoaded={videoMoviesLoaded}
          videoWhatsappLoaded={videoWhatsappLoaded}
        />
        <AboutExperience />
        <HabilitiesComponent />
        <ProjectsComponent
          setVideoMoviesLoaded={setVideoMoviesLoaded}
          setVideoWhatsappLoaded={setVideoWhatsappLoaded}
        />
        <ContactComponent />
        <FooterComponent />
      </main>
    </>
  );
}
