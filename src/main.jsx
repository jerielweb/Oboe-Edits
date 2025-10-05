import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import HeadersApp from './Header.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HeadersApp />
    </BrowserRouter>
  </StrictMode>,
);

