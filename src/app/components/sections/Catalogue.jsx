import ExportedImage from 'next-image-export-optimizer';
import { cardItems } from '@/app/cardItems';

export default function Catalogue() {
  return (
    <section className='w-full px-5 mx-auto max-w-screen-xl py-12 lg:py-32'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 lg:gap-10 w-full'>
        {cardItems.map((item, index) => (
          <div key={index} className='flex flex-col gap-5'>
            <div className={`aspect-[4/3] overflow-hidden relative`}>
              <ExportedImage
                alt={'card image'}
                src={item.src}
                fill
                loading='lazy'
                placeholder='blur'
                className={`object-cover`}
              />
            </div>
            <div className='flex flex-col gap-3'>
              <h3 className='text-xl font-black'>{item.title}</h3>

              <div className='flex justify-between'>
                <div className='flex flex-col gap-3'>
                  <span className='font-black'>
                    <span className='font-light '>Площадь: </span>
                    {item.area}&nbsp;м²
                  </span>

                  <span className='font-black'>
                    <span className='font-light '>Этажи: </span>
                    {item.floors}
                  </span>
                </div>

                <div className='flex flex-col gap-3 items-end'>
                  <span className='font-black'>
                    <span className='font-light '>Спальни: </span>
                    {item.bedrooms}
                  </span>

                  <span className='font-light '> {item.material}</span>
                </div>
              </div>

              <span className='text-xl font-black'>
                {`${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₽`}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
