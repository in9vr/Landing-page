import image01 from '@/app/images/gallery/gallery-01.jpg';
import image02 from '@/app/images/gallery/gallery-02.jpg';
import image03 from '@/app/images/gallery/gallery-03.jpg';
import image04 from '@/app/images/gallery/gallery-04.jpg';
import ExportedImage from 'next-image-export-optimizer';
import { motion } from 'motion/react';

export default function Gallery() {
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
      className='flex flex-col gap-10 w-full px-5 mx-auto max-w-screen-xl py-12 lg:py-32 overflow-hidden'
    >
      <h2 className='text-2xl lg:text-5xl font-black lg:text-center'>Галерея наших проектов</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        <div className='relative aspect-square'>
          <ExportedImage
            alt='gallery image'
            src={image01.src}
            fill
            loading='lazy'
            placeholder='blur'
            className='object-cover'
          />
        </div>

        <div className='relative aspect-square'>
          <ExportedImage
            alt='gallery image'
            src={image02.src}
            fill
            loading='lazy'
            placeholder='blur'
            className='object-cover'
          />
        </div>

        <div className='relative aspect-square'>
          <ExportedImage
            alt='gallery image'
            src={image03.src}
            fill
            loading='lazy'
            placeholder='blur'
            className='object-cover'
          />
        </div>

        <div className='relative aspect-square'>
          <ExportedImage
            alt='gallery image'
            src={image04.src}
            fill
            loading='lazy'
            placeholder='blur'
            className='object-cover'
          />
        </div>
      </div>
    </motion.section>
  );
}
