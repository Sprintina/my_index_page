import { useData } from '../hooks/data-context';
import { Booklist } from '../components/BookList';

export const BookManage = ({ book }) => {
  const { data, addBook } = useData();

  return (
    <div className='flex items-start p-4'>
      {data.books
        .sort((a, b) => (a.id === 0 ? Number.MAX_SAFE_INTEGER : a.id - b.id))
        .map((book) => (
          <Booklist key={book.id} book={book} />
        ))}
      <div>
        {data.books?.find((book) => !book.id) ? (
          ''
        ) : (
          <button
            onClick={() => addBook()}
            className='m-4 ml-9 w-64 rounded-sm bg-cyan-400 py-1 font-medium text-white hover:bg-cyan-500'
          >
            + Add Book
          </button>
        )}
      </div>
    </div>
  );
};
