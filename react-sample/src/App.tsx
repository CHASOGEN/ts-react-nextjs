import React from 'react';
import logo from './logo.svg';
import './App.css';

// 関数で App というコンポーネントを定義している
function App() {
  // App コンポーネントでは HTML 要素を返してくる
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// 定義した App をデフォルトエクスポートしている
export default App;
