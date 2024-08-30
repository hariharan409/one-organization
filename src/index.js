import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './contexts/SearchContext';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
/* THE STYLES BELOW ARE APPLIED TO THE ENTIRE APPLICATION. PLEASE DO NOT REMOVE OR MODIFY THIS LINE. */
import "./scss/common-styles.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/one-seatrium">
    <React.StrictMode>
      <SearchProvider>
        <App />
      </SearchProvider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
