import { Login } from './Login';
import { useUserState } from '../hooks/now-context';
import { AccountProvider } from '../hooks/account-context';
import { BookManage } from './BookManage';
import { Nav } from './Nav';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';

export const ManagePage = () => {
  const { nowUsing, logout } = useUserState();
  return (
    <>
      {nowUsing ? (
        <div className='h-screen w-full overflow-x-scroll'>
          <header>
            <Nav />
          </header>
          <main>
            <BookManage />
            <button onClick={() => logout()} className='text-blueSea -mt-3'>
              <ArrowLeftOnRectangleIcon className='h-10, w-10' />
            </button>
          </main>
          <footer className='text-center text-slate-500'>
            &#169; Indiflex - Senior Coding 2022
          </footer>
        </div>
      ) : (
        <AccountProvider>
          <Login />
        </AccountProvider>
      )}
    </>
  );
};
