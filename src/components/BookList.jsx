import { Mark } from './Mark';

export const Booklist = ({ book }) => {
  return (
    <div className='box-sizing:border-box m-3 w-3/12 border-4 p-1.5'>
      <div className='text-2xl font-bold text-slate-700'>{book.title}</div>
      {book.marks.map((mark) => (
        <Mark mark={mark} key={mark.id} />
      ))}
      <button className='float-right rounded-full bg-lime-300 px-2 py-1 font-semibold text-emerald-800 hover:bg-lime-500'>
        + ADD Mark
      </button>
    </div>
  );
};
