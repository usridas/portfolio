import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import './fonts/EditorialNew/PPEditorialNew-Italic.otf';
import './fonts/EditorialNew/PPEditorialNew-Regular.otf';
import './fonts/EditorialNew/PPEditorialNew-Ultrabold.otf';
import './fonts/EditorialNew/PPEditorialNew-UltraboldItalic.otf';
import './fonts/EditorialNew/PPEditorialNew-Ultralight.otf';
import './fonts/EditorialNew/PPEditorialNew-UltralightItalic.otf';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
