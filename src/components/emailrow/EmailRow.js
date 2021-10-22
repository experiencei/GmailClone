import { Checkbox, IconButton } from '@material-ui/core';
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { selectMail } from '../../features/mailSlice';
import "./EmailRow.css";

function EmailRow( { id , title , subject , description , time}) {
  const dispatch = useDispatch();
  const  history = useHistory();

  const openMail = () => {
      dispatch(selectMail({
        id , title , subject , description , time
      }));

      history.push("/mail")
  }
    return (
        <div onClick={openMail} className="emailrow">
            <div className="emailRow__options">
               <Checkbox/>
               <IconButton>
                   <StarBorderOutlined/>
               </IconButton>
               <IconButton>
                   <LabelImportantOutlined/>
               </IconButton>
            </div>
            <h3 className="emailRow__title">
                {title}
            </h3>
            <div className="emailRow__message">
               <h4>{subject} {" "}
               <span className="email__description">
                 -{" "}{description}
               </span> </h4>
            </div>
            <p className="emailRow__time">
               {time}
            </p>
        </div>
    )
}

export default EmailRow
