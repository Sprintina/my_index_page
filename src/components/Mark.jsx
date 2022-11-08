import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline';

export const Mark = ({ mark }) => {
  return (
    <div className='m-2 mb-3 box-border border-2 p-1'>
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
  );
};
