import { IconButton, Menu } from '@material-ui/core';
import React from 'react'
import "./Header.css";

function Header() {
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

              </div>
              <div className="header__right">

              </div>
        </div>
    )
}

export default Header
