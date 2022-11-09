import {
  MagnifyingGlassCircleIcon,
  BookmarkIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/solid';
//import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { useData } from '../hooks/data-context';
import { useState } from 'react';
import { Modal } from './Modal';

export const Nav = () => {
  const { searchStr, setSearchStr } = useData();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <nav className='item-center flex h-20 justify-between bg-cyan-400 px-2 text-white shadow'>
      <div>
        <BookmarkIcon className='float-left mt-3 mr-3 w-10 text-cyan-100' />
        <h1 className='float-left my-3 text-4xl font-bold'>My Index</h1>
      </div>
      <div>
        <button
          onClick={openModal}
          className='mt-4 grid place-items-center text-cyan-50 hover:text-pink-400'
        >
          <CalendarDaysIcon className='w-9' />
        </button>

        <Modal open={modalOpen} close={closeModal} header='Calendar' />
      </div>
      <div className='flex'>
        <input
          type='text'
          value={searchStr}
          onChange={(evt) => setSearchStr(evt.target.value)}
          placeholder='search...'
          className='my-6 mr-4 w-28'
        />
        <MagnifyingGlassCircleIcon className='float-right w-10' />
      </div>
    </nav>
  );
};
