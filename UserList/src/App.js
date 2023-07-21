import React, { useState, Fragment } from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [users, setUsers] = useState([])

  const AddUsers = (user) =>{
    setUsers((prevState) => {
      return [...prevState, {id: user.id, name: user.name, age: user.age}]
    })
  }
 
  return (
    <Fragment>
      <AddUser userInformation = {AddUsers}/>
      <UserList userList = {users}/>
    </Fragment>
  );
}

export default App;
