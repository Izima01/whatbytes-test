import React from 'react';
import { BiLogoHtml5 } from 'react-icons/bi';
import BorderBox from './BorderBox';
import Image from 'next/image';

const TestDetails = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <BorderBox extraClasses='grid grid-cols-[1fr_7fr] sm:grid-cols-[1fr_8fr_1fr] gap-4 md:gap-2 items-center justify-between h-min py-5'>
      <Image src={'/html-logo.png'} alt='HTML Logo' width={60} height={90} />
      <div className='col-span-6 md:col-span-1 mx-auto'>
        <h3 className='font-semibold'>Hyper Text Markup Language</h3>
        <p className='text-sm text-[#4f5763]'>
          Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
        </p>
      </div>
      <button
        className='bg-[#122386] hover:bg-[#2d42bb] border-2 border-gray-900 text-white font-semibold px-4 py-2 rounded-lg cursor-pointer col-span-4 w-1/2 md:w-auto mx-auto md:col-span-1'
        onClick={handleClick}
      >
        Update
      </button>
    </BorderBox>
  );
};

export default TestDetails;
