import { IoMdMail } from 'react-icons/io';
import { BiLogoTelegram } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between h-20 mt-7'>
      <div className='flex grow flex-col lg:flex-row lg:justify-between lg:items-center gap-2'>
        <Link href='/' className='font-black text-4xl'>
          Логотип
        </Link>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 lg:gap-12'>
          <nav className='hidden lg:block'>
            <ul className='flex gap-12 font-light'>
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
          </nav>

          <span className='font-black'>+7 999 888 88 88</span>

          <div className='flex gap-6 items-start'>
            <div className='flex bg-primary rounded-md text-on-primary p-2'>
              <Link href={'mailto:mail@email.ru'}>
                <IoMdMail size={18} />
              </Link>
            </div>

            <div className='flex bg-primary rounded-md text-on-primary p-2'>
              <Link href={'tg://resolve?domain=@someTgAccountName'}>
                <BiLogoTelegram size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='block lg:hidden'>
        <GiHamburgerMenu size={40} />
      </div>
    </header>
  );
}
