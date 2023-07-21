import React,{useState} from 'react';
// import './App.css';
import AddUser from './components/users/AddUser';
import UserList from './components/users/UserList';

function App() {
  const [usersList,setUsersList]= useState([]);

  function handleList(uname,Age){
      setUsersList((prev)=>{
        return [...prev,{name:uname, age:Age ,id: Math.random().toString()}];
      });
  }

  return (
    <div>
      <AddUser onAddUser={handleList} />
      <UserList users={usersList}/>
    </div>
    
  );
}

export default App;
