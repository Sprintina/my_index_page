import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline';
import { useReducer, useState } from 'react';
import { useData } from '../hooks/data-context';

export const Mark = ({ mark, book }) => {
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, false);
  const [markTitle, setMarkTitle] = useState(mark.title);
  const [markSrc, setMarkSrc] = useState(mark.src);
  const [description, setDescription] = useState(mark.description);
  const { saveMark, removeMark } = useData();

  const changeMark = (mark) => {
    mark.title = markTitle;
    mark.src = markSrc;
    mark.description = description;

    saveMark(mark, book.id);

    if (isEditing) {
      toggleEditing();
    }
  };

  return (
    <div className='m-2 mb-3 box-border p-1'>
      {mark.id === 0 || isEditing ? (
        <div className='mx-2'>
          <input
            type='text'
            value={markTitle}
            onChange={(evt) => setMarkTitle(evt.target.value)}
            className='m-1 h-7 w-full p-1'
            placeholder='title...'
          />
          <input
            type='text'
            value={markSrc}
            onChange={(evt) => setMarkSrc(evt.target.value)}
            className='m-1 h-7 w-full p-1'
            placeholder='img...'
          />
          <input
            type='text'
            value={description}
            onChange={(evt) => setDescription(evt.target.value)}
            className='m-1 h-7 w-full p-1'
            placeholder='description...'
          />
          <button
            onClick={() => changeMark(mark)}
            className='float-right m-2 rounded bg-cyan-400 px-2 py-1 font-medium text-white hover:bg-cyan-500'
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <div>
            <img src={mark.src} alt={mark.title} className='w-full' />
          </div>
          <h3 className='font-medium text-slate-700'>{mark.title}</h3>
          <p className='text gray-500 text-sm'>{mark.description}</p>
          <div className='item-center mr-2 mb-2 flex justify-end'>
            <button
              onClick={() => toggleEditing()}
              className='mr-1 rounded-full bg-yellow-300 px-2 hover:bg-yellow-500'
            >
              <PencilIcon className='h-10 w-5' />
            </button>
            <button
              onClick={() => removeMark(mark, book)}
              className='rounded-full bg-rose-300 px-2 hover:bg-rose-500'
            >
              <TrashIcon className='h-10 w-5' />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
