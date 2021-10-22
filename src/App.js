import React from 'react';
import { selectUser , login ,logout } from './features/userSlice';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
    <Header/>
    <Sidebar/>
    </div>
  );
}

export default App;
