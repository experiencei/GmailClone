import React from 'react';
import { selectUser , login ,logout } from './features/userSlice';
import { BrowserRouter as Router , Switch , Link , Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    < Router>
    <div className="app">
    <Header/>
    <div className="app__body">
    <Sidebar/>

    <Switch>
        <Route path="/mail">
           <Mail/>
        </Route>
        <Route path="/">
            <EmailList/>
        </Route>
    </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
