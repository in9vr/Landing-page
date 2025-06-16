import { Inter } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';
import Script from 'next/script';
import Metrika from './components/Metrika';

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
      <head>
        <link rel='icon' type='image/png' href='/public/favicon-96x96.png' sizes='96x96' />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <meta name='apple-mobile-web-app-title' content={'landing.in9var.ru'} />
        <link rel='manifest' href='/site.webmanifest' />
      </head>
      <body className={`${inter.variable}`}>
        <Script id='metrika-counter' strategy='afterInteractive'>
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              ym('102689614', "init", {
                    defer: true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
              });`}
        </Script>
        <Suspense>
          <Metrika />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
