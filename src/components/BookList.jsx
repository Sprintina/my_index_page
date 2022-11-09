import { useReducer, useState } from 'react';
import { Mark } from './Mark';
import { Cog8ToothIcon, BackspaceIcon } from '@heroicons/react/24/outline';
import { useData } from '../hooks/data-context';

export const Booklist = ({ book }) => {
  const [bookTitle, setBookTitle] = useState(book.title);
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, false);
  const { saveBook, removeBook, addMark } = useData();

  const changeBookTitle = (book) => {
    book.title = bookTitle;
    saveBook(book, bookTitle);

    if (isEditing) {
      toggleEditing();
    }
  };

  return (
    <div className='m-4 ml-6 w-80 flex-shrink-0 rounded-sm bg-cyan-100'>
      <div className='xl:h-[78vh]s h-[70vh] overflow-y-auto xs:h-[72vh] sm:h-[74vh] md:h-[76vh]'>
        <div className='mb-4 flex h-14 items-center justify-between bg-cyan-300'>
          <h3 className='mb-2 truncate p-3 pt-4 text-2xl font-bold text-slate-700'>
            {book.title}
          </h3>
          <button onClick={() => toggleEditing()} className='mr-2 text-sm'>
            {isEditing ? (
              <BackspaceIcon className='h-10 w-5' />
            ) : (
              <Cog8ToothIcon className='h-10 w-5' />
            )}
          </button>
        </div>
        {book.id === 0 || isEditing ? (
          <div className='mx-2'>
            <input
              type='text'
              value={bookTitle}
              onChange={(evt) => setBookTitle(evt.target.value)}
              className='h-7 w-full'
              placeholder='title...'
            />
            <button
              onClick={() => changeBookTitle(book)}
              className='float-right m-2 rounded bg-cyan-400 px-2 py-1 font-medium text-white hover:bg-cyan-500'
            >
              Save
            </button>
            <button
              onClick={() => removeBook(book)}
              className='float-right m-2 rounded bg-fuchsia-400 px-2 py-1 font-medium text-white hover:bg-fuchsia-600'
            >
              Remove
            </button>
          </div>
        ) : book.marks.length ? (
          book.marks.map((mark) => (
            <Mark key={mark.id} mark={mark} id={book.id} />
          ))
        ) : (
          <></>
        )}
      </div>
      <button
        onClick={() => addMark(book)}
        className='float-right m-1 rounded-full bg-lime-300 px-2 py-1 font-semibold text-emerald-800 hover:bg-lime-500'
      >
        + ADD Mark
      </button>
    </div>
  );
};
