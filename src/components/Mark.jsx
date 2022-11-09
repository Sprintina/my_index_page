import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline';
import { useReducer, useState } from 'react';

export const Mark = ({ mark }) => {
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, false);
  const [markTitle, setMarkTitle] = useState(mark.title);
  const [src, setSrc] = useState(mark.src);
  const [description, setDescription] = useState(mark.description);

  const changeMarkTitle = (mark) => {
    mark.title = markTitle;
    //saveBook(mark, markTitle);

    if (isEditing) {
      toggleEditing();
    }
  };

  return (
    <div className='m-2 mb-3 box-border p-1'>
      {mark.id === 0 ? (
        <div className='mx-2'>
          <input
            type='text'
            value={markTitle}
            onChange={(evt) => setMarkTitle(evt.target.value)}
            className='h-7 w-full'
            placeholder='title...'
          />
          <button
            onClick={() => changeMarkTitle(mark)}
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
            <button className='mr-1 rounded-full bg-yellow-300 px-2 hover:bg-yellow-500'>
              <PencilIcon className='h-10 w-5' />
            </button>
            <button className='rounded-full bg-rose-300 px-2 hover:bg-rose-500'>
              <TrashIcon className='h-10 w-5' />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
