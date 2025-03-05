'use client';

import React, { ReactNode } from 'react';
import BorderBox from './BorderBox';
import { Progress } from 'antd';

const skillsArray = [
  {
    name: 'HTML Tools, Forms, History',
    color: '#3a7df4',
    percent: 80,
    accent: '#eaf2fe',
  },
  {
    name: 'Tags & References in HTML',
    color: '#ff8339',
    percent: 60,
    accent: '#fef1eb',
  },
  {
    name: 'Tables & References in HTML',
    color: '#fa5352',
    percent: 24,
    accent: '#feeceb',
  },
  {
    name: 'Tables & CSS Basics',
    color: '#28c064',
    percent: 96,
    accent: '#e6f9ee',
  },
];

const Syllabus = () => {
  return (
    <BorderBox extraClasses='p-6 h-min'>
      <h2 className='text-lg font-semibold mb-8'>Syllabus Wise Analysis</h2>
      {skillsArray.map(({ name, color, percent, accent }, index) => (
        <div
          className={`gap-4 items-end ${index === 3 ? 'mb-3' : 'mb-6'}`}
          key={color}
        >
          <h4 className='text-[#4d5865]'>{name}</h4>
          {/* <div className='flex gap-7'> */}
          <Progress
            strokeColor={color}
            trailColor={accent}
            percent={percent}
            type='line'
            format={(percent) => (
              <p style={{ color }} className='pl-6 font-bold text-base'>
                {percent}%
              </p>
            )}
          />
          {/* </div> */}
        </div>
      ))}
    </BorderBox>
  );
};

export default Syllabus;
