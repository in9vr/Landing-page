import ExportedImage from 'next-image-export-optimizer';

export default function ProductCard({ item }) {
  return (
    <div className='flex flex-col gap-5'>
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

        <span className='text-xl font-black'>{`${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₽`}</span>
      </div>
    </div>
  );
}
