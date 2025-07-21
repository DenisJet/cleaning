import axios from "axios";
import styles from "./Form.module.css";
import { useRouter } from "next/navigation";
import { useContext, useRef } from "react";
import Button from "../Button/Button";
import { ModalContext } from "@/context/modal.context";

export default function Form() {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  const formRef = useRef<HTMLFormElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // const TOKEN = '7813934402:AAELQTXKWKj4EeniC8DhjIGenzshAF-p084';
  // const CHAT_ID = '-1002400248770';
  // const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const TOKEN = "6255542939:AAHERS28Vi18xML8uUg2v1GnJC9OKph6zwg";
  const CHAT_ID = "-1001650046621";
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const handleSubmit = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    let message = `<b>Заявка с сайта CleaningProfi</b>\n`;
    message += `<b>Имя: </b> ${nameRef.current?.value}\n`;
    message += `<b>Номер телефона: </b> ${phoneRef.current?.value}\n`;

    axios
      .post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then((response) => {
        setIsOpen(false);
        formRef.current?.reset();
        router.push("/thanks");
      })
      .catch(() => {});
  };

  return (
    <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
      <input ref={nameRef} type="text" name="name" placeholder="Ваше имя" />
      <input
        ref={phoneRef}
        type="tel"
        name="number"
        placeholder="Ваш номер телефона"
        pattern="[0-9]{11}"
        required
      />
      <Button type="submit" className={styles.button}>
        Отправить
      </Button>
    </form>
  );
}
