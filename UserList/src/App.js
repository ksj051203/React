import React, { useState } from 'react';

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
    <div>
      <AddUser userInformation = {AddUsers}/>
      <UserList userList = {users}/>
    </div>
  );
}

export default App;
