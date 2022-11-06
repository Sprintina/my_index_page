import { createContext, useContext, useState } from 'react';

const bookContext = createContext();

const BookMarkDB = {
  bookAC: [{ id: null, useList: [] }],
};

export const bookProvider = ({ children }) => {
  const [bookMark, setBM] = useState(BookMarkDB);

  const addAccount = (id) => {
    if (!account.userList.some((item) => item.id === id)) {
      setAccount({ ...account.userList.push({ id, pw }) });
    }
  };

  const userPrint = (getid) => {};

  return (
    <accountContext.Provider
      value={{
        account,
        addAccount,
        userPrint,
      }}
    >
      {children}
    </accountContext.Provider>
  );
};

export const useBookM = () => useContext(bookContext);
