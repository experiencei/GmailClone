import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import{ useForm } from "react-hook-form";
import React from 'react';
import "./SendMail.css";


function SendMail() {
    const { register , handleSubmit ,watch , errors } = useForm();

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <Close className="sendMail__close"/>
            </div>

            <form>
                <input type="text" name="to" placeholder="To" className="" ref={register({required: true})}/>

                <input type="text" name="subject" placeholder="Subject" className=""/>

                <input type="text" name="message" placeholder="Message..." className="sendMail__message"/>

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
