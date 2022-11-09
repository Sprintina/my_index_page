import { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext();
const SKEY = 'mipdata';
const NKEY = 'nowkey';

const BookMarkDB = {
  books: [],
};

//reducer ??? need study
/*const reducer = (data, action) => {
  switch (action.type) {
    case 'save':
      return {
        ...data,
        books: action.payload,
      };
    case 'remove':
      return {
        ...data,
        books: action.payload,
      };
  }
};*/

export const DataProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  const [markCount, setMarkCount] = useState(1);
  const [data, setData] = useState(BookMarkDB);

  const addBook = () => {
    setData({
      ...data,
      books: [...data.books, { id: 0, title: '', marks: [] }],
    });
    localStorage.setItem(NKEY, JSON.stringify(count));
    console.log(localStorage);
    //localStorage.key
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
    localStorage.setItem(SKEY, JSON.stringify(data));
    //books: [...data.books.filter((_book) => _book.id !== book.id), book]
  };

  const removeBook = (book) => {
    setData({
      ...data,
      books: [...data.books.filter((_book) => _book.id !== book.id)],
    });
    localStorage.setItem(SKEY, JSON.stringify(data));
  };

  const addMark = (book) => {
    book.marks.push({ id: 0, title: '', description: '', src: '' });
    setData({
      ...data,
    });
  };

  useEffect(() => {
    const mipData = localStorage.getItem(SKEY);
    if (mipData) {
      setData(JSON.parse(mipData) || BookMarkDB);
      console.log(localStorage.getItem(NKEY));
      setCount(Number(localStorage.getItem(NKEY)) + 1 || count);
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        addBook,
        saveBook,
        removeBook,
        addMark,
        SKEY,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
