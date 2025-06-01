import { cardItems } from '@/app/cardItems';
import ProductCard from '../blocks/ProductCard';

export default function Catalogue() {
  return (
    <section id='products' className='w-full px-5 mx-auto max-w-screen-xl py-12 lg:py-32'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 lg:gap-10 w-full'>
        {cardItems.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
