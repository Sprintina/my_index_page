import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAccount } from '../hooks/account-context';
import { useUserState } from '../hooks/now-context';

export const Login = () => {
  console.log('@@@ Login');
  const { addAccount, checkAccount, loginAccount } = useAccount();
  const { login } = useUserState();
  const userIdRef = useRef();
  const userPWRef = useRef();

  return (
    <>
      <h1>Login Please</h1>
      <br />

      <label htmlFor='user-id'>Id: </label>
      <input id='user-id' type='text' ref={userIdRef} />
      <br />
      <label htmlFor='user-pw'> PW:</label>
      <input id='user-pw' type='text' ref={userPWRef} />
      <br />
      <button
        onClick={(evt) => {
          evt.preventDefault();
          if (loginAccount(userIdRef.current.value, userPWRef.current.value)) {
            login(userIdRef.current.value);
          } else {
            alert('ID, PW를 다시 입력해주세요.');
          }
          userIdRef.current.value = '';
          userPWRef.current.value = '';
        }}
      >
        Login
      </button>
      <button
        onClick={(evt) => {
          evt.preventDefault();
          if (checkAccount(userIdRef.current.value, userPWRef.current.value)) {
            addAccount(userIdRef.current.value, userPWRef.current.value);
          } else {
            alert('사용할 수 없는 ID입니다');
          }
          userIdRef.current.value = '';
          userPWRef.current.value = '';
        }}
      >
        회원가입
      </button>
      <br />
    </>
  );
};
