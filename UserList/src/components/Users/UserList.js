import React from 'react';
import classes from './UserList.module.css';
const UserList = (props) => {
    return(
        <div className={classes.users}>
           <ul>
                <li>{props.name}</li>
                <li>{props.age}</li>
            </ul>
        </div>
    )
}

export default UserList;