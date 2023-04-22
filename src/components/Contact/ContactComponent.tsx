import React, { useState, FormEvent, ChangeEvent } from "react";
import { Container, MainSubtitle, MainTitle } from "@/styles/styles.css";
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
import { DisNone } from "@/styles/styles.css";
import { poppinsBold, poppinsMedium, poppinsRegular } from "@/styles/fonts";
import { Icon } from "@iconify/react";
import NotebookIlustration from "../../../public/notebook-ilustration.png";
import Image from "next/image";
import {
  socialMedia_github,
  socialMedia_instagram,
  socialMedia_linkedin,
} from "../socialMedias";

interface FormState {
  name: string;
  email: string;
  message: string;
}

function encode(data: any): string {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function ContactComponent() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [formMessage, setFormMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => {
        setFormMessage("Sucesso");
        setTimeout(() => {
          setFormMessage("");
        }, 3000);
        setFormState({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setFormMessage("Ocorreu um erro");
        console.error(error);
      });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => setFormState({ ...formState, [e.target.name]: e.target.value });

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
      <form className={`${ContactRight}`} onSubmit={handleSubmit} data-netlify-recaptcha="true">
        <input type="hidden" name="form-name" value="contact" />
        <h3 className={`${MainSubtitle} ${poppinsRegular.className}`}>
          {formMessage}
        </h3>
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
            value={formState.name}
            onChange={handleChange}
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
            value={formState.email}
            onChange={handleChange}
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
            value={formState.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div data-netlify-recaptcha="true"></div>
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
