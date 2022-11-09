import { createContext, useContext, useState } from 'react';

const nowUserContext = createContext();

export const NowUserProvider = ({ children }) => {
  const [nowUsing, setNowUsing] = useState(null);

  const login = (id) => {
    setNowUsing(id);
  };

  const logout = () => {
    setNowUsing(null);
  };

  return (
    <nowUserContext.Provider
      value={{
        nowUsing,
        login,
        logout,
      }}
    >
      {children}
    </nowUserContext.Provider>
  );
};

export const useUserState = () => useContext(nowUserContext);
