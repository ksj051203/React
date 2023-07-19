import React from 'react';
import UserList from './UserList';
const UserInfo = (props) => {
    return (
        <div>
            {props.userList.map(list => <UserList id={list.id} name={list.name} age={list.age} />)}
        </div>
    )
}

export default UserInfo;