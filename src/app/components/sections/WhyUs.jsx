export default function WhyUs() {
  return (
    <section className='flex w-full text-on-secondary bg-secondary'>
      <div className='flex flex-col lg:flex-row gap-10 lg:gap-5 w-full px-5 mx-auto max-w-screen-xl py-12 lg:py-32 '>
        <div className='flex flex-col lg:w-2/4'>
          <h2 className='text-2xl lg:text-5xl font-black mb-8'>Почему выбирают нас</h2>
          <p className='font-light mb-4'>
            Мы строим надежные дома для сурового климата с 2010 года, используя современные технологии утепления и
            энергосбережения.
          </p>

          <p className='font-light'>
            Гарантируем качество на каждом этапе, предоставляем полный комплекс услуг “под ключ” и индивидуальный подход
            к каждому проекту.
          </p>
        </div>

        <div className='flex flex-col gap-6 lg:w-1/4 p-5 bg-primary rounded-md'>
          <h3 className='text-base font-black'>Специальные предложения и выгодные условия</h3>
          <p className='font-thin'>
            Мы регулярно организуем специальные предложения, предлагаем выгодные условия и дарим приятные сюрпризы
          </p>
        </div>

        <div className='flex flex-col gap-6 lg:w-1/4 p-5 border-2 border-on-secondary rounded-md'>
          <h3 className='text-base font-black'>Специальные предложения и выгодные условия</h3>
          <p className='font-thin'>
            Мы регулярно организуем специальные предложения, предлагаем выгодные условия и дарим приятные сюрпризы
          </p>
        </div>
      </div>
    </section>
  );
}
