import Link from 'next/link';
import { IoMdMail } from 'react-icons/io';
import { BiLogoTelegram } from 'react-icons/bi';

export default function Icon({ href, type }) {
  return (
    <Link href={href}>
      <div className='flex bg-primary hover:brightness-110 rounded-md text-on-primary p-2 transition-all duration-200 ease-in-out'>
        {type === 'email' && <IoMdMail className='flex bg-primary rounded-md text-on-primary' size={18} />}
        {type === 'telegram' && <BiLogoTelegram className='flex bg-primary rounded-md text-on-primary' size={18} />}
      </div>
    </Link>
  );
}
