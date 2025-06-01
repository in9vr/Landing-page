import { useEffect, useState } from 'react';

export default function Map() {
  const [mapIsActive, setMapIsActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id='contacts' className='flex w-full text-on-primary bg-primary'>
      <div className='flex flex-col gap-10 items-center w-full px-5 mx-auto max-w-screen-xl py-12 lg:py-32'>
        <div className='flex w-full flex-col gap-10 lg:items-center lg:flex-row lg:justify-between lg:max-w-5xl'>
          <h2 className='text-2xl lg:text-5xl font-black'>Как нас найти</h2>

          <button
            onClick={() => setMapIsActive((prevState) => !prevState)}
            className={`w-max uppercase font-light rounded-lg hover:brightness-110 border border-on-primary px-5 py-4 transition-all duration-200 ease-in-out ${
              mapIsActive ? 'bg-secondary' : 'bg-primary'
            }`}
          >
            {mapIsActive ? 'Деактивировать карту' : 'Активировать карту'}
          </button>
        </div>

        <div className='flex w-full max-w-5xl min-h-[440px] relative'>
          <div className='flex w-full lg:absolute inset-0'>
            <div className={`${mapIsActive ? '' : 'inset-0 '} absolute bg-transparent z-10`}></div>
            <iframe
              src='https://yandex.ru/map-widget/v1/?um=constructor%3A6b1f8fbb9bf255844f029b89d95fa5bf5c98e6d7f5991c1de8d2f36e385c5975&amp;source=constructor'
              width='100%'
              height='100%'
              className={`${mapIsActive ? '' : 'saturate-0'}`}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
