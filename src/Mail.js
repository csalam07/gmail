import { IconButton } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Mail.css';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import DeleteIcon from '@material-ui/icons/Delete';
import ErrorIcon from '@material-ui/icons/Error';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import LabelImportantRoundedIcon from '@material-ui/icons/LabelImportantRounded';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PrintIcon from '@material-ui/icons/Print';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import { selectOpenMail } from './features/mailSlice';
import { useSelector } from 'react-redux';

function Mail() {
    const selectedMail = useSelector(selectOpenMail);
    const history = useHistory();

    return (
        <div className="mail">
            <div className="mail__tools" > 
                 <div className="mail__toolsLeft"> 
                       <IconButton onClick={()=> history.push("/")}>
                            <ArrowBackIcon/>
                       </IconButton>
                       <IconButton>
                           <MoveToInboxIcon />
                       </IconButton>
                       <IconButton>
                            <ErrorIcon />
                       </IconButton>
                       <IconButton>
                               <DeleteIcon />
                       </IconButton>
                       <IconButton>
                           <WatchLaterIcon />
                       </IconButton>
                       <IconButton>
                            <CheckCircleRoundedIcon/>
                       </IconButton>
                       <IconButton>
                             <LabelImportantRoundedIcon/>
                       </IconButton>
                       <IconButton>
                              <MoreVertIcon/> 
                       </IconButton>

                 </div>
                 <div className="mail__toolsRight"> 
                       <IconButton>
                           <UnfoldMoreIcon />
                       </IconButton>
                       <IconButton>
                            <PrintIcon/>
                       </IconButton>
                       <IconButton>
                             <ExitToAppIcon/>
                       </IconButton>
                </div>
            </div>
            <div className="mail__body">
                   <div className="mail__bodyHeader">
                       <h2>{selectedMail?.subject}</h2>
                       <LabelImportantRoundedIcon 
                       className="mail__important"/>
                       <p>{selectedMail?.title}</p>
                       <p className="mail__time">{selectedMail?.time}</p>
                   </div>
                   <div className="mail__message">
                     <p>{selectedMail?.description}</p>  
                   </div>
            </div>
        </div>
    )
}

export default Mail
