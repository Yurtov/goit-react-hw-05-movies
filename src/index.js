import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import { App } from 'components/App';
import './index.css';
import { GlobalStyle } from 'components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/goit-react-hw-05-movies'>
      <App />
      <ScrollToTop smooth />
      <GlobalStyle/>
    </BrowserRouter>
  </React.StrictMode>
);
