import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAccount } from '../hooks/account-context';
import { useUserState } from '../hooks/now-context';

export const Login = () => {
  console.log('@@@ Login');
  const { addAccount, checkAccount } = useAccount();
  const { login } = useUserState();
  const userIdRef = useRef();
  const userPWRef = useRef();

  return (
    <>
      <h1>Login Please</h1>
      <br />
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          if (checkAccount(userIdRef.current.value, userPWRef.current.value)) {
            login(userIdRef.current.value, userPWRef.current.value);
            addAccount(userIdRef.current.value, userPWRef.current.value);
          } else {
            userIdRef.current.value = '사용할 수 없는 ID';
            userPWRef.current.value = 'PW가 틀린경우 다시 입력 바람';
          }
        }}
      >
        <label htmlFor='user-id'>Id: </label>
        <input id='user-id' type='text' ref={userIdRef} />
        <br />
        <label htmlFor='user-pw'> PW:</label>
        <input id='user-pw' type='text' ref={userPWRef} />
        <br />
        <button type='submit'>Login</button>
        <br />
      </form>
    </>
  );
};
