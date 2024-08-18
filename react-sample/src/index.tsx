
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'; // `./App.js から App 関数を取り込んでいる` 
import reportWebVitals from './reportWebVitals';
import Hello from './components/Hello'


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!); // Non-null assertion operator (!) を使ってnullを避ける

root.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>
);