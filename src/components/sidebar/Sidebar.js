import React from 'react'
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import "./Sidebar.css";


function Sidebar() {
    return (
        <div className="sidebar">
            <Button  startIcon={ <Add fontSize="large" 
                className="sidebar__compose"
            />}>Compose</Button>
        </div>
    )
}

export default Sidebar
