import { NowUserProvider } from './hooks/now-context';
import { ManagePage } from './components/ManagePage';

function App() {
  return (
    <NowUserProvider>
      <ManagePage />
    </NowUserProvider>
  );
}

export default App;
