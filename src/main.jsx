import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Login } from './containers/Login';
import Globalstyles from './styles/golbalStyles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <Globalstyles />
  </StrictMode>,
);
