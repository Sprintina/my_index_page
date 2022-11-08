//import { NowUserProvider } from './hooks/now-context';
//import { ManagePage } from './components/ManagePage';
import { Nav } from './components/Nav';
import { DataProvider } from './hooks/data-context';
import { BookManage } from './components/BookManage';

function App() {
  /**      <NowUserProvider>
        <ManagePage />
      </NowUserProvider> */
  return (
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
  );
}

export default App;
