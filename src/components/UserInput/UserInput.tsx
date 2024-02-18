import React from 'react';
import Send from '@/icons/Send';

type UserInputProps = {
  onSubmit: (text: string) => void;
};
const UserInput: React.FC<UserInputProps> = ({ onSubmit }) => {
  return (
    <div className='relative flex flex-1 items-stretch md:flex-col'>
      <textarea
        className='p-4 pb-12 block w-full bg-stone-100 border-stone-200 outline-stone-300 rounded-lg  focus:border-neutral-500 focus:ring-neutral-500 dark:bg-slate-800 dark:border-stone-700 dark:text-stone-400 dark:focus:ring-stone-600'
        placeholder='Ask me something...'
        style={{ resize: 'none' }}
      ></textarea>
      <div className='absolute bottom-px inset-x-px p-2 rounded-b-md bg-stone-100 dark:bg-slate-800'>
        <div className='flex justify-end items-center'>
          <div className='flex items-center gap-x-1'>
            <button
              type='button'
              className='inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-white bg-neutral-600 hover:bg-neutral-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-stone-600'
            >
              <Send />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInput;
