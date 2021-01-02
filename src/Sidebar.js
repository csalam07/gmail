import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import { useDispatch } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import SidebarOptions from './SidebarOptions';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import PersonIcon from '@material-ui/icons/Person';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import PhoneIcon from '@material-ui/icons/Phone';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AccessTimeTwoToneIcon from '@material-ui/icons/AccessTimeTwoTone';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { openSendMessage } from './features/mailSlice';

function Sidebar() {
    const dispatch = useDispatch();

    return (
        <div className="sidebar">
            <Button 
            onClick={ () => dispatch(openSendMessage())}
            startIcon={<AddIcon fontSize="large"/>}
            className="sidebar__compose"
            >compose</Button>

            <SidebarOptions Icon={InboxIcon} title="Index" number={54} selected={true} />
            <SidebarOptions Icon={StarIcon} title="Starred" number={54}/>
            <SidebarOptions Icon={AccessTimeTwoToneIcon} title="Snoozed" number={54}/>
            <SidebarOptions Icon={SendIcon} title="Sent" number={54}/>
            <SidebarOptions Icon={InsertDriveFileIcon} title="Drafts" number={54}/>
            <SidebarOptions Icon={KeyboardArrowDownIcon} title="More" />

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                   <IconButton>
                       <PersonIcon />
                   </IconButton>
                   <IconButton>
                       <FormatQuoteIcon/>
                    </IconButton>
                    <IconButton>
                       <PhoneIcon/>
                    </IconButton>
            </div>
            </div>
        </div>
    )
}

export default Sidebar
