import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['cyrillic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Строительство уютных загородных домов: комфорт гарантирован',
  description:
    'Строим уютные загородные дома с комфортом для жизни. От проекта до сдачи. Используем качественные материалы. Создаем пространство вашей мечты',
  keywords: 'строительство, дома, загородное, коттеджи, комфорт, проекты, под ключ, современные',
};

export default function RootLayout({ children }) {
  return (
    <html lang='ru' suppressHydrationWarning>
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  );
}
