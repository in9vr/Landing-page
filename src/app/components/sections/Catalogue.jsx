import { cardItems } from '@/app/cardItems';
import ProductCard from '../blocks/ProductCard';
import { motion } from 'motion/react';

export default function Catalogue() {
  const variant = {
    visible: { opacity: 1, y: '0px' },
    hidden: { opacity: 0, y: '200px' },
  };

  return (
    <motion.section
      transition={{ duration: 0.8 }}
      variants={variant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 'some' }}
      id='products'
      className='w-full px-5 mx-auto max-w-screen-xl py-12 lg:py-32 overflow-hidden'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 lg:gap-10 w-full'>
        {cardItems.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </motion.section>
  );
}
