import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

import Globalstyles from './styles/golbalStyles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Globalstyles />
    <ToastContainer autoClose={2000} theme="light" />
  </StrictMode>,
);
