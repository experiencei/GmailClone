import { Checkbox , IconButton } from '@material-ui/core';
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@material-ui/icons';
import React, { useState } from 'react'
import EmailRow from '../emailrow/EmailRow';
import { db } from '../firebase/firebase';
import Section from '../section/Section';
import "./EmailList.css";

function EmailList() {
   const [ emails , setEmails] = useState([]);

   useEffect(() => {
      db

   }, []);

    return (
        <div className="emailList">
            <div className="emailist__sesttings">
                <div className="emailist__sesttingsLeft">
                    <Checkbox />
                     <IconButton>
                         <ArrowDropDown/>
                     </IconButton>
                     <IconButton>
                         <Redo/>
                     </IconButton>
                     <IconButton>
                         <MoreVert/>
                     </IconButton>
                </div>
                <div className="emailist__sesttingsRight">
                    <IconButton>
                         <ChevronLeft/>
                     </IconButton>
                    <IconButton>
                         <ChevronRight/>
                     </IconButton>
                     <IconButton>
                         <KeyboardHide/>
                     </IconButton>
                     <IconButton>
                         <Settings/>
                     </IconButton>
                </div>
            </div>

            <div className="emailist__sections">
                <Section Icon={Inbox} title="Primary" color="red" selected/>
                <Section Icon={People} title="Social" color="#1A73E8" />
                <Section Icon={LocalOffer} title="Promotions" color="green"/>
            </div>

            <div className="emailist__list">
                <EmailRow
                    title="Wow Experience"
                     subject="Hey gurus in the house"
                     description="this is a house"
                     time="10pm"
                />
                <EmailRow
                    title="Wow Experience"
                     subject="Hey gurus in the house"
                     description="this is a house"
                     time="10pm"
                />
            </div>
        </div>
    )
}

export default EmailList
