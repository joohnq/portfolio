import React, { useState } from "react";
import { Container, MainTitle } from "@/styles/styles.css";
import {
  ContactStyle,
  ContactLeft,
  ContactSocialMedias,
  ContactSocialMedia,
  ContactSocialMedia_Icon,
  ContactSocialMedia_Name,
  ContactNotebookIlustration,
  ContactRight,
  ContactRightField,
  ContactRight_Input,
  ContactRight_Label,
  ContactRight_TextArea,
  ContactRightButton,
} from "./Contact.css";
import { poppinsBold, poppinsMedium } from "@/styles/fonts";
import { Icon } from "@iconify/react";
import NotebookIlustration from "../../../public/notebook-ilustration.png";
import Image from "next/image";
import {
  socialMedia_github,
  socialMedia_instagram,
  socialMedia_linkedin,
} from "../socialMedias";

export default function ContactComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const requestBody: Record<string, string> = {};

    formData.forEach((value, key) => {
      requestBody[key] = value.toString();
    });

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(requestBody),
    })
      .then(() => alert("Thank you for your message!"))
      .catch((error) => {
        alert(
          "There was a problem sending your message. Please try again later."
        );
        console.log(error);
      });
  };

  return (
    <section className={`${ContactStyle} ${Container}`} id="Contact">
      <div className={`${ContactLeft}`}>
        <h2 className={`${MainTitle} ${poppinsBold.className} `}>Contato</h2>
        <div className={`${ContactSocialMedias}`}>
          <a
            className={`${ContactSocialMedia}`}
            href={socialMedia_instagram}
            target="__blank"
          >
            <Icon
              icon="ri:instagram-fill"
              className={`${ContactSocialMedia_Icon}`}
              color="#000"
              width={30}
              height={30}
            />
            <p
              className={`${ContactSocialMedia_Name} ${poppinsBold.className}`}
            >
              INSTAGRAM
            </p>
          </a>
          <a
            className={`${ContactSocialMedia}`}
            href={socialMedia_github}
            target="__blank"
          >
            <Icon
              icon="bi:github"
              className={`${ContactSocialMedia_Icon}`}
              color="#000"
              width={30}
              height={30}
            />
            <p
              className={`${ContactSocialMedia_Name} ${poppinsBold.className}`}
            >
              GITHUB
            </p>
          </a>
          <a
            className={`${ContactSocialMedia}`}
            href={socialMedia_linkedin}
            target="__blank"
          >
            <Icon
              icon="uil:linkedin"
              className={`${ContactSocialMedia_Icon}`}
              color="#000"
              width={30}
              height={30}
            />
            <p
              className={`${ContactSocialMedia_Name} ${poppinsBold.className}`}
            >
              LINKEDIN
            </p>
          </a>
        </div>
        <Image
          className={`${ContactNotebookIlustration}`}
          src={NotebookIlustration}
          width={300}
          height={300}
          alt="IMAGEM NOTEBOOK | ILUSTRATION"
        />
      </div>
      <form
        name="contact"
        className={`${ContactRight}`}
        method="POST"
        data-netlify={true}
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className={`${ContactRightField}`}>
          <label
            className={`${ContactRight_Label} ${poppinsBold.className}`}
            htmlFor="name"
          >
            Nome:{" "}
          </label>
          <input
            className={`${ContactRight_Input} ${poppinsMedium.className}`}
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className={`${ContactRightField}`}>
          <label
            className={`${ContactRight_Label} ${poppinsBold.className}`}
            htmlFor="email"
          >
            Email:{" "}
          </label>
          <input
            className={`${ContactRight_Input} ${poppinsMedium.className}`}
            type="text"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className={`${ContactRightField}`}>
          <label
            className={`${ContactRight_Label} ${poppinsBold.className}`}
            htmlFor="message"
          >
            Mensagem:{" "}
          </label>
          <textarea
            className={`${ContactRight_TextArea} ${poppinsMedium.className}`}
            name="message"
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <button
          className={`${ContactRightButton} ${poppinsBold.className}`}
          type="submit"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
