import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import Logo from '../elements/Logo';
import SocialIcons from './SocialIcons';

export default function Header() {
  return (
    <header className='flex justify-between lg:h-20 mt-7'>
      <div className='flex grow flex-col lg:flex-row lg:justify-between lg:items-center gap-2'>
        <Logo href={'/'} />
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

          <SocialIcons />
        </div>
      </div>
      <div className='block lg:hidden'>
        <GiHamburgerMenu size={40} />
      </div>
    </header>
  );
}
