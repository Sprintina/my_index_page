import { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext();
const SKEY = 'mipdata';
const NKEY = 'bookNum';

const BookMarkDB = {
  books: [],
};

const BookIDNum = {};

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
  const [idCount, setIdCount] = useState(BookIDNum);
  const [data, setData] = useState(BookMarkDB);

  const addBook = () => {
    setData({
      ...data,
      books: [...data.books, { id: 0, title: '', marks: [] }],
    });
    localStorage.setItem(NKEY, JSON.stringify(BookIDNum));
  };

  const saveBook = (book) => {
    //1. id=0인 상태라면 기존 id 가장 큰 값에서 +1해서 신규 아이디 생성
    if (!book.id) {
      book.id = count;
      idCount[String(count)] = 1;
      setIdCount(() => idCount);
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
    localStorage.setItem(NKEY, JSON.stringify(BookIDNum));
  };
  const saveMark = (mark, bookId) => {
    if (!mark.id) {
      mark.id = idCount[bookId];
      idCount[bookId] += 1;
      setIdCount(idCount);
    }
    // data 다시 세팅
    setData({
      ...data,
    });
    localStorage.setItem(SKEY, JSON.stringify(data));
  };
  const removeMark = (mark, book) => {
    setData({
      ...data,
      books: [...book.marks.filter((_mark) => _mark.id !== mark.id)],
    });
    localStorage.setItem(SKEY, JSON.stringify(data));
  };

  useEffect(() => {
    const mipData = localStorage.getItem(SKEY);
    if (mipData) {
      setData(JSON.parse(mipData) || BookMarkDB);
      setCount(JSON.parse(localStorage.getItem(NKEY)) || BookIDNum);
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
        saveMark,
        removeMark,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
