import React from 'react';
import { selectUser , login ,logout } from './features/userSlice';
import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <div className="app">
    <Header/>
      <h2>Hello yihua</h2>
    </div>
  );
}

export default App;
