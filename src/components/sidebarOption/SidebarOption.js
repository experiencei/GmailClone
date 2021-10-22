import React from 'react'
import "./SidebarOption.css";

function SidebarOption( { Icon , title , number}) {
    return (
        <div className="sidebarOption">
            <Icon/>
        </div>
    )
}

export default SidebarOption
