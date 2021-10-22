import { Checkbox , IconButton } from '@material-ui/core';
import { ArrowDropDown, MoreVert, Redo } from '@material-ui/icons';
import React from 'react'
import "./EmailList.css";

function EmailList() {
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
            </div>
        </div>
    )
}

export default EmailList
