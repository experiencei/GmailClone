import React from 'react';
import { selectUser , login ,logout, selectSendMessageIsOPen } from './features/mailSlice';
import { BrowserRouter as Router , Switch , Link , Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Mail from './components/mail/Mail';
import EmailList from './components/email/EmailList';
import SendMail from './components/sendmail/SendMail';
import { useSelector } from 'react-redux';

function App() {
 const sendMessageIsOPen = useSelector(selectSendMessageIsOPen)

  return (
    <Router>
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

   {sendMessageIsOPen && <SendMail />}
    </div>
    </Router>
  );
}

export default App;
