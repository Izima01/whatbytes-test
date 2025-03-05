import React from 'react';
import BorderBox from './BorderBox';
import { GiTrophy } from 'react-icons/gi';
import { TiClipboard } from 'react-icons/ti';
import { IoCheckbox } from 'react-icons/io5';

const Stats = ({
  score,
  rank,
  percentile,
}: {
  score: string;
  rank: string;
  percentile: string;
}) => {
  const statsArray = [
    {
      name: 'YOUR RANK',
      value: rank,
      type: 'rank',
      icon: <GiTrophy size={24} color='#cd880b' />,
    },
    {
      name: 'percentile',
      value: `${percentile}%`,
      type: 'percentile',
      icon: <TiClipboard size={24} color='#cd880b' />,
    },
    {
      name: 'correct answers',
      value: `${score}/15`,
      type: 'correct',
      icon: <IoCheckbox size={24} strokeWidth={4} color='#04aa04' />,
    },
  ];
  return (
    <BorderBox extraClasses=''>
      <h3 className='font-semibold text-lg'>Quick Statistics</h3>
      <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-3 gap-y-3 md:justify-center justify-between items-center my-4'>
        {statsArray.map(({ name, value, type, icon }) => (
          <div
            className='w-full flex gap-8 sm:gap-4 justify-baseline sm:justify-center items-center mx-auto'
            key={type}
          >
            <span className='w-11 h-11 rounded-full flex justify-center items-center bg-[#eff0f0]'>
              {icon}
            </span>
            <div>
              <h5 className='text-xl font-semibold'>{value}</h5>
              <p className='text-xs text-[#4f5763] uppercase xl:text-nowrap'>
                {name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </BorderBox>
  );
};

export default Stats;
