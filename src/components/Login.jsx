import { useRef } from 'react';
import { useAccount } from '../hooks/account-context';
import { useUserState } from '../hooks/now-context';
import { BookOpenIcon } from '@heroicons/react/24/outline';

export const Login = () => {
  console.log('@@@ Login');
  const { addAccount, checkAccount, loginAccount } = useAccount();
  const { login } = useUserState();
  const userIdRef = useRef();
  const userPWRef = useRef();

  const addMemberShip = (evt) => {
    evt.preventDefault();
    if (checkAccount(userIdRef.current.value, userPWRef.current.value)) {
      addAccount(userIdRef.current.value, userPWRef.current.value);
      alert('회원가입 완료!');
    } else {
      alert('사용할 수 없는 ID입니다');
    }
    userIdRef.current.value = '';
    userPWRef.current.value = '';
  };

  const loginClick = (evt) => {
    evt.preventDefault();
    if (loginAccount(userIdRef.current.value, userPWRef.current.value)) {
      login(userIdRef.current.value);
    } else {
      alert('ID, PW를 다시 입력해주세요.');
    }
    userIdRef.current.value = '';
    userPWRef.current.value = '';
  };

  return (
    <div>
      <div className='item-center flex h-32 bg-skyBlue px-2 text-white shadow'>
        <BookOpenIcon className='m-4 mr-2 h-24' />
        <h3 className='m-4 mt-6 font-mono text-6xl font-bold'>
          Bookmark HomePage
        </h3>
      </div>
      <div className='m-4 flex h-screen w-screen flex-col items-center justify-center pb-48 align-middle'>
        <h1 className='mb-8 text-7xl font-semibold text-cyan-800'>
          Login Please
        </h1>
        <br />
        <div className='m-1 flex flex-wrap'>
          <label htmlFor='user-id' className='mr-2 mt-2 text-xl font-bold'>
            ID :
          </label>
          <input
            id='user-id'
            type='text'
            ref={userIdRef}
            placeholder='아이디를 입력해주세요'
            className='w-56 border border-black p-3'
          />
        </div>
        <div className='m-1 mb-5 mr-4 flex flex-wrap'>
          <label htmlFor='user-pw' className='mr-2 mt-2 text-xl font-bold'>
            PW :
          </label>
          <input
            id='user-pw'
            type='password'
            ref={userPWRef}
            placeholder='비밀번호를 입력해주세요'
            className='w-56 border border-black p-3'
          />
        </div>
        <div className='ml-8 flex flex-wrap text-2xl font-semibold'>
          <button
            onClick={(evt) => loginClick(evt)}
            className='m-2 rounded bg-cyan-300 p-3 px-5 text-violet-800 hover:bg-cyan-500'
          >
            Login
          </button>
          <button
            onClick={(evt) => addMemberShip(evt)}
            className='m-2 rounded bg-lime-300 p-3 px-5 text-emerald-800 hover:bg-lime-500'
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};
