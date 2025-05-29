import Link from 'next/link';
import { IoMdMail } from 'react-icons/io';
import { BiLogoTelegram } from 'react-icons/bi';

export default function Footer() {
  return (
    <section className='flex w-full text-on-secondary bg-secondary'>
      <div className='flex flex-col lg:flex-row gap-10 w-full px-5 mx-auto max-w-screen-xl py-16 '>
        <div className='flex flex-col gap-5 lg:w-1/3'>
          <Link href='/' className='font-black text-4xl'>
            Логотип
          </Link>
          <span className='font-light text-sm text-on-secondary/40'>
            Copyright © {new Date().getFullYear()} Company name
          </span>

          <div className='flex gap-6 items-start'>
            <Link href={'mailto:mail@email.ru'}>
              <div className='flex bg-primary hover:brightness-110 rounded-md text-on-primary p-2 transition-all duration-200 ease-in-out'>
                <IoMdMail className='flex bg-primary rounded-md text-on-primary' size={18} />
              </div>
            </Link>

            <Link href={'tg://resolve?domain=@someTgAccountName'}>
              <div className='flex bg-primary hover:brightness-110 rounded-md text-on-primary p-2 transition-all duration-200 ease-in-out'>
                <BiLogoTelegram size={18} />
              </div>
            </Link>
          </div>
        </div>

        <div className='flex lg:justify-center lg:w-1/3'>
          <ul className='flex flex-col xl:flex-row gap-12 font-light'>
            <li>
              <Link href={'#products'}>Наша продукция</Link>
            </li>
            <li>
              <Link href={'#about'}>О нас</Link>
            </li>

            <li>
              <Link href={'#contacts'}>Контакты</Link>
            </li>
          </ul>
        </div>

        <div className='flex lg:w-1/3 lg:justify-end'>
          <div className='flex flex-col gap-10 lg:gap-5 lg:items-end'>
            <span className='font-bold text-2xl'>+7 999 888 88 88</span>
            <span className='font-light text-sm'>г. Москва, ул. Строителей, 99 Н</span>
            <span className='font-light text-sm'>Пн-Вс: с 9:00 до 20:00</span>
          </div>
        </div>
      </div>
    </section>
  );
}
