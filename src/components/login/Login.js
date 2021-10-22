import { Button } from '@material-ui/core';
import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth, provider } from '../firebase/firebase';
import "./Login.css";


function Login() {
  const dispatch = useDispatch();

   const  signIn = () => {
       auth.signInWithPopup(provider)
       .then(({ user }) => {
            dispatch(login({
                displayName : user.displayName,
                email : user.email,
                photoUrl: user.photoUrl,
            }))
       })
   }

    return (
        <div className="login">
            <div className="login__container">
                <img
                     alt="Login"
                      src="https://cdn.vox-cdn.com/thumbor/K-q2WRPRyxxzzPLjxHGt26swMfM=/0x0:1320x880/1200x800/filters:focal(555x335:765x545)/cdn.vox-cdn.com/uploads/chorus_image/image/67587450/newgmaillogo.0.jpg"
                />
                <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login
