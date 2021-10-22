import React from 'react'
import { Button } from '@material-ui/core';
import { Add, Inbox, Star } from '@material-ui/icons';
import "./Sidebar.css";
import SidebarOption from '../sidebarOption/SidebarOption';


function Sidebar() {
    return (
        <div className="sidebar">
            <Button    className="sidebar__compose" startIcon={ <Add fontSize="large"/>}>Compose</Button>

            <SidebarOption Icon={Inbox} title="Inbox" number={54}selected={true}/>
            <SidebarOption Icon={Star} title="Starred" number={84}/>
        </div>
    )
}

export default Sidebar
