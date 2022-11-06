import { useState } from 'react';
import { BookMark } from './BookMark';
import { Login } from './Login';
import { useUserState } from '../hooks/now-context';
import { useAccount } from '../hooks/account-context';
import { AccountProvider } from '../hooks/account-context';

const nowUser = {
  loginUser: {},
};

export const ManagePage = () => {
  const { nowUsing } = useUserState();
  return (
    <>
      {nowUsing.loginUser ? (
        <BookMark />
      ) : (
        <AccountProvider>
          <Login />
        </AccountProvider>
      )}
    </>
  );
};
