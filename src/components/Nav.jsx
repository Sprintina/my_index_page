// import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';
import {
  BookmarkSquareIcon,
  MagnifyingGlassIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline';
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
    <nav className='flex items-center justify-between px-2 shadow'>
      <div>
        <h1 className='flex text-2xl font-bold'>
          <BookmarkSquareIcon className='w-8 text-cyan-500' /> My Index
        </h1>
      </div>
      <div>
        <button onClick={openModal} className='mb-1 rounded-full'>
          <CalendarDaysIcon className='h-6 w-6 text-cyan-500' />
        </button>

        <Modal open={modalOpen} close={closeModal} header='Calendar' />
      </div>
      <div className='flex'>
        {/* <MagnifyingGlassCircleIcon className='w-4 absolute h-8' /> */}
        <MagnifyingGlassIcon className='mr-1 h-6 w-6 text-cyan-500' />
        <input
          type='text'
          value={searchStr}
          onChange={(evt) => setSearchStr(evt.target.value)}
          placeholder='search...'
          className='float-right h-6 w-24 rounded border border-slate-300 px-2'
        />
      </div>
    </nav>
  );
};
export default Nav;
