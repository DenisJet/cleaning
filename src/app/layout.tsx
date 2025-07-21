import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/layout/Header/Header";
import Footer from "@/layout/Footer/Footer";
import { ModalContextProvider } from "@/context/modal.context";
import MobileButton from "@/components/MobileButton/MobileButton";
import Modal from "@/components/Modal/Modal";
import YandexMetrikaContainer from "@/components/Metrika/YandexMetrikaContainer";

const montserrat = Montserrat({ subsets: ["latin"] });
// const analyticsEnabled = !!(process.env.NODE_ENV === "production");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <YandexMetrikaContainer enabled={true} />
        <ModalContextProvider>
          <Header />
          {children}
          <Footer />
          <MobileButton />
          <Modal />
        </ModalContextProvider>
      </body>
    </html>
  );
}
