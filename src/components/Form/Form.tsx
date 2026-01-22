import emailjs from "@emailjs/browser";
import styles from "./Form.module.css";
import { useRouter } from "next/navigation";
import { useContext, useRef } from "react";
import Button from "../Button/Button";
import { ModalContext } from "@/context/modal.context";

export default function Form() {
  const { setIsOpen } = useContext(ModalContext);

  const formRef = useRef<HTMLFormElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = async (evt: { preventDefault: () => void }) => {
    evt.preventDefault();

    const name = nameRef.current?.value || "";
    const phone = phoneRef.current?.value || "";

    try {
      // Отправляем email через EmailJS
      const templateParams = {
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
