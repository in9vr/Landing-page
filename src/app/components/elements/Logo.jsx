import Link from 'next/link';

export default function Logo({ href }) {
  return (
    <Link href={href} className='font-black text-4xl'>
      Логотип
    </Link>
  );
}
