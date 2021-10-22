import { Checkbox, IconButton } from '@material-ui/core';
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons';
import React from 'react';
import "./EmailRow.css";

function EmailRow( { title , subject , description , time}) {
    return (
        <div className="emailrow">
            <div className="emailRow__options">
               <Checkbox/>
               <IconButton>
                   <StarBorderOutlined/>
               </IconButton>
               <IconButton>
                   <LabelImportantOutlined/>
               </IconButton>
            </div>
            <div className="emailRow__title">

            </div>
            <div className="emailRow__message">

            </div>
            <div className="emailRow__description">

            </div>
        </div>
    )
}

export default EmailRow
