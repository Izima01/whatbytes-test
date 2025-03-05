import { Modal } from 'antd';
import Image from 'next/image';
import React from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import { formState } from './Main';

type ModalTypes = {
  isModalOpen: boolean;
  setIsModalOpen: (val: boolean) => void;
  formData: Record<string, formState>;
  handleChange: (name: string, value: string) => void;
  saveForm: () => void;
};

const UpdateModal = ({
  isModalOpen,
  setIsModalOpen,
  formData,
  handleChange,
  saveForm,
}: ModalTypes) => {
  return (
    <Modal
      width={'90%'}
      className='!max-w-3xl'
      open={isModalOpen}
      onOk={() => setIsModalOpen(false)}
      onCancel={() => setIsModalOpen(false)}
      onClose={saveForm}
      closeIcon={<></>}
      footer={[
        <button
          key='back'
          className='border border-[#122386] text-[#122386] p-2 font-semibold rounded-lg cursor-pointer inline-block mr-4'
          onClick={() => setIsModalOpen(false)}
        >
          cancel
        </button>,
        <button
          key='submit'
          onClick={() => {
            setIsModalOpen(false);
            saveForm();
          }}
          className='bg-[#122386] inline-flex gap-3 items-center border-2 border-gray-900 text-white font-semibold px-5 py-2 rounded-lg cursor-pointer'
        >
          <span>save</span> <IoMdArrowForward size={16} className='mt-1' />
        </button>,
      ]}
    >
      <header className='w-full flex justify-between items-center'>
        <h3 className='text-2xl font-bold'>Update Scores</h3>
        <Image src={'/html-logo.png'} alt='HTML Logo' width={40} height={70} />
      </header>
      <ol className='my-12'>
        {Object.values(formData).map(({ error, name, value }, i) => (
          <li
            className='w-full flex justify-between items-center mb-4 relative pb-4'
            key={name}
          >
            <div className='flex gap-1.5 md:gap-3 items-center'>
              <span className='flex justify-center items-center bg-[#122386] h-6 w-6 md:w-8 md:h-8 rounded-full text-white md:text-lg'>
                {i + 1}
              </span>
              <h4 className='md:text-lg'>
                Update your <span className='font-semibold'>{name}</span>
              </h4>
            </div>
            <div
              className={`w-1/6 md:w-1/3 relative transition-all ${
                error ? '-left-6 md:-left-10' : ''
              }`}
            >
              <input
                type='string'
                className={`py-1 md:py-2 w-full md:px-4 px-2 border-2 outline-none ${
                  error ? 'border-red-500 ' : 'border-[#507ac9]'
                } rounded-lg`}
                value={value}
                onChange={(e) =>
                  handleChange(Object.keys(formData)[i], e.target.value)
                }
              />
            </div>
            {error && (
              <p className='text-red-500 -mt-1 text-sm absolute bottom-0 right-6 md:right-10'>
                {error}
              </p>
            )}
          </li>
        ))}
      </ol>
    </Modal>
  );
};

export default UpdateModal;
