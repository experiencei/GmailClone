import React from 'react'
import { Button } from '@material-ui/core';
import { AccessTime, Add, ExpandMore, Inbox, LabelImportant, NearMe, Note, Star } from '@material-ui/icons';
import "./Sidebar.css";
import SidebarOption from '../sidebarOption/SidebarOption';


function Sidebar() {
    return (
        <div className="sidebar">
            <Button    className="sidebar__compose" startIcon={ <Add fontSize="large"/>}>Compose</Button>

            <SidebarOption Icon={Inbox} title="Inbox" number={54}selected={true}/>
            <SidebarOption Icon={Star} title="Starred" number={84}/>
            <SidebarOption Icon={AccessTime} title="Snoozed" number={34}/>
            <SidebarOption Icon={LabelImportant} title="Important" number={54}/>
            <SidebarOption Icon={NearMe} title="Sent" number={24}/>
            <SidebarOption Icon={Note} title="Drafts" number={154}/>
            <SidebarOption Icon={ExpandMore} title="More" number={4}/>
        </div>
    )
}

export default Sidebar
