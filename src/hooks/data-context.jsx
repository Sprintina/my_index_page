import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

const BookMarkDB = {
  books: [
    {
      id: 1,
      title: 'TTT',
      marks: [
        { id: 1, title: 'dd', description: 'description', src: '' },
        { id: 2, title: 'dd', description: 'description', src: '' },
        { id: 3, title: 'dd', description: 'description', src: '' },
        { id: 4, title: 'dd', description: 'description', src: '' },
        { id: 5, title: 'dd', description: 'description', src: '' },
      ],
    },
  ],
};

export const DataProvider = ({ children }) => {
  const [count, setCount] = useState(2);
  const [data, setData] = useState(BookMarkDB);

  const addBook = () => {
    setData({
      ...data,
      books: [...data.books, { id: 0, title: '', marks: [] }],
    });
  };

  const saveBook = (book) => {
    //1. id=0인 상태라면 기존 id 가장 큰 값에서 +1해서 신규 아이디 생성
    if (!book.id) {
      book.id = count;
      setCount(() => count + 1);
    }
    // data 다시 세팅
    setData({
      ...data,
    });
    //books: [...data.books.filter((_book) => _book.id !== book.id), book]
  };

  const removeBook = (book) => {
    setData({
      ...data,
      books: [...data.books.filter((_book) => _book.id !== book.id)],
    });
  };

  return (
    <DataContext.Provider
      value={{
        data,
        addBook,
        saveBook,
        removeBook,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
