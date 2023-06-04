import React from "react";
import { poppinsMedium, poppinsRegular, poppinsSemiBold } from "@/styles/fonts";
import { Icon } from "@iconify/react";
import {
  MessageModal,
  MessageModalBox,
  MessageModalBox_body,
  MessageModalBox_close,
  MessageModalBox_message,
} from "./ModalContact.css";

interface ModalContactComponentProps {
  formMessage: string;
  setFormMessage: React.Dispatch<React.SetStateAction<string>>;
}

export default function ModalContactComponent({
  formMessage,
  setFormMessage,
}: ModalContactComponentProps) {
  return (
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
            className={`${MessageModalBox_message} ${poppinsSemiBold.className}`}
          >
            {formMessage}
          </h3>
          <p
            className={`${MessageModalBox_message} ${poppinsMedium.className}`}
          >
            Você poderá enviar outra mensagem daqui a 1 minutos
          </p>
        </div>
      </div>
    </div>
  );
}
