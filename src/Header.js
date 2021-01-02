import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import { useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch((logout()));
        });
    };

    return (
        <div className="header">
             <div className="header__left">
              <IconButton>
                  <MenuIcon />
              </IconButton>
              <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-3-1.png"
              alt="" />
             </div>
             <div className="header__center">
                 <IconButton>
                     <SearchIcon/>
                 </IconButton>
                
                <input placeholder="Search mail" type="search" />
                <IconButton>
                   <ArrowDropDownIcon/>
                </IconButton>
                
             </div>
              <div className="header__right">
                 <IconButton>
                     <HelpOutlineIcon/>
                 </IconButton>
                 <IconButton>
                     <SettingsIcon/>
                 </IconButton>     
                 <IconButton>
                      <AppsIcon/>
                 </IconButton>
                 <Avatar
                 className="header__avatar"
                 onClick={signOut} src={user?.photoUrl} />
              </div>    
        </div>
    )
}

export default Header
