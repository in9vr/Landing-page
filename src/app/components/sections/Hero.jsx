import Header from '../blocks/Header';

export default function Hero() {
  return (
    <div className='min-h-screen bg-secondary text-on-secondary'>
      <div className='flex flex-col mx-auto w-full max-w-7xl h-auto px-5 break-words'>
        <Header />
      </div>
    </div>
  );
}
