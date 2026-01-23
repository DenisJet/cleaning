import emailjs from "@emailjs/browser";
import styles from "./Form.module.css";
import { useRouter } from "next/navigation";
import { useContext, useRef } from "react";
import Button from "../Button/Button";
import { ModalContext } from "@/context/modal.context";
import axios from "axios";

export default function Form() {
  const { setIsOpen } = useContext(ModalContext);

  const formRef = useRef<HTMLFormElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const TOKEN = "7813934402:AAELQTXKWKj4EeniC8DhjIGenzshAF-p084";
  const CHAT_ID = "-1002400248770";
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  // const TOKEN = "6255542939:AAHERS28Vi18xML8uUg2v1GnJC9OKph6zwg";
  // const CHAT_ID = "-1001650046621";
  // const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const handleSubmit = async (evt: { preventDefault: () => void }) => {
    evt.preventDefault();

    const name = nameRef.current?.value || "";
    const phone = phoneRef.current?.value || "";

    let message = `<b>Заявка с сайта CleaningProfi</b>\n`;
    message += `<b>Имя: </b> ${name}\n`;
    message += `<b>Номер телефона: </b> ${phone}\n`;

    try {
      // Отправляем в Telegram
      await axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      });

      // Отправляем email через EmailJS
      const templateParams = {
        to_email: "zakgrom@mail.ru",
        title: "Заявка на обратный звонок с сайта CleaningProfi",
        name: name,
        message: `Номер телефона: ${phone}`,
        time: new Date().toLocaleString("ru-RU"),
      };

      await emailjs.send(
        "service_2sisrfi", // Замените на ваш Service ID
        "template_ma80al6", // Замените на ваш Template ID
        templateParams,
        "MvDLduu2PAL296BBF", // Замените на ваш Public Key
      );

      setIsOpen(false);
      formRef.current?.reset();
      router.push("/thanks");
    } catch (error) {
      console.error("Ошибка при отправке:", error);
      alert(
        "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.",
      );
    }
  };

  return (
    <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
      <input
        ref={nameRef}
        type="text"
        name="name"
        placeholder="Ваше имя"
        required
      />
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
