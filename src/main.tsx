import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { loadStore } from './redux/store.ts';
import './index.css';
import { router } from './router.tsx';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={loadStore}>
      <RouterProvider router={router()} />
    </Provider>
  </React.StrictMode>,
);
