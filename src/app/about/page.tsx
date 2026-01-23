import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Компания КлинингГром",
  description:
    "О компании КлинингГром. Профессиональные клининговые услуги и услуги по химчистке мягкой мебели, ковров, штор, портьер.",
  openGraph: {
    url: "https://cleaning-proffi.ru/about/",
    title: "Компания КлинингГром",
    description:
      "КлинингГром. Профессиональные клининговые услуги по химчистке мягкой мебели, ковров, штор, портьер. Заказать химчистку мебели, ковров, штор, портьер. Химчистка мебели цена.",
    type: "website",
    images: "",
  },
  alternates: {
    canonical: "https://cleaning-proffi.ru/about/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function About() {
  return (
    <main className={styles.main}>
      <section className={styles.about}>
        <h1 className={styles.title}>
          <span>О компании</span> «КлинингПрофи»
        </h1>
        <h2>Тут будет видео</h2>
      </section>
    </main>
  );
}
