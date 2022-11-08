import { useData } from '../hooks/data-context';
import { Booklist } from '../components/BookList';

export const BookManage = ({ book }) => {
  const { data, addBook } = useData();
  return (
    <div className='flex items-start p-4'>
      {data.books.map((book) => (
        <Booklist book={book} key={book.id} />
      ))}
      <div>
        <button
          onClick={() => addBook()}
          className='m-4 ml-9 w-64 rounded-sm bg-cyan-400 py-1 font-medium text-white hover:bg-cyan-500'
        >
          + Add Book
        </button>
      </div>
    </div>
  );
};
