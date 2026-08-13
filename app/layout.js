import { Lora, Work_Sans, Courier_Prime } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-work-sans',
});

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-courier-prime',
});

export const metadata = {
  title: 'Tatiana Uklist — Portfolio & Blog',
  description:
    'Tatiana Uklist — I build the rooms where security people actually talk to each other.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lora.variable} ${workSans.variable} ${courierPrime.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper font-sans text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
