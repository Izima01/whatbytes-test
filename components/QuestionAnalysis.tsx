import React from 'react';
import BorderBox from './BorderBox';
import { Progress } from 'antd';

const QuestionAnalysis = ({ score }: { score: number }) => {
  return (
    <BorderBox extraClasses='p-4 pb-8 flex flex-col'>
      <h2 className='text-lg font-semibold'>Question Analysis</h2>
      <p className='my-4'>
        <span className='font-semibold'>
          You scored {score} questions out of 15.
        </span>
        However it still needs some improvements
      </p>
      <Progress
        percent={Math.round((score / 15) * 100)}
        type='circle'
        strokeLinecap='square'
        strokeWidth={14}
        gapPosition='bottom'
        gapDegree={1}
        // format={}
        strokeColor='#3a7df4'
        trailColor='#eaf2fe'
        className='mx-auto my-6 self-center'
      />
    </BorderBox>
  );
};

export default QuestionAnalysis;
