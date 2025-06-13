import aboutImage from '@/app/images/about.jpg';
import ExportedImage from 'next-image-export-optimizer';
import { motion } from 'motion/react';

export default function About() {
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
      className='flex flex-col lg:flex-row gap-10 lg:gap-20 w-full px-5 mx-auto max-w-screen-xl py-12 lg:py-32 overflow-hidden'
    >
      <div className='flex-1 flex flex-col'>
        <h2 className='text-2xl lg:text-5xl font-black mb-8'>Дома для сурового климата</h2>

        <p className='font-light mb-4'>
          Строительство в суровых условиях требует особого профессионализма. Наша компания специализируется на
          возведении домов в регионах с экстремальными погодными условиями. Мы учитываем все климатические особенности:
          морозы, ветер и перепады температур, применяя современные технологии теплоизоляции и гидроизоляции.
        </p>

        <p className='font-light'>
          Наши решения включают многослойное утепление, энергоэффективные стеклопакеты и специальные ветрозащитные
          мембраны. Особое внимание уделяется фундаментам со свайными конструкциями и утепленными ростверками. Все дома
          оснащены системами энергосбережения и рекуперации тепла.
        </p>
      </div>

      <div className='flex-none lg:h-80 relative aspect-[4/3]'>
        <ExportedImage
          alt='about image'
          src={aboutImage.src}
          fill
          loading='lazy'
          placeholder='blur'
          className='object-cover'
        />
      </div>
    </motion.section>
  );
}
