import Link from 'next/link';
import { motion } from 'motion/react';

export default function MobileMenu({ close }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 0.3 }}
      className='absolute inset-0 bg-secondary text-on-secondary z-40'
    >
      <div className='flex flex-col items-center gap-10 pt-40 pb-10 px-10 text-2xl font-bold uppercase'>
        <Link href={'#products'} onClick={() => close()}>
          Наша продукция
        </Link>

        <Link href={'#about'} onClick={() => close()}>
          О нас
        </Link>

        <Link href={'#contacts'} onClick={() => close()}>
          Контакты
        </Link>
      </div>
    </motion.div>
  );
}
