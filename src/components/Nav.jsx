import {
  MagnifyingGlassCircleIcon,
  BookmarkIcon,
} from '@heroicons/react/24/solid';
//import { BookmarkIcon } from '@heroicons/react/24/outline';

export const Nav = () => {
  return (
    <nav className='item-center flex h-20 justify-between bg-cyan-400 px-2 text-white shadow'>
      <div>
        <BookmarkIcon className='-mt-5 mr-3 inline-block w-10 text-cyan-100' />
        <h1 className='my-3 inline-block text-4xl font-bold'>My Index</h1>
      </div>
      <div>
        <input type='text' placeholder='search...' className='my-6 mr-4 w-28' />
        <MagnifyingGlassCircleIcon className='inline-block w-10' />
      </div>
    </nav>
  );
};
