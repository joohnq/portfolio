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
import axios from "axios";

interface Data {
  name: string;
  email: string;
  message: string;
}

export default function ContactComponent() {
  const [formContact, setFormContact] = useState<Data>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormContact((oldData) => ({ ...oldData, [name]: value }));
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post('https://joaohenrique.vercel.app/api/contact', formContact).then(() => {
      return console.log('Sucess', formContact)
    }).catch(error => {
      return console.log('Error', error)
    })
  }

  return (
    <section className={`${ContactStyle} ${Container}`} id="Contact">
      <div className={`${ContactLeft}`}>
        <h2 className={`${MainTitle} ${poppinsBold.className} `}>Contato</h2>
        <div className={`${ContactSocialMedias}`}>
          <a
            className={`${ContactSocialMedia}`}
            href="https://www.instagram.com/jhenrique.dev/"
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
            href="https://github.com/joohnq"
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
            href="https://www.linkedin.com/in/joao-henrique-de-souza-silva-b43921196/"
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
      <form className={`${ContactRight}`} onSubmit={submitForm}>
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
            value={formContact.name}
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
            value={formContact.email}
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
            value={formContact.message}
            onChange={handleChange}
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
