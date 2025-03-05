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
      width={'45%'}
      className='w-4/5 md:w-1/2'
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
            className='w-full flex justify-between items-center mb-4'
            key={name}
          >
            <div className='flex gap-3 items-center'>
              <span className='flex justify-center items-center bg-[#122386] w-7 h-7 rounded-full text-white text-lg'>
                1
              </span>
              <h4 className='text-lg'>
                Update your <span className='font-semibold'>{name}</span>
              </h4>
            </div>
            <div
              className={`w-1/3 relative transition-all ${
                error ? '-left-10' : ''
              }`}
            >
              <input
                type='string'
                className={`py-2 w-full px-4 border-2 outline-none ${
                  error ? 'border-red-500 ' : 'border-[#507ac9]'
                } rounded-lg`}
                value={value}
                onChange={(e) =>
                  handleChange(Object.keys(formData)[i], e.target.value)
                }
              />
              {error && <p className='text-red-500 -mt-1 text-sm'>{error}</p>}
            </div>
          </li>
        ))}
      </ol>
    </Modal>
  );
};

export default UpdateModal;
