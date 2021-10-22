import React from 'react'
import { Button } from '@material-ui/core';
import { Add, Inbox } from '@material-ui/icons';
import "./Sidebar.css";
import SidebarOption from '../sidebarOption/SidebarOption';


function Sidebar() {
    return (
        <div className="sidebar">
            <Button    className="sidebar__compose" startIcon={ <Add fontSize="large"/>}>Compose</Button>

            <SidebarOption Icon={Inbox} title="inbox" number={54}/>
        </div>
    )
}

export default Sidebar
