import { createContext, useContext, useState } from 'react';

const accountContext = createContext();

const AccountDB = {
  userList: [],
};

export const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState(AccountDB);

  const addAccount = (id, pw) => {
    if (!account.userList?.some((item) => item.id === id)) {
      setAccount({ ...account.userList.push({ id, pw }) });
    }
  };
  //회원가입을 위한 ID 확인
  const checkAccount = (id) => {
    if (account.userList?.some((item) => item.id === id)) {
      // 이미 존재하는 ID
      setAccount(account);
      return false;
    } else {
      //새로운 ID
      setAccount(account);
      return true;
    }
  };
  const loginAccount = (id, pw) => {
    console.log(account);
    if (account.userList?.some((item) => item.id === id && item.pw === pw)) {
      setAccount(account);
      // 정상적으로 로그인됨
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
