import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='col-span-full flex justify-between items-center px-6 py-4 border-b-2 border-b-gray-300'>
      <Link href='/'>
        <Image src={'/logo.png'} alt='Company Logo' width={200} height={20} />
      </Link>
      <button className='p-1 bg-none border-2 border-gray-300 rounded-md flex gap-2 items-center font-bold cursor-pointer'>
        <Image
          src={'/avatar.jpg'}
          alt='Profile Picture'
          width={28}
          height={28}
          className='rounded-full'
        />
        Izima Obisike
        {/* <span>Izima Obisike</span> */}
      </button>
    </header>
  );
};

export default Header;
