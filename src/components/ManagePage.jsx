import { Login } from './Login';
import { useUserState } from '../hooks/now-context';
import { AccountProvider } from '../hooks/account-context';
import { BookManage } from './BookManage';
import { Nav } from './Nav';
import { useData } from '../hooks/data-context';

export const ManagePage = () => {
  const { nowUsing } = useUserState();
  return (
    <>
      {nowUsing ? (
        <div className='h-screen w-full overflow-x-scroll'>
          <header>
            <Nav />
          </header>
          <main>
            <BookManage />
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
