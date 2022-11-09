import { createContext, useContext, useState } from 'react';

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
  /*  const userPrint = (getid, getpw) => {
    account.userList.forEach((element) => {
      console.log(element.id);
    });
    if (account.userList.some((item) => item.id === getid)) {
      console.log('현재 ID는 있는거!');
    } else {
      console.log('새로운 ID다!');
    }
    console.log(account.userList.length);
  };*/

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
