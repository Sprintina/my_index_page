import { NowUserProvider } from './hooks/now-context';
import { ManagePage } from './components/ManagePage';
import { Nav } from './components/Nav';
import { Booklist } from './components/BookList';
import { useState } from 'react';

const SampleData = {
  books: [
    {
      id: 1,
      title: 'Private Book',
      marks: [
        {
          id: 1,
          title: '1212',
          src: 'https://tailwindcss.com/api/og?path=/docs/height',
          description: 'mark description',
        },

        {
          id: 2,
          title: 'Mark Title...',
          src: 'https://tailwindcss.com/api/og?path=/docs/height',
          description: 'mark description',
        },
      ],
    },
    { id: 2, title: 'React Study', marks: [] },
  ],
};

function App() {
  /**      <NowUserProvider>
        <ManagePage />
      </NowUserProvider> */

  const [data, setData] = useState(SampleData);
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main className='container mt-6 flex pl-6'>
        {data.books.map((book) => (
          <Booklist book={book} key={book.id} />
        ))}
        <div>
          <button className='mt-3 ml-10 rounded-sm bg-teal-400 px-4 py-2 font-medium text-white hover:bg-teal-600'>
            + Add Book
          </button>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
