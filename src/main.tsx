import React from 'react';
import ReactDOM from 'react-dom/client';
import { PokedexEntries } from './pages/PokedexEntries/PokedexEntries.tsx';
import { Provider } from 'react-redux';
import { loadStore } from './redux/store.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={loadStore}>
      <PokedexEntries />
    </Provider>
  </React.StrictMode>,
);
