import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Header } from './Header/header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
