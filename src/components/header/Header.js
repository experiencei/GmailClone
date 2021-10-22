import { Avatar, IconButton } from '@material-ui/core';
import { Apps, ArrowDropDown, Menu , Notifications, Search}   from '@material-ui/icons';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import "./Header.css";

function Header() {
  const user = useSelector(selectUser)

    return (
        <div className="header">
              <div className="header__left">
                 <IconButton>
                     <Menu/>
                 </IconButton>
                 <img
                     src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
                     alt=""
                 />
              </div>
              <div className="header__middle">
                     <Search/>
                     <input type="text" className="" placeholder="Search mail"/>
                     <ArrowDropDown className="header__inputCaret"/>
              </div>
              <div className="header__right">
                 <IconButton>
                     <Apps/>
                 </IconButton>
                 <IconButton>
                     <Notifications/>
                 </IconButton>
                 <Avatar/>
              </div>
        </div>
    )
}

export default Header
