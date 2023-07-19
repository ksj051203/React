import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UserInfo from './components/Users/UserInfo';

function App() {
  const [users, setUsers] = useState([{}])

  const AddUsers = (user) =>{
    setUsers((prevState) => {
      return [...prevState, user]
    })
  }
 
  return (
    <div>
      <AddUser userInformation = {AddUsers}/>
      <UserInfo userList = {users}/>
    </div>
  );
}

export default App;
