import { createContext, useContext, useState, useEffect } from 'react';

const SKEY = 'mipdata';
const accountContext = createContext();

const AccountDB = {
  userList: [],
};

export const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState(AccountDB);

  const addAccount = (id, pw) => {
    if (!account.userList?.some((item) => item.id === id)) {
      account.userList.push({ id, pw });
      setAccount(account);
    }
    localStorage.setItem(SKEY, JSON.stringify(account));
  };
  //회원가입을 위한 ID 확인
  const checkAccount = (id) => {
    // 이미 존재하는 ID
    if (account.userList?.some((item) => item.id === id)) {
      return false;
    } //새로운 ID
    else {
      return true;
    }
  };
  const loginAccount = (id, pw) => {
    // 정상적으로 로그인됨
    if (account.userList?.some((item) => item.id === id && item.pw === pw)) {
      return true;
    }
    return false;
  };
  useEffect(() => {
    const mipData = localStorage.getItem(SKEY);
    if (mipData) {
      setAccount(JSON.parse(mipData) || AccountDB);
    }
  }, []);

  return (
    <accountContext.Provider
      value={{
        account,
        addAccount,
        checkAccount,
        loginAccount,
      }}
    >
      {children}
    </accountContext.Provider>
  );
};

export const useAccount = () => useContext(accountContext);
