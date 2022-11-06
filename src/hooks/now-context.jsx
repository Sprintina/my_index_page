import { createContext, useContext, useState } from 'react';
import { useAccount } from './account-context';

const nowUserContext = createContext();

const user = {
  loginUser: null,
};

export const NowUserProvider = ({ children }) => {
  const [nowUsing, setNowUsing] = useState(user);

  const login = (id, pw) => {
    setNowUsing({ ...user, loginUser: { id, pw } });
  };

  const logout = () => {
    setNowUsing({ ...user, loginUser: null });
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
