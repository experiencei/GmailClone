import { IconButton } from '@material-ui/core';
import { ArrowBack, CheckCircle, Delete, Email, Error, LabelImportant, MoreVert, MoveToInbox, WatchLater } from '@material-ui/icons';
import React from 'react'
import { useHistory } from 'react-router';
import "./Mail.css";

function Mail() {
   const history = useHistory();

    return (
        <div className="mail">
           <div className="mail__tools">
               <div className="mail__toolsLeft">
                    <IconButton onClick={ () => history.push("/")}>
                        <ArrowBack/>
                    </IconButton>

                    <IconButton>
                        <MoveToInbox/>
                    </IconButton>

                    <IconButton>
                        <Error/>
                    </IconButton>

                    <IconButton>
                        <Delete/>
                    </IconButton>

                    <IconButton>
                        <Email/>
                    </IconButton>

                    <IconButton>
                        <WatchLater/>
                    </IconButton>

                    <IconButton>
                        <CheckCircle/>
                    </IconButton>

                    <IconButton>
                        <LabelImportant/>
                    </IconButton>

                    <IconButton>
                        <MoreVert/>
                    </IconButton>
               </div>
               <div className="mail__toolsRight">

               </div>
           </div>
           <h1>Hello </h1>
        </div>
    )
}

export default Mail
