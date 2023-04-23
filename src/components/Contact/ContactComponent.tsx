import React, { useState, FormEvent, ChangeEvent, useRef } from "react";
import {
  Container,
  MainSubtitle,
  MainTitle,
  Disabled,
} from "@/styles/styles.css";
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
  MessageModal,
} from "./Contact.css";
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
  const btnSubmit = useRef<HTMLButtonElement>(null);
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

    btnSubmit.current?.setAttribute("disabled", `${true}`);
    btnSubmit.current?.classList.add(Disabled);

    setTimeout(() => {
      btnSubmit.current?.removeAttribute("disabled");
      btnSubmit.current?.classList.remove(Disabled);
    }, 60000);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => setFormState({ ...formState, [e.target.name]: e.target.value });

  return (
    <section className={`${ContactStyle} ${Container}`} id="Contact">
      <div className={`${ContactLeft}`}>
        <div>
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
        className={`${ContactRight}`}
        onSubmit={handleSubmit}
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />

        {formMessage ? (
          <div className={`${MessageModal}`}>
            <Icon
              icon="emojione:white-heavy-check-mark"
              width="30"
              height="30"
            />
            <h3 className={`${MainSubtitle} ${poppinsRegular.className}`}>
              {formMessage}
            </h3>
          </div>
        ) : (
          ""
        )}
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
            required
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
            required
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
            required
          ></textarea>
        </div>
        <button
          className={`${ContactRightButton} ${poppinsBold.className}`}
          type="submit"
          ref={btnSubmit}
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
