import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import{ useForm } from "react-hook-form";
import React from 'react';
import "./SendMail.css";
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../features/mailSlice';
import { db } from '../firebase/firebase';
import firebase from '@firebase/app-compat';

function SendMail() {
    const { register , handleSubmit , watch , formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
         db.collection("email").add({
             to : formData.to,
             subject : formData.subject,
             message : formData.message,
             timestamp : firebase.firestore.FieldValue.serverTimestamp(),
         });
         dispatch(closeSendMessage())
       }
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <Close 
                onClick={() => dispatch(closeSendMessage())}
                className="sendMail__close"/>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} >

                <input 
                 type="email"
                 name="to"
                 placeholder="To"   
                 {...register("to", { required: true })}
                 />
                {errors.to &&  <p className="sendMail__error"> To is Required!</p>}
    
                <input type="text" 
                name="subject" 
                placeholder="Subject" 
                {...register("subject", { required: true })}
                />
                {errors.subject &&  (<p className="sendMail__error"> Subject is Required</p>)}

                <input type="text"
                 name="message" 
                 placeholder="Message..." className="sendMail__message"
                 {...register("message" , { required: true })}
                />
                {errors.message &&  <p className="sendMail__error">Message is Required</p>}

                <div className="sendMail__options">
                    <Button className="sendMail__send"
                       variant="contained"
                       color="primary"
                       type="submit"
                    >Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
