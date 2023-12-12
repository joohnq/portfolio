import React, {
  useState,
  FormEvent,
  ChangeEvent,
  useRef,
  useEffect,
} from "react";
import { Container, DisabledButton, BigTitle } from "@/styles/styles.css";
import { poppinsBold, poppinsMedium, poppinsSemiBold } from "@/styles/fonts";
import ModalContactComponent from "../ModalContact/ModalContactComponent";
import {
  ContactStyle,
  ContactStyle_Desc,
  ContactForm,
  ContactFormField,
  ContactForm_Label,
  ContactForm_Input,
  ContactForm_TextArea,
  ContactFormBoxButton,
  ContactFormButton,
  ContactFormButton_Text,
  ContactFormButton_Icon,
} from "./Contact.css";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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
        }, 8000);
        setFormState({ name: "", email: "", message: "" });

        btnSubmit.current?.setAttribute("disabled", `${true}`);
        btnSubmit.current?.classList.add(`${DisabledButton}`);

        setTimeout(() => {
          btnSubmit.current?.removeAttribute("disabled");
          btnSubmit.current?.classList.remove(`${DisabledButton}`);
        }, 60000);
      })
      .catch((error) => alert(error));
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => setFormState({ ...formState, [e.target.name]: e.target.value });

  useEffect(() => {}, [formMessage]);

  return (
    <section className={`${ContactStyle} ${Container}`} id="Contact">
      <h2 className={`${BigTitle} ${poppinsBold.className} `}>
        {t("contato")}
      </h2>
      <p className={`${ContactStyle_Desc} ${poppinsMedium.className} `}>
        {t("contatoAbove")}
      </p>
      <form
        className={`${ContactForm}`}
        onSubmit={handleSubmit}
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />

        {formMessage != "" && (
          <ModalContactComponent
            formMessage={formMessage}
            setFormMessage={setFormMessage}
          />
        )}
        <div className={`${ContactFormField}`}>
          <label
            className={`${ContactForm_Label} ${poppinsSemiBold.className}`}
            htmlFor="name"
          >
            {t("nome")}
          </label>
          <input
            className={`${ContactForm_Input} ${poppinsMedium.className}`}
            type="text"
            name="name"
            id="name"
            value={formState.name}
            onChange={handleChange}
            placeholder={t("digiteSeuNome")}
            required
          />
        </div>
        <div className={`${ContactFormField}`}>
          <label
            className={`${ContactForm_Label} ${poppinsSemiBold.className}`}
            htmlFor="email"
          >
            {t("email")}
          </label>
          <input
            className={`${ContactForm_Input} ${poppinsMedium.className}`}
            type="email"
            name="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
            placeholder={t("digiteSeuEmail")}
            required
          />
        </div>
        <div className={`${ContactFormField}`}>
          <label
            className={`${ContactForm_Label} ${poppinsSemiBold.className}`}
            htmlFor="message"
          >
            {t("mensagem")}
          </label>
          <textarea
            className={`${ContactForm_TextArea} ${poppinsMedium.className}`}
            name="message"
            id="message"
            value={formState.message}
            onChange={handleChange}
            placeholder={t("digiteSuaMensagem")}
            required
          ></textarea>
        </div>

        <div className={`${ContactFormBoxButton}`}>
          <button
            className={`${ContactFormButton} ${poppinsSemiBold.className}`}
            type="submit"
            ref={btnSubmit}
          >
            <div className={`${ContactFormButton_Icon}`}>
              <Icon
                icon="solar:arrow-right-broken"
                color="#fff"
                width={40}
                height={40}
              />
            </div>
            <p
              className={`${ContactFormButton_Text} ${poppinsSemiBold.className}`}
            >
              {t("enviar")}
            </p>
          </button>
        </div>
      </form>
    </section>
  );
}
