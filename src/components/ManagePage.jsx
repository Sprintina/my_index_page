import { Login } from './Login';
import { useUserState } from '../hooks/now-context';
import { AccountProvider } from '../hooks/account-context';
import { DataProvider } from '../hooks/data-context';
import { BookManage } from './BookManage';
import { Nav } from './Nav';

const nowUser = {
  loginUser: {},
};

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
            <DataProvider>
              <BookManage />
            </DataProvider>
          </main>
          <footer></footer>
        </div>
      ) : (
        <AccountProvider>
          <Login />
        </AccountProvider>
      )}
    </>
  );
};
