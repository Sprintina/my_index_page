import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { NowUserProvider } from './hooks/now-context';
import { ManagePage } from './components/ManagePage';

function App() {
  return (
    <div className='App'>
      <NowUserProvider>
        <ManagePage />
      </NowUserProvider>
    </div>
  );
}

export default App;
