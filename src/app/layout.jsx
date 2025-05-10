import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['cyrillic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Landing page',
  description: 'Our description',
};

export default function RootLayout({ children }) {
  return (
    <html lang='ru' suppressHydrationWarning>
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  );
}
