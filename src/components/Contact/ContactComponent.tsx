import React, { useState, FormEvent, ChangeEvent, useRef } from "react";
import { Container, Disabled, BigTitle } from "@/styles/styles.css";
import {
  poppinsBold,
  poppinsMedium,
  poppinsRegular,
  poppinsSemiBold,
} from "@/styles/fonts";
import { Icon } from "@iconify/react";
import {
  ContactStyle,
  ContactLeft,
  ContactSocialMedias,
  ContactSocialMedia,
  ContactSocialMedia_Icon,
  ContactSocialMedia_Name,
  ContactRight,
  ContactRightField,
  ContactRight_Input,
  ContactRight_Label,
  ContactRight_TextArea,
  ContactRightButton,
  MessageModal,
  MessageModalBox,
  MessageModalBox_close,
  MessageModalBox_body,
  MessageModalBox_message,
} from "./Contact.css";
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
        setFormMessage("Sua mensagem foi enviada!");
        setTimeout(() => {
          setFormMessage("");
        }, 4000);
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
          <h2 className={`${BigTitle} ${poppinsBold.className} `}>Contato</h2>
          <div className={`${ContactSocialMedias}`}>
            <a
              className={`${ContactSocialMedia}`}
              href="https://www.instagram.com/jhenrique.dev/"
              target="__blank"
              aria-label="Link para o meu Instagram"
            >
              <Icon
                icon="ri:instagram-fill"
                className={`${ContactSocialMedia_Icon}`}
                color="#000"
                width={30}
                height={30}
              />
              <p
                className={`${ContactSocialMedia_Name} ${poppinsSemiBold.className}`}
              >
                INSTAGRAM
              </p>
            </a>
            <a
              className={`${ContactSocialMedia}`}
              href="https://github.com/joohnq"
              target="__blank"
              aria-label="Link para o meu Github"
            >
              <Icon
                icon="bi:github"
                className={`${ContactSocialMedia_Icon}`}
                color="#000"
                width={30}
                height={30}
              />
              <p
                className={`${ContactSocialMedia_Name} ${poppinsSemiBold.className}`}
              >
                GITHUB
              </p>
            </a>
            <a
              className={`${ContactSocialMedia}`}
              href="https://www.linkedin.com/in/joao-henrique-de-souza-silva-b43921196/"
              target="__blank"
              aria-label="Link para o meu Linkedin"
            >
              <Icon
                icon="uil:linkedin"
                className={`${ContactSocialMedia_Icon}`}
                color="#000"
                width={30}
                height={30}
              />
              <p
                className={`${ContactSocialMedia_Name} ${poppinsSemiBold.className}`}
              >
                LINKEDIN
              </p>
            </a>
          </div>
        </div>
      </div>
      <form
        className={`${ContactRight}`}
        onSubmit={handleSubmit}
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />

        {formMessage ? (
          <div className={`${MessageModal}`}>
            <div className={`${MessageModalBox}`}>
              <div className={`${MessageModalBox_close}`}>
                <Icon
                  icon="ph:x"
                  width="30"
                  height="30"
                  color="#01040D"
                  onClick={() => setFormMessage("")}
                />
              </div>
              <div className={`${MessageModalBox_body}`}>
                <Icon
                  icon="emojione:white-heavy-check-mark"
                  width="100"
                  height="100"
                />
                <h3
                  className={`${MessageModalBox_message} ${poppinsRegular.className}`}
                >
                  {formMessage}
                </h3>
                <p
                  className={`${MessageModalBox_message} ${poppinsRegular.className}`}
                >
                  Você poderá enviar outra mensagem daqui a 3 minutos
                </p>
              </div>
            </div>
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
            id="email"
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
          ENVIAR
        </button>
      </form>
    </section>
  );
}
