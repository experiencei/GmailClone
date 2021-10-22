import React, { useEffect } from 'react';
import {  selectSendMessageIsOPen } from './features/mailSlice';
import {  selectUser , login  } from './features/userSlice';
import { BrowserRouter as Router , Switch , Link , Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Mail from './components/mail/Mail';
import EmailList from './components/email/EmailList';
import SendMail from './components/sendmail/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/login/Login';
import { auth } from './components/firebase/firebase';

function App() {
 const sendMessageIsOPen = useSelector(selectSendMessageIsOPen)
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
       auth.onAuthStateChanged(user => {
         if(user){
           dispatch(login({
              displayName : user.displayName,
              email : user.email,
              photoUrl: user.photoUrl,
           }))
         }
       })
  }, [])

  return (
    <Router>
{!user ? (<Login/>) : 
  (<div className="app">
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
    </div>)
}

    
    </Router>
  );
}

export default App;
