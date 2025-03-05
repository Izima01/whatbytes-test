'use client';

import React, { useState } from 'react';
import TestDetails from './TestDetails';
import Stats from './Stats';
import Comparison from './Comparison';
import Syllabus from './Syllabus';
import QuestionAnalysis from './QuestionAnalysis';
import UpdateModal from './UpdateModal';

export type formState = {
  name: string;
  value: string;
  error: string;
};

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [savedValues, setSavedValues] = useState({
    rank: '4',
    percentile: '90',
    score: '12',
  });
  const [formData, setFormData] = useState<Record<string, formState>>({
    rank: { name: 'Rank', value: '4', error: '' },
    percentile: { name: 'Percentile', value: '90', error: '' },
    score: { name: 'Current Score (out of 15)', value: '12', error: '' },
  });

  const handleChange = (name: string, value: string) => {
    // General validation
    if (!value || isNaN(Number(value))) {
      setFormData((prev) => ({
        ...prev,
        [name]: {
          ...prev[name],
          error: 'Required I. Should be a number',
          value: '',
        },
      }));
      return;
    }

    // Validation for Percentile
    if (name == 'percentile') {
      if (Number(value) > 100) {
        setFormData((prev) => ({
          ...prev,
          [name]: {
            ...prev[name],
            error: 'Required I. Percentile 0 - 100',
          },
        }));
        return;
      }
    }
    if (name == 'score') {
      if (Number(value) > 15) {
        setFormData((prev) => ({
          ...prev,
          [name]: {
            ...prev[name],
            error: 'Required I. Score 0 - 15',
          },
        }));
        return;
      }
    }
    setFormData((prev) => ({
      ...prev,
      [name]: { ...prev[name], value, error: '' },
    }));
  };

  const saveFormData = () => {
    setSavedValues({
      rank: formData.rank.value,
      percentile: formData.percentile.value,
      score: formData.score.value,
    });
  };

  return (
    <main className='w-full p-6 lg:p-6 lg:pl-12'>
      <h1>Skills</h1>
      <UpdateModal
        formData={formData}
        handleChange={handleChange}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        saveForm={saveFormData}
      />
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[3fr_2fr] gap-y-4 gap-x-6 mt-4'>
        <div className='flex flex-col gap-y-4'>
          <TestDetails handleClick={() => setIsModalOpen(true)} />
          <Stats
            score={savedValues.score}
            percentile={savedValues.percentile}
            rank={savedValues.rank}
          />
          <Comparison
            percentile={Number(savedValues['percentile'])}
            score={Number(savedValues.score)}
          />
        </div>
        <div className='flex flex-col gap-y-4'>
          <Syllabus />
          <QuestionAnalysis score={Number(savedValues.score)} />
        </div>
      </div>
    </main>
  );
};

export default Main;
