'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../elements/Logo';
import SocialIcons from './SocialIcons';
import { Squash as Hamburger } from 'hamburger-react';
import MobileMenu from './MobileMenu';
import { AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuToggleHandler = () => setIsOpen(!isOpen);
  const menuCloseHandler = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) document.documentElement.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);
  return (
    <>
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
        <div className='block lg:hidden z-50'>
          <Hamburger toggled={isOpen} size={36} toggle={menuToggleHandler} color='hsl(var(--color-background))' />
        </div>
      </header>

      <AnimatePresence>{isOpen && <MobileMenu close={menuCloseHandler} />}</AnimatePresence>
    </>
  );
}
