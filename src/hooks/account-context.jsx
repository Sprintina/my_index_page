import { createContext, useContext, useState } from 'react';
import '../App.css';

const accountContext = createContext();

const AccountDB = {
  userList: [],
};

export const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState(AccountDB);

  const addAccount = (id, pw) => {
    if (!account.userList.some((item) => item.id === id)) {
      setAccount({ ...account.userList.push({ id, pw }) });
    }
  };
  const checkAccount = (id, pw) => {
    if (account.userList.some((item) => item.id === id)) {
      if (account.userList.some((item) => item.id === id && item.pw === pw)) {
        // 정상적으로 로그인됨
        return true;
      } else {
        // 이미 존재하는 ID
        // PW가 틀린경우
        return false;
      }
    } else {
      //회원가입 상태
      return true;
    }
  };

  const userPrint = (getid, getpw) => {
    account.userList.forEach((element) => {
      console.log(element.id);
    });
    if (account.userList.some((item) => item.id === getid)) {
      console.log('현재 ID는 있는거!');
    } else {
      console.log('새로운 ID다!');
    }
    console.log(account.userList.length);
  };

  return (
    <accountContext.Provider
      value={{
        account,
        addAccount,
        userPrint,
        checkAccount,
      }}
    >
      {children}
    </accountContext.Provider>
  );
};

export const useAccount = () => useContext(accountContext);
