import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/layout/Header/Header';
import Footer from '@/layout/Footer/Footer';
import { ModalContextProvider } from '@/context/modal.context';
import MobileButton from '@/components/MobileButton/MobileButton';
import Modal from '@/components/Modal/Modal';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={montserrat.className}>
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
