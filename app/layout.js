import { Cormorant_Garamond, Space_Grotesk } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['600', '700']
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '700']
});

export const metadata = {
  title: 'WELCOME ITZ FIZZ',
  description: 'Premium scroll-linked hero animation built with Next.js, Tailwind CSS, and GSAP.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${spaceGrotesk.variable} bg-mist text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
