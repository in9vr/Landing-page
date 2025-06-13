import Header from '../blocks/Header';
import heroImage from '@/app/images/hero.jpg';
import ExportedImage from 'next-image-export-optimizer';
import Button from '../elements/Button';

export default function Hero() {
  return (
    <section className='flex min-h-screen relative w-full z-0 text-neutral-50 overflow-hidden'>
      <div className='absolute inset-0'>
        <ExportedImage
          alt='background image'
          src={heroImage.src}
          fill
          placeholder='blur'
          className='object-center object-cover'
        />
      </div>

      <div className='absolute inset-0 bg-neutral-900 opacity-60 z-10' />

      <div className='flex flex-col w-full px-5 mx-auto max-w-screen-xl z-20'>
        <Header />

        <div className='flex my-auto flex-col lg:text-center lg:items-center w-full mx-auto'>
          <h1 className='uppercase text-2xl lg:text-6xl font-black mb-10'>
            Строительство комфортных
            <br />
            загородных домов
          </h1>

          <span className='text-2xl font-thin mb-10 lg:mb-20'>
            Строительство деревянных домов по уникальным проектам
          </span>

          <Button name={'Перейти в каталог'} href={'#products'} />
        </div>
      </div>
    </section>
  );
}
